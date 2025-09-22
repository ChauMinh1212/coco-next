"use client"

import { HowToBook, ImageCustom, Question, RoomSG } from "@/lib/components/common";
import { ROOMS_SG } from "@/lib/data";

const CocoGardenSgPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-[10px] py-[20px] lg:py-[40px] font-dejavu space-y-6 md:space-y-8">
            {ROOMS_SG.map((room, index) => (
                <RoomSG room={room} key={index} />
            ))}
            <div className="max-w-xl mx-auto">
                <ImageCustom src="/img/price.jpg" alt="coco-garden-sg" />
            </div>
            <div className="max-w-5xl mx-auto py-[30px] pt-0 sm:pt-[30px]">
                <HowToBook />
                <Question />
            </div>

        </div>
    )
}

export default CocoGardenSgPage
