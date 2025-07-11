import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageCustom from './Image';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { Counter, Thumbnails, Video } from 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from './LightBoxImage';
interface ISlideImgProps {
    img: {
        src: string
        type: string | 'img' | 'video',
        sources?: {
            type: string,
            src: string
        }
    }[],
    className?: string,
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

const SlideImg = (props: ISlideImgProps) => {
    const { img, className } = props
    const [openLightBox, setOpenLightBox] = useState(false)
    const [slides, setSlides] = useState<any[]>([])

    const handleOpenLightBox = (index: number) => {
        setOpenLightBox(true)
        const newSlides = img.map((item) => ({
            src: item.src,
            ...(item.type == 'video' && { type: item.type }),
            ...(item.type == 'video' && { sources: item.sources })
        }))
        setSlides([...newSlides.slice(index), ...newSlides.slice(0, index)])
    }

    return (
        <Swiper
            loop={true}
            navigation={true}
            pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3
            }}
            modules={[Pagination, Navigation]}
            className={className}
        >
            {img?.map((item, index) => (
                <SwiperSlide onClick={() => handleOpenLightBox(index)} key={index}>
                    <div className='w-full h-full cursor-pointer'>
                        {!item?.type && (
                            <ImageCustom src={item.src} alt="" objectFit={props?.objectFit || 'contain'} height='100%' />
                        )}
                        {item.type == 'video' && (
                            <video src={item.sources[0].src} autoPlay muted loop className='h-full w-full object-contain' />
                        )}
                    </div>
                </SwiperSlide>
            ))}
            <Lightbox
                open={openLightBox}
                close={() => setOpenLightBox(false)}
                slides={slides}
                render={{ slide: NextJsImage }}
                counter={{ container: { style: { top: 0, bottom: 'unset' } } }}
                plugins={[Thumbnails, Video, Counter]}
            />
        </Swiper>

    )
}

export default SlideImg