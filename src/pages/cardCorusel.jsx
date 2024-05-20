import React, { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import axios from "axios"

export default function CardCorusel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const [data, setData] = useState([])

  const url = "https://007b6d314346b7fa.mokky.dev/images"

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data))
  }, [])
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <img src={product.images} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        //   direction="vertical"
      >
        <div className="relative left-[300px]">
          {data.map((picture) => (
            <div key={picture.id}>
              <SwiperSlide>
                <img src={picture.images} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={picture.images} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={picture.images} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={picture.images} />
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </>
  )
}
