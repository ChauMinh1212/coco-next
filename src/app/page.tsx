'use client'
import ImageCustom from "@/app/components/common/Image";
import SeeMore from "@/app/components/common/SeeMore";
import SlideImg from "@/app/components/common/SlideImage";
import { IMG_SPACE_COMMON, QUESTIONS, ROOMS, SERVICES } from "@/app/constants/common.constant";
import styles from "@/app/styles/HomePage.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [itemOpen, setItemOpen] = useState<number | null>(null)

    const [seeMore, setSeeMore] = useState(false)
    const [seeMoreCocoHabour, setSeeMoreCocoHabour] = useState(true)
    const [seeMoreCocoFarm, setSeeMoreCocoFarm] = useState(true)

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
        <div className={`w-full pb-[30px`}>
            {/* Mới */}
            <div className='bg-[url("/img/bg1.png")] bg-cover bg-no-repeat pb-[120px] sm:pb-[80px]'>
                <div className='max-w-7xl mx-auto'>
                    <ImageCustom src="/img/top1.png" alt="top" />
                    <div className='relative mt-[-30px]'>
                        <div className='w-[70%] mx-auto sm:w-[90%]'>
                            <ImageCustom src="/img/chat2.png" alt="bot" />
                        </div>
                        <div className='absolute top-[63%] right-[20%] w-[50%] text-center font-baloo font-bold text-[25px] md:text-[20px] sm:text-[10px] esm:text-[16px]'>
                            Xin chào bạn, tui là Coco. <br />
                            Welcome bạn đến trải nghiệm Homestay thư giãn cùng thiên nhiên xanh ngát tai ngôi nhà Coco Garden !!!
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative pb-[110px] sm:pb-[60px]'>
                <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] absolute inset-0 opacity-[0.68] z-0"></div>
                <div className='flex items-center absolute top-[-75px] right-0 left-0 md:top-[-60px] sm:top-[-44px]'>
                    <div className='border-t-[3px] border-[#00552c] border-dashed flex-1'></div>
                    <div className='bg-white border-[#00552c] border-[3px] rounded-[45px] px-[75px] py-[4px] w-fit mx-auto text-center sm:px-[40px]'>
                        <h1 className='font-frank text-[#ffde59] text-[70px] text-line-[1.8px_#000] tracking-[-3px] md:text-[50px] md:text-line-[1.3px_#000] sm:text-[30px] sm:text-line-[1px_#000]'>COCO GARDEN</h1>
                        <p className='font-baloo text-[40px] font-bold text-white text-line-[1.9px_#000] mt-[-25px] md:text-[35px] md:text-line-[1.3px_#000] md:mt-[-20px] sm:text-[25px] sm:text-line-[0.8px_#000] sm:mt-[-10px]'>có gì ???</p>
                    </div>
                    <div className='border-t-[3px] border-[#00552c] border-dashed flex-1'></div>
                </div>
                <div className='relative max-w-7xl mx-auto pt-[110px] sm:pt-[70px] px-[10px]'>
                    <div className='max-w-4xl mx-auto rounded-[40px] bg-white py-[10px] pl-[50px] sm:pl-[20px] pr-[10px] sm:pr-[5px]'>
                        <div className='flex flex-wrap'>
                            {
                                SERVICES.map((item, index) => (
                                    <div key={index} className='flex flex-[50%] items-center py-[7px]'>
                                        <div className="h-[60px] w-[60px] sm:h-[20px] sm:w-[20px] mr-[20px] sm:mr-[5px]">
                                            <ImageCustom src={item.src} alt="" objectFit="contain" />
                                        </div>
                                        <p className='font-sriracha text-[#00552c] text-[30px] sm:text-[12px] md:text-[23px]'>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='text-center mt-[20px] relative max-w-5xl mx-auto'>
                        <p className='font-baloo font-bold text-line-[1px_#000] text-[40px] text-white md:text-[30px] sm:text-[20px]'>và hơn thế nữa..</p>
                        <div className="w-[175px] md:w-[110px] sm:w-[80px] rotate-[12deg] absolute top-[40%] translate-y-[-60%] right-[2%]">
                            <ImageCustom src="/img/smile.webp" alt="" />
                        </div>
                    </div>
                    <div className='max-w-7xl mx-auto px-[10px]'>
                        <div className='text-[30px] sm:text-[12px] md:text-[23px] font-sriracha max-w-4xl mx-auto rounded-[40px] bg-white py-[10px] pl-[50px] sm:pl-[20px] pr-[10px] sm:pr-[5px]'>
                            <div className="flex gap-[20px] items-center">
                                <div className="w-[420px] md:w-[300px] sm:w-[215px]">
                                    <ImageCustom src="/img/i.png" alt="" objectFit="contain" />
                                </div>
                                <p>Chào mừng Quý khách đến với COCO GARDEN 🌴 – một điểm đến lý tưởng để bạn có thể thư giãn và hoà mình vào thiên nhiên xanh mát, vị trí ngay sát Sài Gòn, chỉ 5 phút đi xe qua phà Cát Lái
                                </p>
                            </div>
                            <div className="mt-[20px]">
                                <p>Lan toả nhịp sống xanh với 95% năng lượng sử dụng tại COCO GARDEN từ mặt trời. Hướng tới NETZERO là mục tiêu hàng đầu tại COCO GARDEN.</p>
                            </div>
                            <SeeMore expanded={seeMore}>
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
                                {/* <p>Cùng nhiều chương trình hỗ trợ khách hàng.</p> */}
                                <div onClick={() => setSeeMore(s => !s)} className='cursor-pointer mr-[30px] sm:mr-[3px] text-[25px] sm:text-[14px] text-white text-line-[0.8px_#000] sm:text-line-[0.5px_#000] border-[#000] border-[2px] sm:border-[1px] w-fit rounded-[30px] py-[3px] px-[10px] sm:px-[5px] sm:rounded-[15px] bg-gradient-to-r from-[#0097b2] to-[#7ed957] whitespace-nowrap'>
                                    {seeMore ? 'Thu gọn' : 'Xem thêm'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative pb-[110px] sm:pb-[60px]">
                <div className="bg-gradient-to-r from-[#0de5e6] to-[#004aad] absolute inset-0 opacity-[0.68] z-0"></div>
                <div onClick={() => setSeeMoreCocoHabour(s => !s)} className='cursor-pointer flex items-center absolute top-[-60px] right-0 left-0 md:top-[-45px] sm:top-[-30px] z-[1]'>
                    <div className='flex items-center bg-white border-[#0076aa] border-[3px] rounded-[45px] px-[75px] py-[4px] w-fit mx-auto text-center sm:px-[40px]'>
                        <p className='font-frank text-white text-[70px] text-line-[2.5px_#005174] tracking-[-3px] md:text-[50px] md:text-line-[1.3px_#005174] sm:text-[30px] sm:text-line-[1px_#005174]'>COCO HABOUR</p>
                        <div className={`ml-[20px] ${seeMoreCocoHabour ? styles['triangle-up'] : styles['triangle-down']} bg-[#005174] w-[30px] h-[27px] b-[7px] sm:w-[20px] sm:h-[15px] sm:b-[4px] ml-[10px]`}></div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto px-[20px] relative">
                    <div className="flex pt-[100px] sm:pt-[70px] gap-[50px] sm:gap-[17px] md:gap-[30px]">
                        <Link prefetch={false} href="https://maps.app.goo.gl/pgvLoQA7wVV4ECJ69" className="w-[30%]" target="_blank">
                            <ImageCustom src="/img/s.svg" alt="" />
                        </Link>
                        <div className="flex-1 relative">
                            <ImageCustom src="/img/chat1.png" alt="" />
                            <div className="absolute top-[16%] left-[8%] w-[85%] text-[30px] md:text-[23px] sm:text-[10px] esm:text-[16px] font-sriracha">
                                Nằm ngay Phà Cát Lái, cách phà Cát Lái chỉ 5 phút lái xe. Bạn có thể Seach GG MAP từ khoá &quot;Coco Garden Đồng Nai&quot;.
                                <br />
                                <br />
                                Hoặc bấm vào Coco để xem vị trí nhaaa !
                            </div>
                        </div>
                    </div>
                    <SeeMore expanded={seeMoreCocoHabour}>
                        <div>
                            <div className="mt-[30px]">
                                <p className="text-center font-baloo text-[45px] md:text-[30px] sm:text-[20px] text-white text-line-[1px_#000]">KHÔNG GIAN CHUNG</p>
                                <SlideImg img={IMG_SPACE_COMMON} className="max-w-5xl w-full aspect-[5/2] md:aspect-[4/2] sm:aspect-[1/1] border-white border-[3px] rounded-[30px] bg-black"></SlideImg>
                            </div>
                            <div className="mt-[60px] sm:mt-[20px] flex flex-col gap-[30px]">
                                {ROOMS.map((item, index) => (
                                    <div key={index} className="flex esm:flex-col bg-white font-sriracha text-[23px] sm:text-[13px] rounded-[20px]">
                                        <div className="flex-1 border-[3px] border-[#00552c] rounded-[20px] overflow-hidden aspect-[1/1.1]">
                                            <div className="h-full w-full">
                                                <SlideImg img={item.img.length != 0 ? item.img : [{src: '/img/default.jpg'}]} className="w-full h-full" objectFit="cover"/>
                                            </div>
                                        </div>
                                        <div className="flex-1 md:w-full p-[20px] sm:p-[10px] flex flex-col justify-between">
                                            <div>
                                                <p>{item.name}</p>
                                                <p className="whitespace-pre-line">{item.description}</p>
                                            </div>
                                            <div className="flex justify-center gap-[20px] text-[25px] sm:text-[15px] mt-[5px]">
                                                <Link href="https://www.facebook.com/cocogardendn" target="_blank" className="whitespace-nowrap px-[20px] border-[2px] sm:border-[1px] border-black rounded-[20px] bg-gradient-to-r from-[#0097b2] to-[#7ed957] text-white text-line-[0.9px_#000] sm:text-line-[0.5px_#000]">
                                                    Đặt phòng
                                                </Link>
                                                <Link href="https://www.facebook.com/cocogardendn" target="_blank" className="whitespace-nowrap px-[20px] border-[2px] sm:border-[1px] border-black rounded-[20px] bg-white text-[#00552c] text-line-[0.9px_#000] sm:text-line-[0.5px_#000]">
                                                    Check lịch
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </SeeMore>
                </div>
            </div>
            <div className="relative pb-[30px]">
                <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] absolute inset-0 opacity-[0.68] z-0"></div>
                <div onClick={() => setSeeMoreCocoFarm(s => !s)} className='cursor-pointer flex items-center absolute top-[-60px] right-0 left-0 md:top-[-45px] sm:top-[-30px] z-[1]'>
                    <div className='flex items-center bg-white border-[#00552c] border-[3px] rounded-[45px] px-[75px] py-[4px] w-fit mx-auto text-center sm:px-[40px]'>
                        <p className='font-frank text-white text-[70px] text-line-[2.5px_#00552c] tracking-[-3px] md:text-[50px] md:text-line-[1.3px_#00552c] sm:text-[30px] sm:text-line-[1px_#00552c]'>COCO FARM</p>
                        <div className={`ml-[20px] ${seeMoreCocoFarm ? styles['triangle-up'] : styles['triangle-down']} bg-[#00552c] w-[30px] h-[27px] b-[7px] sm:w-[20px] sm:h-[15px] sm:b-[4px] ml-[10px]`}></div>
                    </div>
                </div>
                <div className="relative max-w-5xl mx-auto px-[20px]">
                    <div className="flex pt-[100px] sm:pt-[70px] gap-[50px] sm:gap-[17px] md:gap-[30px]">
                        <Link href="/coco-garden-sg" className="w-[30%]">
                            <ImageCustom src="/img/s.svg" alt="" />
                        </Link>
                        <div className="flex-1 relative">
                            <ImageCustom src="/img/chat1.png" alt="" />
                            <div className="absolute top-[16%] left-[8%] w-[85%] text-[30px] md:text-[23px] sm:text-[10px] esm:text-[16px] font-sriracha">
                                Nằm ngay Phà Cát Lái, cách phà Cát Lái chỉ 5 phút lái xe. Bạn có thể Seach GG MAP từ khoá &quot;Coco Garden Đồng Nai&quot;.
                                <br />
                                <br />
                                Hoặc bấm vào Coco để xem vị trí nhaaa !
                            </div>
                        </div>
                    </div>
                    <SeeMore expanded={seeMoreCocoFarm}>
                        <div>
                        </div>
                    </SeeMore>
                </div>
            </div>
            <div className="max-w-5xl mx-auto py-[30px] sm:pt-0">
                <div className="flex gap-[20px] sm:flex-col sm:gap-[5px]">
                    <div className="flex-1 border-[1px] border-[#00552c]">
                        <ImageCustom src="/img/how_to_book.webp" />
                    </div>
                    <div className="flex-1 border-[1px] border-[#00552c]">
                        <ImageCustom src="/img/rule.webp" />
                    </div>
                </div>
                <div className="text-center font-paytone text-[#ffde59] text-line-[1px_#000] text-[60px] my-[20px] sm:text-[30px]">CÂU HỎI THƯỜNG GẶP</div>
                <div className="w-fit mx-auto px-[10px]">
                    {QUESTIONS.map((item, index) => (
                        <div key={index} className="flex gap-[20px] text-[27px] sm:text-[15px] sm:gap-[10px] justify-center mt-[15px] relative">
                            <div className="w-[50px] cursor-pointer sm:w-[30px]" onClick={() => setItemOpen(index)}>
                                <ImageCustom src="/img/chat3.svg" />
                            </div>
                            <div className="flex-1 font-sriracha text-[#00552c]">{item.q}</div>
                            <div data-id={index} dangerouslySetInnerHTML={{ __html: item.a }} className={`${index == itemOpen ? 'opacity-[1] z-[1000]' : 'opacity-[0] transition-none'} transition duration-[.4s] ease px-[20px] py-[10px] rounded-[30px] absolute top-[103%] bg-gradient-to-r from-[#0097b2] to-[#7ed957] border-[2px] border-black text-white text-line-[0.5px_#000] font-sriracha whitespace-pre-line`}>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative sm:mt-[10px] md:px-[3px] px-[20px] mb-[15px]">
                    <div>
                        <ImageCustom src="/img/chat4.png" />
                    </div>
                    <div className="absolute top-[20%] left-[33%] text-white font-sriracha w-[60%] text-[25px] sm:top-[15%] sm:text-[11px]">
                        Bạn bấm vào <div className="w-[30px] sm:w-[20px] inline-block"><ImageCustom src="/img/chat5.svg" /></div> để xem câu trả lời nhaaa.
                        Nếu bạn có câu hỏi nào khác, hãy liên hệ Coco qua MXH này nhé..!
                    </div>
                    <div className="flex absolute top-[90%] left-[47%] gap-[20px] sm:gap-[10px]">
                        <Link prefetch={false} href="https://www.facebook.com/cocogardendn" target="_blank" className="w-[50px] h-[50px] sm:w-[30px] sm:h-[30px]">
                            <ImageCustom src="/img/facebook.svg" />
                        </Link>
                        <Link prefetch={false} href="https://www.instagram.com/cocogarden.dn/" target="_blank" className="w-[50px] h-[50px] sm:w-[30px] sm:h-[30px]">
                            <ImageCustom src="/img/instagram.png" />
                        </Link>
                        <Link prefetch={false} href="tel:+84941252218" target="_blank" className="w-[50px] h-[50px] sm:w-[30px] sm:h-[30px]">
                            <ImageCustom src="/img/call.webp" />

                        </Link>
                        <Link prefetch={false} href="https://www.tiktok.com/@cocogarden.dn" target="_blank" className="w-[50px] h-[50px] sm:w-[30px] sm:h-[30px] relative">
                            <ImageCustom src="/img/tiktok.webp" height="100%" objectFit="contain" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* <Lightbox
                open={openLightBox}
                close={() => setOpenLightBox(false)}
                slides={slides}
                render={{ slide: NextJsImage }}
                counter={{ container: { style: { top: 0, bottom: 'unset' } } }}
                plugins={[Thumbnails, Video, Counter]}
            /> */}
        </div >
    )
}



export default HomePage