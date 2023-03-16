import React from "react"
import Image from "next/image"

import principalProgress from "../../public/ss.png"

function Produccion() {
  return (
    <div className="">
      <Image
        className="w-[50em] h-[35em] mx-auto"
        src={principalProgress}
        alt="Picture of the author"
      />
    </div>
  )
}

export default Produccion
