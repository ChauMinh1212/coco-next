'use client'

import { Close, Menu } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import NavLink from "@/app/components/layout/NavLink";
import ImageCustom from "../common/Image";

const styleMenu = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxShadow: 24,
    overflow: 'hidden'
};

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => setOpenMenu(true)
    const handleCloseMenu = () => setOpenMenu(false);

    return (
        <header>
            <div className={`fixed top-0 left-0 right-0 z-10 text-[#e5e1e1] bg-primary font-primary`}>
                <div className={`max-w-7xl mx-auto flex justify-between items-center px-[10px] py-[5px] text-[15px] text-white`}>
                    <div className="flex items-center font-semibold sm:text-[13px]"><IoIosMail className="text-[22px] mr-[4px]" /><span className="sm:hidden mr-[3px]">Gmail:</span><a href="mailto:cocogarden.dn@gmail.com">cocogarden.dn@gmail.com</a></div>
                    <div className="flex items-center">
                        <div className="flex items-center font-semibold sm:text-[13px]">
                            <FaPhoneAlt className="mr-[4px]" /><span className="sm:hidden mr-[3px]">Hotline:</span><a href="tel:+84941252218">0967 387 309</a>
                        </div>

                    </div>
                </div>
                <div className={`text-[#e5e1e1] header_bottom bg-gradient-to-r from-[#0097b2] to-[#7ed957] relative z-[2] font-bold shadow-[0_20px_10px_-13px_rgba(0,0,0,0.3)]`}>
                    <div className="hidden md:flex h-[66px] items-center px-[15px] sm:px-[5px] md:justify-between text-[30px] sm:text-[20px]">
                        <div className="flex items-center">
                            <IconButton onClick={handleOpenMenu}>
                                <Menu className="text-white"></Menu>
                            </IconButton>
                            <Link href="/" className="relative ml-[10px] sm:ml-[5px]">
                                <p className="font-frank font-bold text-white text-line-[0.2px_#000]">COCO <span className="text-[#ffde59]">GARDEN</span></p>
                                <div className="absolute w-[30px] sm:w-[15px] top-0 sm:top-[10%] right-[-15%]">
                                    <ImageCustom src="/img/coconut.gif" alt=""/>
                                </div>

                            </Link>
                        </div>
                        <div>
                            <Link prefetch={false} href="https://www.facebook.com/cocogardendn" target={"_blank"}>
                                <div className="text-[#00552c] font-baloo bg-white border-[#00552c] border-[2px] rounded-[15px] text-shadow-none p-[5px_20px] sm:text-[15px] md:text-[25px]">
                                    Đặt phòng
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="text-shadow-header font-notosan md:hidden h-[66px] max-w-7xl mx-auto flex flex-1 text-center lg:text-[15px] text-[19px]">
                        <NavLink href="/">COCO GARDEN</NavLink>
                        <NavLink href="/coco-garden-sg">COCO GARDEN SG</NavLink>
                        <NavLink href="/service">DỊCH VỤ</NavLink>
                        <NavLink href="/event">CHƯƠNG TRÌNH</NavLink>
                        <NavLink href="/contact">LIÊN HỆ</NavLink>
                        <div className="flex-1 header-hover hover:text-[rgb(255,236,157)] flex items-center justify-center ">
                            <Link prefetch={false} href="https://www.facebook.com/cocogardendn" target={"_blank"}>
                                <div className="text-[#00552c] font-baloo bg-white border-[#00552c] border-[2px] rounded-[15px] text-shadow-none p-[5px_20px]">
                                    Đặt phòng
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Menu sidebar */}
                <div>
                    <Modal
                        open={openMenu}
                        onClose={handleCloseMenu}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        disableAutoFocus={true}
                    >
                        <Box sx={styleMenu} className={`bg-primary text-[#e5e1e1] font-semibold`}>
                            <div className="text-center text-[20px] relative">
                                <div className="absolute top-0 right-0" onClick={handleCloseMenu}>
                                    <IconButton>
                                        <Close className={`text-[#e5e1e1]`}></Close>
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
                        </Box>
                    </Modal>
                </div>
            </div>
        </header>

    )
}

export default Header