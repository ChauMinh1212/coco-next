'use client'

import { NavLink } from "@/lib/components/layout";
import { Close, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ImageCustom } from "../common/Image";

const ButtonBooking = () => {
    return (
        <Link prefetch={false} href="https://www.facebook.com/cocogardendn" target={"_blank"}>
            <div className="text-[#00552c] font-baloo bg-white border-[#00552c] border-[2px] rounded-[15px] text-shadow-none p-[2px_10px] lg:p-[5px_20px] transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#00552c] hover:text-white hover:scale-105 hover:shadow-lg hover:border-[#ffde59]">
                Đặt phòng
            </div>
        </Link>
    )
}

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleOpenMenu = () => setOpenMenu(true)
    const handleCloseMenu = () => setOpenMenu(false);

    return (
        <header>
            <div className="fixed top-0 left-0 right-0 z-10 text-[#e5e1e1] font-primary bg-primary">
                <div className="flex justify-between items-center px-2 py-1 text-white max-w-7xl mx-auto">
                    <div className="flex items-center font-semibold text-xs sm:text-sm">
                        <IoIosMail className="mr-[4px] text-base" />
                        <span className="hidden sm:block mr-[3px]">Gmail:</span>
                        <a href="mailto:cocogarden.dn@gmail.com">cocogarden.dn@gmail.com</a>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm">
                        <div className="flex items-center font-semibold">
                            <FaPhoneAlt className="mr-[4px]" />
                            <span className="hidden sm:block mr-[3px]">Hotline:</span>
                            <a href="tel:+84941252218">0967 387 309</a>
                        </div>
                    </div>
                </div>
                <div className="text-[#e5e1e1] px-2 py-1 header_bottom bg-gradient-to-r from-[#0097b2] to-[#7ed957] relative z-[2] font-bold shadow-[0_20px_10px_-13px_rgba(0,0,0,0.3)]">
                    <div className="text-base flex justify-between lg:hidden h-[50px] max-w-7xl mx-auto">
                        <div className="flex items-center gap-1">
                            <IconButton onClick={handleOpenMenu} size="small">
                                <Menu className="text-white !text-xl"></Menu>
                            </IconButton>
                            <Link href="/" className="relative">
                                <p className="font-frank font-bold text-[22px] text-white text-line-[0.2px_#000]">
                                    COCO <span className="text-[#ffde59]">GARDEN</span>
                                </p>
                                <div className="absolute top-[50%] right-[-11%] translate-y-[-78%] w-[15px] h-[15px]">
                                    <ImageCustom src="/img/coconut.gif" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <ButtonBooking />
                        </div>
                    </div>
                    <div className="hidden text-shadow-header font-notosan h-[66px] max-w-7xl mx-auto lg:flex flex-1 text-center text-lg">
                        <NavLink href="/">COCO GARDEN</NavLink>
                        <NavLink href="/coco-garden-sg">COCO GARDEN SG</NavLink>
                        <NavLink href="/service">DỊCH VỤ</NavLink>
                        <NavLink href="/event">CHƯƠNG TRÌNH</NavLink>
                        <NavLink href="/contact">LIÊN HỆ</NavLink>
                        <div className="flex-1 header-hover hover:text-[rgb(255,236,157)] flex items-center justify-center">
                            <ButtonBooking />
                        </div>
                    </div>
                </div>

                {/* Menu sidebar */}
                <div>
                    <div
                        className={`bg-primary text-[#e5e1e1] font-semibold fixed top-0 left-0 h-full w-[80vw] max-w-[350px] z-[1100] shadow-lg transition-transform duration-300 ease-out ${openMenu ? 'translate-x-0' : '-translate-x-full'}`}
                        style={{ outline: "none" }}
                    >
                        <div className="text-center text-xl relative">
                            <div className="absolute top-0 right-0" onClick={handleCloseMenu}>
                                <IconButton>
                                    <Close className="text-[#e5e1e1]"></Close>
                                </IconButton>
                            </div>
                            <div className="p-4 pt-10 flex flex-col gap-[30px]" onClick={handleCloseMenu}>
                                <NavLink href="/">COCO GARDEN</NavLink>
                                <NavLink href="/coco-garden-sg">COCO GARDEN SG</NavLink>
                                <NavLink href="/service">DỊCH VỤ</NavLink>
                                <NavLink href="/event">CHƯƠNG TRÌNH</NavLink>
                                <NavLink href="/contact">LIÊN HỆ</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}