import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/app/styles/SlideImage.module.css";

const SlideImg = (props: { img?: string[] }) => {
    const { img } = props
    return (
        <div className='flex justify-center relative mb-[20px]'>
            <Swiper
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={`
                    max-w-5xl 
                    w-full 
                    aspect-[5/2] 
                    md:aspect-[4/2] 
                    sm:aspect-[1/1] 
                    border-white 
                    border-[3px] 
                    rounded-[30px] 
                    bg-black
                    }`}
            >
                {img?.map((item, index) => (
                    <SwiperSlide key={index}><div className={`bg-no-repeat bg-contain bg-center w-full h-full`} style={{ backgroundImage: `url(${item})` }}></div></SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SlideImg