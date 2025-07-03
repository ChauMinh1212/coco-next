"use client"
import { useEffect, useState } from "react";
import ImageCustom from "@/app/components/common/Image";

interface IEvent {
    id: number;
    name: string;
    content: string;
    img: {
        url: string;
    } | null;
    documentId: string;
    from: string;
    to: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

const EventPage = () => {
    const [event, setEvent] = useState<IEvent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchEvent = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events?populate=img`);
            const data = await response.json();
            setEvent(data.data);
            setLoading(false);
        }
        fetchEvent();
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-[30px] py-[30px]">
            <p className="mb-[20px] text-center font-paytone text-line-[1px_#000] text-[50px] sm:text-[30px] text-[#ffde59]">CHƯƠNG TRÌNH</p>
            <div>
                {
                    loading ? (<div className="flex justify-center items-center">Đang tải ....</div>) : (
                        event?.map((item) => (
                            <div key={item.documentId} className="flex sm:flex-col bg-[rgba(255,255,255,0.4)] mb-[30px] relative">
                                <div className="bg-gradient-to-r from-[#5de0e6] to-[#004aad] absolute inset-0 opacity-[0.45]"></div>

                                <div className="relative basis-[30%]">
                                    <ImageCustom src={item.img?.url ? `${item.img.url}` : '/img/sample.webp'} alt=""/>
                                </div>
                                <div className="flex-1 p-[15px] font-dejavu text-[15px] sm:text-[13px] ">
                                    <div className="relative">
                                        <p><span className="font-semibold mr-[5px]">Tên chương trình:</span>{item.name}</p>
                                        <p><span className="font-semibold mr-[5px]">Thời gian:</span>từ {item.from} đến {item.to}</p>
                                        <p className="whitespace-pre-line"><span className="font-semibold mr-[5px]">Nội dung chương trình:</span>{item.content}</p>
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