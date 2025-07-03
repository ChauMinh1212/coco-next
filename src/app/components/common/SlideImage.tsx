import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageCustom from './Image';

interface ISlideImgProps {
    img: {
        src: string
        type: string | 'img' | 'video'
    }[]
}

const SlideImg = (props: ISlideImgProps) => {
    const { img } = props
    return (
        <div className='
        flex 
        justify-center 
        relative 
        mb-[20px]
        '>
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
                    <SwiperSlide key={index}>
                        <div className='w-full h-full'>
                            {item.type == 'img' && (
                                <ImageCustom src={item.src} alt="" objectFit='contain' height='100%' />
                            )}
                            {item.type == 'video' && (
                                <video src={item.src} autoPlay muted loop className='h-full w-full object-contain'></video>
                            )}
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SlideImg