import Link from "next/link";
import ImageCustom from "../components/common/Image";

const ContactPage = () => {
    return (
        <div className="max-w-5xl mx-auto px-[30px] py-[20px]">
            <p className="mb-[20px] text-center font-paytone text-line-[1px_#000] text-[50px] sm:text-[30px] text-[#ffde59]">LIÊN HỆ</p>
            <div className="flex items-center">
                <div className="w-[190px] md:w-[100px] mr-[30px] sm:hidden flex justify-center">
                    <ImageCustom src="/img/smile.webp" alt="" />
                </div>
                <div className="relative flex-1 ssm:text-[15px] text-black px-[50px] md:px-[30px] sm:px-[20px] py-[10px] rounded-[20px] font-dejavu w-full overflow-hidden sm:text-[15px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0097b2] to-[#7ed957] opacity-[0.77]">
                    </div>
                    <div className="relative">
                        <p className="italic">Đối với khách hàng cá nhân, liên hệ tư vấn và đặt dịch vụ tại</p>
                        <p><span className="font-semibold mr-[5px]">Liên hệ:</span><Link prefetch={false} href="tel:+84967387309"> 0967 387 309</Link> (Phương Nam)</p>
                        <p><span className="font-semibold mr-[5px]">Zalo:</span><Link prefetch={false} target="_blank" href="https://zalo.me/0967387309"> 0967 387 309</Link> (Phương Nam)</p>
                        <p><span className="font-semibold mr-[5px]">Gmail:</span><Link prefetch={false} href="mailto:cocogarden.dn@gmail.com">cocogarden.dn@gmail.com</Link></p>
                    </div>

                </div>

            </div>

            <div className="relative ssm:text-[15px] mt-[20px] text-black px-[50px] md:px-[30px] sm:px-[20px] py-[10px] rounded-[20px] font-dejavu w-full overflow-hidden sm:text-[15px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0097b2] to-[#7ed957] opacity-[0.77]">
                </div>
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