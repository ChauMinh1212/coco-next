import Link from "next/link";
import { ImageCustom, Title } from "@/lib/components/common";

const ContactPage = () => {
    return (
        <div className="max-w-5xl mx-auto px-[30px] py-[30px] lg:py-[40px] text-sm sm:text-base">
            <div className="mb-[20px]">
                <Title title="LIÊN HỆ" color="#ffde59" lineColor="black" />
            </div>
            <div className="flex items-center">
                <div className="w-[100px] md:w-[190px] mr-[30px] hidden sm:flex justify-center">
                    <ImageCustom src="/img/smile.webp" alt="" />
                </div>
                <div className="relative flex-1 text-black px-4 py-3 rounded-[20px] font-dejavu w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0097b2] to-[#7ed957] opacity-[0.77]"></div>
                    <div className="relative">
                        <p className="italic">Đối với khách hàng cá nhân, liên hệ tư vấn và đặt dịch vụ tại</p>
                        <p><span className="font-semibold mr-[5px]">Liên hệ:</span><Link prefetch={false} href="tel:+84967387309"> 0967 387 309</Link> (Phương Nam)</p>
                        <p><span className="font-semibold mr-[5px]">Zalo:</span><Link prefetch={false} target="_blank" href="https://zalo.me/0967387309"> 0967 387 309</Link> (Phương Nam)</p>
                        <p><span className="font-semibold mr-[5px]">Gmail:</span><Link prefetch={false} href="mailto:cocogarden.dn@gmail.com">cocogarden.dn@gmail.com</Link></p>
                    </div>
                </div>
            </div>

            <div className="relative mt-[20px] text-black px-4 py-3 rounded-[20px] font-dejavu w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0097b2] to-[#7ed957] opacity-[0.77]"></div>
                <div className="relative">
                    <p className="italic">Đối với khách hàng doanh nghiệp đoàn thể</p>
                    <p>Chương trình liên kết doanh nghiệp, tổ chức team building
                        <br />
                        Hỗ trợ chuẩn bị Party, giảm giá cho doanh nghiệp,...</p>
                    <br />
                    <p className="italic">Liên hệ tư vấn dịch vụ tại</p>
                    <p><span className="font-semibold mr-[5px]">Liên hệ:</span><Link prefetch={false} href="tel:+84967387309"> 0967 387 309</Link> (Phương Nam)</p>
                    <p><span className="font-semibold mr-[5px]">Zalo:</span><Link prefetch={false} target="_blank" href="https://zalo.me/0967387309"> 0967 387 309</Link> (Phương Nam)</p>
                    <p><span className="font-semibold mr-[5px]">Gmail:</span><Link prefetch={false} href="mailto:cocogarden.dn@gmail.com">cocogarden.dn@gmail.com</Link></p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;