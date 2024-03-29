import { StoryblokComponent, useStoryblokState, getStoryblokApi } from "@storyblok/react";
import { createContext } from "react";
import Navigation from "../components/layout/navigation"
import Footer from "../components/layout/footer"

import SeoMetaTags from "../components/layout/seo-meta-tags"

export const EventsContext = createContext()
export const ContactContext = createContext()
export const NewsContext = createContext()
export const MapsContext = createContext()

export default function Page({ preview, story, global, contact, events, news, maps }) {
    if (preview) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        story = useStoryblokState(story);
    }

    if (!story?.content) {
        return <div className="container w-screen h-screen p-4 flex justify-center items-center">Lade...</div>;
    }

    return (
        <>
            <SeoMetaTags story={story} />
            <Navigation global={global} currentStory={story} />
            <ContactContext.Provider value={contact}>
                <EventsContext.Provider value={events}>
                    <NewsContext.Provider value={news}>
                        <MapsContext.Provider value={maps}>
                            <StoryblokComponent blok={story.content} />
                        </MapsContext.Provider>
                    </NewsContext.Provider>
                </EventsContext.Provider>
            </ContactContext.Provider>
            <footer>
                <Footer blok={global.content} currentstory={story} />
            </footer>
        </>
    )
}

export async function getStaticProps({ query, params, preview = false }) {
    const storyblokApi = getStoryblokApi()
    preview = process.env.NODE_ENV === 'development' || preview
    // home is the default slug for the homepage in Storyblok
    let slug = params?.slug ? params.slug.join("/") : "home";
    // load the published content outside of the preview mode
    let sbParams = {
        version: 'published',
        resolve_links: 'url'
    }

    if (preview) {
        // load the draft version inside of the preview mode
        sbParams.version = 'draft'
        sbParams.cv = Date.now()
    }
    let storyQuery = storyblokApi.get(`cdn/stories/${slug}`, sbParams)
    let globalQuery = storyblokApi.get(`cdn/stories/global`, sbParams)
    let contactQuery = storyblokApi.get(`cdn/stories/kontakt`, sbParams)
    let newsQuery = storyblokApi.get(`cdn/stories/news`, sbParams)
    let eventsQuery = storyblokApi.get(`cdn/stories/termine`, sbParams)
    let mapsQuery = storyblokApi.get('cdn/stories/karten', sbParams)

    const responses = await Promise.all([storyQuery, globalQuery, contactQuery, eventsQuery, newsQuery, mapsQuery])

    return {
        props: {
            story: responses[0].data ? responses[0].data.story : null,
            global: responses[1].data ? responses[1].data.story : null,
            contact: responses[2].data ? responses[2].data.story : null,
            events: responses[3].data ? responses[3].data.story : null,
            news: responses[4].data ? responses[4].data.story : null,
            maps: responses[5].data ? responses[5].data.story : null,
            key: slug,
            preview,
        },
        revalidate: 3600, // revalidate every hour
    }
}

export async function getStaticPaths() {
    const storyblokApi = getStoryblokApi()
    // get all links from Storyblok
    let { data } = await storyblokApi.get("cdn/links/");

    let paths = [];
    // create a routes for every link
    Object.keys(data.links).forEach((linkKey) => {
        // do not create a route for folders and home
        if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
            return;
        }

        // get array for slug because of catch all
        const slug = data.links[linkKey].slug;
        let splittedSlug = slug.split("/");

        // creates all the routes
        paths.push({ params: { slug: splittedSlug } });
    });

    return {
        paths: paths,
        fallback: 'blocking',
    };
}
