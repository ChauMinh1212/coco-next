import Link from "next/link"

const BookingButton = () => {
    return (
        <div className="flex justify-center gap-[20px] sm:text-[25px] text-[15px] font-sriracha">
            <Link
                href="https://www.facebook.com/cocogardendn"
                target="_blank"
                className="whitespace-nowrap sm:text-lg md:text-xl px-[20px] rounded-[20px] bg-gradient-to-r from-[#0097b2] to-[#7ed957] text-white shadow-md hover:brightness-95 transition"
            >
                Đặt phòng
            </Link>
            <Link
                href="https://www.facebook.com/cocogardendn"
                target="_blank"
                className="whitespace-nowrap sm:text-lg md:text-xl px-[20px] sm:border-[2px] border-[1px] border-[#0097b2] rounded-[20px] bg-[#f6fdf7] text-[#00552c] shadow-sm hover:bg-[#e3f6ea] transition"
            >
                Check lịch
            </Link>
        </div>
    )
}

export { BookingButton }