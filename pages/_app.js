import '../styles/globals.scss'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import home from "../components/content_types/home"
import header from "../components/bloks/header"
import verein from "../components/content_types/verein"
import button from "../components/bloks/button"
import team_grid from "../components/bloks/team_grid"
import team_card from "../components/bloks/team_card"
import kontakt from "../components/content_types/kontakt"
import termine from "../components/content_types/termine"
import event_card from "../components/bloks/event_card"
import event_grid from "../components/bloks/event_grid"
import event_teaser from "../components/bloks/event_teaser"
import partnerlogo from "../components/bloks/partnerlogo"
import partnerlogo_grid from "../components/bloks/partnerlogo_grid"
import verein_intro from "../components/bloks/verein_intro"

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  // bridge: true,
  use: [apiPlugin],
  components: {
    home,
    header,
    verein,
    verein_intro,
    kontakt,
    termine,
    partnerlogo,
    partnerlogo_grid,
    event_card,
    event_grid,
    button,
    team_card,
    team_grid,
    event_teaser,
  },
});

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
