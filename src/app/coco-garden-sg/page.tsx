import ImageCustom from "../components/common/Image"

const CocoGardenSgPage = () => {
  return (
      <div className="max-w-5xl mx-auto px-[30px] py-[20px] font-dejavu">
          <div className="flex items-center">
              <div>
                  <div className="relative flex-1 ssm:text-[15px] text-black px-[50px] md:px-[30px] sm:px-[20px] py-[10px] rounded-[20px] font-dejavu w-full overflow-hidden sm:text-[15px]">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0097b2] to-[#7ed957] opacity-[0.77]">
                      </div>
                      <div className="relative font-semibold">
                          Coco Garden Sài Gòn sẽ sớm ra mắt vào cuối tháng 12.2025 này.
                          <br />
                          <br />
                          Hãy chờ chúng mình nhéeee !!!
                      </div>
                  </div>
              </div>
              <div className="w-[30%] sm:hidden flex justify-center">
                  <ImageCustom src="/img/smile.webp" alt="" objectFit="contain" width="70%"/>
              </div>
          </div>
      </div>
  )
}

export default CocoGardenSgPage
