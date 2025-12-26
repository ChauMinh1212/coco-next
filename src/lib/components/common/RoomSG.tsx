import { IRoomSG } from "@/lib/interface"
import { BookingButton } from "./BookingButton"
import { SlideImg } from "./SlideImage"

const RoomSG = ({ room }: { room: IRoomSG }) => {
    return (
        <div className="sm:flex flex-col sm:flex-row bg-white font-sriracha sm:text-xl text-[13px] rounded-[20px] border-[2px] md:border-[3px] border-[#00552c] overflow-hidden">
            <div className="flex-1 overflow-hidden aspect-[1/1] sm:aspect-[1/1.1] -m-[2px] md:-m-[3px] border-[2px] md:border-[3px] border-[#00552c] rounded-[20px]">
                <div className="h-full w-full">
                    <SlideImg
                        img={room.img.length != 0 ? room.img.map((item) => {
                            return {
                                ...item,
                                src: `${process.env.NEXT_PUBLIC_CDN_URL}${item.src}`,
                                ...(item.type == 'video' && {
                                    sources: item.sources.map((source) => {
                                        return {
                                            ...source,
                                            src: `${process.env.NEXT_PUBLIC_CDN_URL}${source.src}`,
                                        }
                                    })
                                }),
                            }
                        }) : [{ src: '/img/default.jpg' }]}
                        className="w-full h-full bg-black"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="font-arimo flex-1 md:w-full sm:p-[20px] p-[10px] flex flex-col justify-between text-[13px] md:text-base">
                <div className="space-y-3 md:space-y-5">
                    <p className="font-baloo text-line-[0.8px_#000] text-white text-2xl md:text-4xl md:text-line-[1px_#000] lg:text-line-[1.5px_#000]">{room.name}</p>
                    <p><strong>Địa chỉ:</strong> {room.address}</p>
                    <p><strong>Mô tả:</strong> {room.description}</p>
                    <p><strong>Tiện nghi:</strong> {room.convenient}</p>
                </div>
                <div className="mt-[20px]">
                    <BookingButton />
                </div>
            </div>
        </div>
    )
}

export { RoomSG }
