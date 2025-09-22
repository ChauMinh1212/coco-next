'use client'
import { HowToBook, ImageCustom, Question, Room, SeeMore, SlideImg } from "@/lib/components/common";
import { IMG_SPACE_COMMON, ROOMS, SERVICES } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

const HomePage = () => {
    const [seeMore, setSeeMore] = useState({
        info: false,
        habour: true,
        farm: false
    })

    return (
        <div className="w-full pb-[30px]">
            <div className="bg-[url('/img/bg1.png')] bg-cover bg-no-repeat pb-[80px] sm:pb-[120px]">
                <div className="max-w-5xl mx-auto pt-[10px]">
                    <ImageCustom
                        src="/img/top1.png"
                        alt="top"
                        className="animate-fadein"
                        unoptimized={true}
                    />
                    <div className="max-w-3xl mx-auto px-[10px]">
                        <div className="relative mt-[-30px]">
                            <div className="w-[100%] mx-auto">
                                <ImageCustom
                                    src="/img/chat2.png"
                                    alt="bot"
                                    className="animate-fadein"
                                    unoptimized={true}
                                />
                            </div>
                            <div className="absolute top-[61%] right-[8%] w-[69%] text-center font-baloo font-bold text-[13px] animate-fadein sm:text-lg md:text-xl lg:text-2xl h-[30%] flex items-center justify-center">
                                <p>
                                    Xin chào bạn, tui là Coco. <br />
                                    Welcome bạn đến trải nghiệm Homestay thư giãn cùng thiên nhiên xanh ngát tai ngôi nhà Coco Garden !!!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative pb-[70px] sm:pb-[110px]">
                <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] absolute inset-0 opacity-[0.68] z-0"></div>
                <div className="flex items-center absolute right-0 left-0 top-[-45px] sm:top-[-63px] md:top-[-60px] lg:top-[-72px]">
                    <div className="border-t-[3px] border-[#00552c] border-dashed flex-1"></div>
                    <div className="bg-white border-[#00552c] border-[3px] rounded-[45px] py-[10px] px-[40px] w-fit mx-auto text-center sm:px-[75px]">
                        <h1 className="font-frank text-[#ffde59] text-3xl sm:text-5xl text-line-[1px_#000] tracking-[-3px] sm:text-line-[1.3px_#000] md:text-[50px] md:text-line-[1.3px_#000] lg:text-[70px] lg:text-line-[1.7px_#000]">COCO GARDEN</h1>
                        <p className="font-baloo font-bold text-white text-[25px] sm:text-[40px] md:text-[35px] text-line-[0.8px_#000] sm:text-line-[1.9px_#000] md:text-line-[1.3px_#000] mt-[-10px] sm:mt-[-5px] md:mt-[-7px]">có gì ???</p>
                    </div>
                    <div className="border-t-[3px] border-[#00552c] border-dashed flex-1"></div>
                </div>
                <div className="relative max-w-7xl mx-auto pt-[70px] sm:pt-[100px] px-[10px]">
                    <div className="max-w-4xl mx-auto rounded-[40px] bg-white py-[10px] sm:pl-[30px] pl-[20px] pr-[10px] sm:pr-[5px]">
                        <div className="flex flex-wrap">
                            {
                                SERVICES.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-[50%] items-center py-[7px]"
                                    >
                                        <div className="sm:h-[50px] sm:w-[50px] h-[20px] w-[20px] sm:mr-[20px] mr-[5px]">
                                            <ImageCustom src={item.src} alt="" objectFit="contain" height="100%" />
                                        </div>
                                        <p className="font-sriracha text-[#00552c] sm:text-xl text-[12px] md:text-2xl">
                                            {item.name}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="text-center my-[15px] relative max-w-5xl mx-auto">
                        <p className="font-baloo font-bold text-line-[1px_#000] sm:text-3xl text-white md:text-[30px] text-[20px]">
                            và hơn thế nữa..
                        </p>
                        <div className="sm:w-[125px] w-[80px] rotate-[12deg] absolute top-[40%] translate-y-[-60%] right-[2%]">
                            <ImageCustom src="/img/smile.webp" alt="" />
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto">
                        <div className="sm:text-xl text-[12px] md:text-2xl font-sriracha max-w-4xl mx-auto rounded-[40px] bg-white py-[10px] sm:pl-[50px] pl-[20px] sm:pr-[10px] pr-[5px]">
                            <div className="flex gap-[20px] items-center">
                                <div className="sm:w-[420px] md:w-[300px] w-[215px]">
                                    <ImageCustom src="/img/i.png" alt="" objectFit="contain" />
                                </div>
                                <p>
                                    Chào mừng Quý khách đến với COCO GARDEN 🌴 – một điểm đến lý tưởng để bạn có thể thư giãn và hoà mình vào thiên nhiên xanh mát, vị trí ngay sát Sài Gòn, chỉ 5 phút đi xe qua phà Cát Lái
                                </p>
                            </div>
                            <div className="mt-[20px]">
                                <p>
                                    Lan toả nhịp sống xanh với 95% năng lượng sử dụng tại COCO GARDEN từ mặt trời. Hướng tới NETZERO là mục tiêu hàng đầu tại COCO GARDEN.
                                </p>
                            </div>
                            <SeeMore expanded={seeMore.info}>
                                <div>
                                    <div className="mt-[20px]">
                                        COCO GARDEN 🌴 gồm: COCO HABOUR và COCO FARM
                                        <br />
                                        <br />
                                        1. Khu COCO HABOUR:
                                        <br />
                                        - Hệ thống HOMESTAY với thiết kế 3 mặt giáp sông, cho bạn cảm giác yên bình tuyệt đối. Cùng cây cầu dài 50 mét, đặt giữa lòng sông. Giúp bạn tận hưởng từng làn gió mát từ sông, ngắm nhìn hoàng hôn thơ mộng cùng với những âm thanh thiên nhiên êm ả.
                                        <br />
                                        - Sắp triển khai: khu Camping, BBQ, đốt lửa trại, hồ bơi,... Đặc biệt phù hợp cho các gia đình, cặp đôi hay nhóm bạn đang muốn &quot;chữa lành&quot; và thoát ra khỏi nhịp sống hối hả.
                                        <br />
                                        <br />
                                        2. Khu COCO FARM: tổ hợp thiên nhiên, nơi bạn có thể khám phá vườn thú, chèo thuyền kayak, hoặc thư giãn giữa những vườn cây xanh rợp bóng mát.
                                        <br />
                                        <br />
                                        Kính chúc Quý khách có những phút giây tuyệt vời tại COCO GARDEN 🌴.
                                        <br />
                                        Chúng tôi luôn sẵn sàng hỗ trợ và phục vụ quý khách 24/24 trong suốt quá trình lưu trú
                                        <br />
                                        Trân trọng.
                                    </div>
                                </div>
                            </SeeMore>
                            <div className="mt-[20px] flex justify-end items-end">
                                <div
                                    onClick={() => setSeeMore(s => ({ ...s, info: !s.info }))}
                                    className="cursor-pointer sm:mr-[30px] mr-[10px] sm:text-lg text-[14px] text-white sm:text-line-[0.8px_#000] text-line-[0.5px_#000] w-fit sm:rounded-[30px] py-[3px] sm:px-[10px] px-[5px] rounded-[15px] bg-gradient-to-r from-[#0097b2] to-[#7ed957] whitespace-nowrap md:text-2xl"
                                >
                                    {seeMore.info ? 'Thu gọn' : 'Xem thêm'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative sm:pb-[110px] pb-[60px]">
                <div className="bg-gradient-to-r from-[#0de5e6] to-[#004aad] absolute inset-0 opacity-[0.68] z-0"></div>
                <div
                    onClick={() => setSeeMore(s => ({ ...s, habour: !s.habour }))}
                    className="cursor-pointer flex items-center absolute sm:top-[-47px] right-0 left-0 md:top-[-45px] top-[-30px] z-[1]"
                >
                    <div className="flex items-center bg-white border-[#0076aa] border-[3px] rounded-[45px] sm:px-[75px] py-[4px] w-fit mx-auto text-center px-[40px]">
                        <p className="font-frank text-white sm:text-[50px] sm:text-line-[1.7px_#005174] tracking-[-3px] md:text-[50px] md:text-line-[1.3px_#005174] text-[30px] text-line-[1px_#005174] lg:text-[55px] lg:text-line-[1.7px_#005174]">
                            COCO HABOUR
                        </p>
                        <div className={`ml-3 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-[#0076aa] mx-auto cursor-pointer transition-transform duration-300 lg:border-l-[16px] lg:border-r-[16px] lg:border-t-[20px] ${seeMore.habour ? 'rotate-180' : ''}`}></div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto px-[10px] relative">
                    <div className="flex pt-[70px] gap-[10px] sm:pt-[100px] sm:gap-[50px] md:gap-[30px]">
                        <Link
                            prefetch={false}
                            href="https://maps.app.goo.gl/pgvLoQA7wVV4ECJ69"
                            className="w-[30%]"
                            target="_blank"
                        >
                            <ImageCustom src="/img/s.svg" alt="" />
                        </Link>
                        <div className="flex-1 relative">
                            <ImageCustom src="/img/chat1.png" alt="" />
                            <div className="absolute text-[10px] top-[16%] left-[8%] w-[85%] sm:text-xl md:text-2xl font-sriracha">
                                Nằm ngay Phà Cát Lái, cách phà Cát Lái chỉ 5 phút lái xe. Bạn có thể Seach GG MAP từ khoá &quot;Coco Garden Đồng Nai&quot;.
                                <br />
                                <br />
                                Hoặc bấm vào Coco để xem vị trí nhaaa !
                            </div>
                        </div>
                    </div>
                    <SeeMore expanded={seeMore.habour}>
                        <div>
                            <div className="mt-[20px]">
                                <p className="text-center font-baloo sm:text-4xl md:text-[30px] text-[20px] text-white text-line-[1px_#000]">
                                    KHÔNG GIAN CHUNG
                                </p>
                                <SlideImg
                                    img={IMG_SPACE_COMMON}
                                    className="max-w-5xl w-full aspect-[4/2] border-white border-[3px] rounded-[30px] bg-black"
                                ></SlideImg>
                            </div>
                            <div className="mt-[60px] flex flex-col gap-[30px]">
                                {ROOMS.map((item, index) => (
                                    <Room room={item} key={index} />
                                ))}

                            </div>

                        </div>
                    </SeeMore>
                </div>
            </div>
            <div className="relative pb-[30px] lg:pb-[50px]">
                <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] absolute inset-0 opacity-[0.68] z-0"></div>
                <div
                    onClick={() => setSeeMore(s => ({ ...s, farm: !s.farm }))}
                    className="cursor-pointer flex items-center absolute sm:top-[-47px] right-0 left-0 md:top-[-45px] top-[-30px] z-[1]"
                >
                    <div className="flex items-center bg-white border-[#00552c] border-[3px] rounded-[45px] sm:px-[75px] py-[4px] w-fit mx-auto text-center px-[40px]">
                        <p className="font-frank text-white sm:text-[50px] sm:text-line-[2.5px_#00552c] tracking-[-3px] md:text-[50px] md:text-line-[1.3px_#00552c] text-[30px] text-line-[1px_#00552c] lg:text-[55px] lg:text-line-[1.7px_#00552c">
                            COCO FARM
                        </p>
                        <div className={`ml-3 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-primary mx-auto cursor-pointer transition-transform duration-300 lg:border-r-[16px] lg:border-t-[20px] lg:border-l-[16px] ${seeMore.farm ? 'rotate-180' : ''}`}></div>
                    </div>
                </div>
                <div className="relative max-w-4xl mx-auto px-[10px]">
                    <div className="flex sm:pt-[100px] pt-[70px] sm:gap-[50px] gap-[17px] md:gap-[30px]">
                        <Link
                            href="/coco-garden-sg"
                            className="w-[30%]"
                        >
                            <ImageCustom src="/img/s.svg" alt="" />
                        </Link>
                        <div className="flex-1 relative">
                            <ImageCustom src="/img/chat1.png" alt="" />
                            <div className="absolute top-[16%] left-[8%] w-[85%] sm:text-xl md:text-2xl text-[10px] font-sriracha">
                                Nằm ngay Phà Cát Lái, cách phà Cát Lái chỉ 5 phút lái xe. Bạn có thể Seach GG MAP từ khoá &quot;Coco Garden Đồng Nai&quot;.
                                <br />
                                <br />
                                Hoặc bấm vào Coco để xem vị trí nhaaa !
                            </div>
                        </div>
                    </div>
                    <SeeMore expanded={seeMore.farm}>
                        <div>
                        </div>
                    </SeeMore>
                </div>
            </div>
            <div className="max-w-5xl mx-auto py-[30px] pt-0 sm:pt-[30px]">
                <HowToBook />
                <Question />
            </div>
        </div >
    )
}

export default HomePage