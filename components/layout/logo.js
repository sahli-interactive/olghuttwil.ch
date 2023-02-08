import React from 'react'
import Image from "next/image"

const Logo = () => (
  <Image
    src="/logo.png"
    alt="Logo von OLG Huttwil"
    layout="responsive"
    placeholder="blur"
    width="479"
    height="95"
  />
)

export default Logo
