import { IRoom } from "@/lib/interface"
import { BookingButton } from "./BookingButton"
import { SlideImg } from "./SlideImage"

const Room = ({ room }: { room: IRoom }) => {
    return (
        <div
            className="sm:flex flex-col sm:flex-row bg-white font-sriracha sm:text-xl text-[13px] rounded-[20px]"
        >
            <div className="flex-1 border-[3px] border-[#00552c] rounded-[20px] overflow-hidden aspect-[1/1] sm:aspect-[1/1.1]">
                <div className="h-full w-full">
                    <SlideImg
                        img={room.img.length != 0 ? room.img : [{ src: '/img/default.jpg' }]}
                        className="w-full h-full bg-black"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="flex-1 md:w-full sm:p-[20px] p-[10px] flex flex-col justify-between">
                <div className="space-y-3 md:space-y-5">
                    <p>{room.name}</p>
                    <p className="whitespace-pre-line">{room.description}</p>
                </div>
                <div className="mt-[20px]">
                    <BookingButton />
                </div>
            </div>
        </div>
    )
}

export { Room }
