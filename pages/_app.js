import '../styles/globals.scss'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import home from "../components/content_types/home"
import header from "../components/bloks/header"
import verein from "../components/content_types/verein"
import application_button from "../components/bloks/application_button"
import button from "../components/bloks/button"
import team_grid from "../components/bloks/team_grid"
import team_card from "../components/bloks/team_card"
import kontakt from "../components/content_types/kontakt"
import termine from "../components/content_types/termine"
import news from "../components/content_types/news"
import karten from "../components/content_types/karten"
import event_card from "../components/bloks/event_card"
import event_grid from "../components/bloks/event_grid"
import event_teaser from "../components/bloks/event_teaser"
import partnerlogo from "../components/bloks/partnerlogo"
import partnerlogo_grid from "../components/bloks/partnerlogo_grid"
import verein_intro from "../components/bloks/verein_intro"
import text_block from "../components/bloks/text_block"
import trainings from "../components/bloks/trainings"
import table from "../components/bloks/table"
import news_card from "../components/bloks/news_card"
import news_overlay from "../components/bloks/news_overlay"
import news_teaser from "../components/bloks/news_teaser"
import product_grid from "../components/bloks/product_grid"
import product from "../components/bloks/product"

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
    karten,
    product_grid,
    product,
    termine,
    news,
    news_card,
    news_overlay,
    news_teaser,
    text_block,
    partnerlogo,
    partnerlogo_grid,
    event_card,
    event_grid,
    application_button,
    button,
    team_card,
    team_grid,
    event_teaser,
    trainings,
    table,
  },
});

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
