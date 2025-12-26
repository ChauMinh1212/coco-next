import { ImageCustom } from "../common/Image"

export const Footer = () => {
    return (
        <div className="relative">
            <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed947] opacity-[0.43] absolute z-0 inset-0"></div>
            <div className="max-w-5xl mx-auto px-[30px] py-[20px] flex flex-col sm:flex-row justify-between items-center z-[1] relative gap-7">
                <div className="font-dejavu text-sm lg:text-base">
                    <p><span className="font-semibold mr-[3px]">Liên hệ:</span><a href="tel:+84967387309">0967 387 309</a> (Phương Nam)</p>
                    <p><span className="font-semibold mr-[3px]">Zalo:</span><a href="https://zalo.me/0967387309" target="_blank">0967 387 309</a> (Phương Nam)</p>
                    {/* <p><span className="font-semibold mr-[3px]">Định vị:</span><a target="_blank" href="https://maps.app.goo.gl/pgvLoQA7wVV4ECJ69">COCO GARDEN (Phà Cát Lái, Phú Hữu, Nhơn Trạch, Đồng Nai)</a></p> */}
                    <p><span className="font-semibold mr-[3px]">Định vị:</span>COCO GARDEN (Phà Cát Lái, Phú Hữu, Nhơn Trạch, Đồng Nai)</p>
                <p><span className="font-semibold mr-[3px]">Gmail:</span><a href="mailto:cocogarden.dn@gmail.com">cocogarden.dn@gmail.com</a></p>
            </div>
            <div className="w-fit relative text-4xl sm:text-5xl">
                <div className="flex mb-4 sm:mb-5">
                    <p className="font-frank text-white text-line-[1.5px_rgb(0,0,0)]">COCO</p>
                    <div className="w-[35px] sm:w-[43px] md:w-[36px]">
                        <ImageCustom src="/img/coconut.gif" alt="" unoptimized={true} />
                    </div>
                </div>
                <p className="font-frank text-[#ffde59] text-line-[1.5px_rgb(0,0,0)] mt-[-20px] sm:mt-[-20px]">GARDEN</p>
            </div>
        </div>
        </div >
    )
}