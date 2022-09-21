import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import home from "../components/content_types/home"
import header from "../components/bloks/header"

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  // bridge: true,
  use: [apiPlugin],
  components: {
    home,
    header,
  },
});

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
