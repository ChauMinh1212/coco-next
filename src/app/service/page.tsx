const ServiceTitle = ({ title }: { title: string }) => {
    return (
        <div className="text-center">
            <p className="
            font-paytone 
            text-[50px] 
            text-line-[2px_#fff] 
            text-[#004aad] 
            md:text-[45px] 
            md:text-line-[1.5px_#fff]
            sm:text-[27px]
            sm:text-line-[1.5px_#fff]
            ">{title}</p>
        </div>
    )
}

const service = [
    { name: 'Nước ngọt', price: '10.000 đ' },
    { name: 'Mỳ ly', price: '15.000 đ' },
    { name: 'SOJU', price: '70.000 đ' },
    { name: 'Bia', price: '22.000 đ' },
    { name: 'Khăn giấy', price: '10.000 đ' },
    { name: 'Café sữa gói', price: '5.000 đ' },
    { name: 'Bia gừng', price: '75K - 99K - 160K' },
    { name: 'Dầu ăn', price: '30.000 đ' },
    { name: 'Nước đá, nước suối', price: 'FREE' },
]

function chunkArray<T>(arr: T[], size: number): T[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
}

const ServicePage = () => {
    const serviceChunks = chunkArray(service, 5);
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6] to-[#004aad] opacity-[0.8]"></div>
            <div className="max-w-5xl mx-auto px-[30px] py-[30px] relative">
                <div className="relative mt-[50px]">
                    <div className="
                    absolute 
                    right-0 
                    left-0 
                    top-[-50px]
                    ">
                        <ServiceTitle title="DỊCH VỤ ĂN UỐNG" />
                    </div>
                    <div className="
                    bg-[#004aad] 
                    border-[2px] 
                    border-white 
                    p-[20px] 
                    pt-[35px] 
                    rounded-[50px] 
                    text-white
                    sm:text-[13px]
                    sm:py-[20px]
                    ">
                        <p className="font-semibold">Liên hệ ADMIN trực PAGE hoặc quản lí Nam (0967.387.309) để nhận MENU đồ ăn _ COCO GARDEN sẽ giúp bạn đặt và giao tại HOMESTAY nhé:</p>
                        <br />
                        <p className="">Gà nướng (7h - 19h)</p>
                        <p className="">Lẩu dê (sau 17h30)</p>
                        <p className="">Ốc/hải sản (sau 17h30) - giao cho hoá đơn trên 300K</p>
                        <br />
                        <p className="font-semibold">Ngoài ra, trên trục đường Lý Thái Tổ (phà Cát Lái chạy thẳng) cũng có rất nhiều hàng quán cho bạn lựa chọn.</p>
                        <br />
                        <p className="font-semibold">COCO GARDEN còn tặng bạn nước đá, nước suối FREE nữa đóooo.</p>
                    </div>
                </div>
                <div className="relative mt-[70px]">
                    <div className="
                    absolute 
                    right-0 
                    left-0 
                    top-[-50px]
                    ">
                        <ServiceTitle title="QUẦY MINI - tự động" />
                    </div>
                    <div className="
                    bg-[#004aad] 
                    border-[2px] 
                    border-white 
                    p-[20px] 
                    pt-[35px] 
                    rounded-[50px] 
                    text-white
                    sm:text-[13px]
                    sm:py-[20px]
                    ">
                        <p className="font-semibold">Quầy Mini Bar tự phục vụ, ngay sảnh gồm nhiều tiện ích: </p>
                        <div className="flex gap-[30px] justify-between mt-[20px] max-w-3xl sm:flex-col sm:gap-[10px]">
                            {serviceChunks.map((chunk, colIdx) => (
                                <div key={colIdx} className="flex flex-1 flex-col gap-[10px]">
                                    {chunk.map((item, rowIdx) => (
                                        <div className="flex justify-between gap-[10px]" key={rowIdx}>
                                            <div className="text-nowrap">
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="">
                                                <p>{item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServicePage