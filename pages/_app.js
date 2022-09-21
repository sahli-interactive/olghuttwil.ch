import '../styles/globals.scss'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import home from "../components/content_types/home"
import header from "../components/bloks/header"
import verein from "../components/content_types/verein"
import button from "../components/bloks/button"
import team_grid from "../components/bloks/team_grid"
import team_card from "../components/bloks/team_card"
import kontakt from "../components/content_types/kontakt"

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  // bridge: true,
  use: [apiPlugin],
  components: {
    home,
    header,
    verein,
    kontakt,
    button,
    team_card,
    team_grid,
  },
});

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
