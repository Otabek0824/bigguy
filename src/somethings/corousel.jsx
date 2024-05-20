import { useEffect, useState } from "react"
import axios from "axios"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Corousel = () => {
  const swipe = useSwiper()
  const url = "https://007b6d314346b7fa.mokky.dev/img"

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data))
  }, [])
  return (
    <div>
      <Swiper 
      style={{
        '--swiper-navigation-color': 'rgba(128, 128, 128, 0.896)',
        '--swiper-pagination-color': 'rgba(128, 128, 128, 0.896)',
      }}
      className="mb-[40px]"
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{
          clickable: true,
        }} 
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              className="max-h-[400px] rounded-[10px] aspect-video w-full"
              src={item.img}
              alt="img"
            />
          </SwiperSlide>    
        ))}
      </Swiper>
    </div>
  )
}

export default Corousel
