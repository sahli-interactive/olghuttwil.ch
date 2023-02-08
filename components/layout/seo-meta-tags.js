import React from 'react'
import Head from "next/head";

const SeoMetaTags = ({ story, robots = 'index, follow' }) => {
    return (
        <Head>
            <title>{story.content?.seo?.title ?? story.name} · OLG Huttwil</title>
            <meta name="created" content={story.published_at} />
            <meta name="robots" content={robots} />
            <meta property="og:type" content="website" />
            <meta name="twitter:title" property="og:title" content={story.content?.seo?.title ?? story.name} />
            <meta name="twitter:url" property="og:url" content={`https://olghuttwil.ch/${story.slug}`} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:domain" property="og:site_name" content="OLG Huttwil" />
            <meta name="description" content={story.content?.seo?.description ?? ''} lang={story.lang === 'default' ? 'de' : story.lang} />
            <meta name="twitter:description" property="og:description" content={story.content?.seo?.description ?? ''} />
            <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#ffc40d" />
            <meta name="theme-color" content="#ffffff"></meta>
        </Head>
    )
}

export default SeoMetaTags
