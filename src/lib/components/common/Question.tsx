"use client"

import { QUESTIONS } from "@/lib/data"
import { ImageCustom } from "./Image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Question = () => {
    const [itemOpen, setItemOpen] = useState<number | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (event.target.getAttribute('data-id') != itemOpen) {
                setItemOpen(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [itemOpen]);

    return (
        <>
            <div className="text-center font-paytone text-[#ffde59] text-line-[1px_#000] sm:text-4xl lg:text-[45px] sm:my-[30px] my-[20px] lg:my-[40px] text-[30px]">
                CÂU HỎI THƯỜNG GẶP
            </div>
            <div className="w-fit mx-auto px-[10px]">
                {QUESTIONS.map((item, index) => (
                    <div
                        key={index}
                        className="flex sm:gap-[20px] sm:text-xl lg:text-2xl text-[15px] gap-[10px] justify-center mt-[15px] relative items-center"
                    >
                        <div
                            className="cursor-pointer w-[30px]"
                            onClick={() => setItemOpen(index)}
                        >
                            <ImageCustom src="/img/chat3.svg" />
                        </div>
                        <div className="flex-1 font-sriracha text-[#00552c]">
                            {item.q}
                        </div>
                        <div
                            data-id={index}
                            dangerouslySetInnerHTML={{ __html: item.a }}
                            className={`
                                ${index == itemOpen ? 'opacity-100 z-[1000] visible' : 'opacity-0 invisible'}
                                transition duration-400 ease
                                px-5 py-3 rounded-2xl absolute top-[103%]
                                bg-white border-2 border-[#0097b2]
                                text-[#00552c] font-sriracha whitespace-pre-line
                                shadow-lg
                                min-w-[250px] max-w-[400px]
                            `}
                            style={{
                                boxShadow: index == itemOpen ? '0 4px 24px 0 rgba(0,151,178,0.15)' : undefined,
                                borderColor: '#0097b2',
                                color: '#00552c',
                                background: 'linear-gradient(135deg, #f6fdf7 60%, #e3f6ea 100%)'
                            }}
                        >
                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-4xl mx-auto px-[10px]">
                <div className="relative mt-[20px] sm:mt-[30px] md:px-[3px] px-[10px] mb-[15px]">
                    <div>
                        <ImageCustom src="/img/chat4.png" />
                    </div>
                    <div className="absolute sm:top-[15%] left-[35%] text-white font-sriracha w-[60%] sm:text-xl top-[15%] text-[11px] lg:text-2xl">
                        Bạn bấm vào <div className="sm:w-[20px] w-[10px] inline-block"><ImageCustom src="/img/chat5.svg" /></div> để xem câu trả lời nhaaa.
                        Nếu bạn có câu hỏi nào khác, hãy liên hệ Coco qua MXH này nhé..!
                    </div>
                    <div className="flex absolute top-[90%] left-[47%] gap-[20px]">
                        <Link
                            prefetch={false}
                            href="https://www.facebook.com/cocogardendn"
                            target="_blank"
                            className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]"
                        >
                            <ImageCustom src="/img/facebook.svg" />
                        </Link>
                        <Link
                            prefetch={false}
                            href="https://www.instagram.com/cocogarden.dn/"
                            target="_blank"
                            className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]"
                        >
                            <ImageCustom src="/img/instagram.png" />
                        </Link>
                        <Link
                            prefetch={false}
                            href="tel:+84941252218"
                            target="_blank"
                            className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]"
                        >
                            <ImageCustom src="/img/call.webp" />
                        </Link>
                        <Link
                            prefetch={false}
                            href="https://www.tiktok.com/@cocogarden.dn"
                            target="_blank"
                            className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] relative"
                        >
                            <ImageCustom src="/img/tiktok.webp" height="100%" objectFit="contain" />
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export { Question }