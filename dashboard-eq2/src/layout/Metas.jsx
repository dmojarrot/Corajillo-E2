import React from "react"
import Image from "next/image"

import principalProgress from "../../public/ss.png"

function Metas() {
  return (
    <div className="pl-6">
      <Image
        className="w-full h-[37em] mx-auto"
        src={principalProgress}
        alt="Picture of the author"
      />
    </div>
  )
}

export default Metas
