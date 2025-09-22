"use client"
import { getEvent } from "@/api/event/event";
import { ImageCustom, Title } from "@/lib/components/common";
import { IEvent } from "@/lib/interface/event";
import { useEffect, useState } from "react";

const EventPage = () => {
    const [event, setEvent] = useState<IEvent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getEvent().then((res) => {
            setEvent(res);
            setLoading(false);
        });
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-[30px] py-[30px] lg:py-[40px]">
            <Title title="CHƯƠNG TRÌNH" color="#ffde59" lineColor="black" />
            <div className="mt-[20px]">
                {
                    loading ? (
                        <div className="flex justify-center items-center">
                            Đang tải ....
                        </div>
                    ) : (
                        event?.map((item) => (
                            <div key={item.id} className="flex flex-col sm:flex-row bg-[rgba(255,255,255,0.4)] mb-[30px] relative">
                                <div className="bg-gradient-to-r from-[#5de0e6] to-[#004aad] absolute inset-0 opacity-[0.45]"></div>
                                <div className="relative basis-[30%]">
                                    <ImageCustom src={item?.img?.url ? `${item.img.url}` : '/img/sample.webp'} alt="" />
                                </div>
                                <div className="flex-1 p-[15px] font-dejavu sm:text-[15px] text-[13px]">
                                    <div className="relative">
                                        <p>
                                            <span className="font-semibold mr-[5px]">Tên chương trình:</span>
                                            {item.name}
                                        </p>
                                        <p>
                                            <span className="font-semibold mr-[5px]">Thời gian:</span>
                                            từ {item.from} đến {item.to}
                                        </p>
                                        <p className="whitespace-pre-line">
                                            <span className="font-semibold mr-[5px]">Nội dung chương trình:</span>
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default EventPage;