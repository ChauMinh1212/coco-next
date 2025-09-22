import { Title } from "@/lib/components/common";

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
            <div className="max-w-5xl mx-auto px-[30px] py-[30px] lg:py-[40px] relative">
                <div className="relative mt-[50px]">
                    <div className="absolute right-0 left-0 top-[-50px]">
                        <Title title="DỊCH VỤ ĂN UỐNG" color="#004aad" lineColor="white" />
                    </div>
                    <div className="bg-[#004aad] border-[2px] border-white p-[20px] pt-[35px] rounded-[50px] text-white text-sm sm:text-base md:text-lg py-[20px]">
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
                <div className="relative mt-[70px] lg:mt-[100px]">
                    <div className="absolute right-0 left-0 top-[-50px]">
                        <Title title="QUẦY MINI - tự động" color="#004aad" lineColor="white" />
                    </div>
                    <div className="bg-[#004aad] border-[2px] border-white p-[20px] pt-[35px] rounded-[50px] text-white text-sm sm:text-base md:text-lg py-[20px]">
                        <p className="font-semibold">Quầy Mini Bar tự phục vụ, ngay sảnh gồm nhiều tiện ích: </p>
                        <div className="flex sm:gap-[30px] sm:flex-row justify-between mt-[20px] max-w-3xl flex-col gap-[10px]">
                            {serviceChunks.map((chunk, colIdx) => (
                                <div key={colIdx} className="flex flex-1 flex-col gap-[10px]">
                                    {chunk.map((item, rowIdx) => (
                                        <div className="flex justify-between gap-[10px]" key={rowIdx}>
                                            <div className="text-nowrap">
                                                <p>{item.name}</p>
                                            </div>
                                            <div>
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