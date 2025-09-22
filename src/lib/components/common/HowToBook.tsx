import { ImageCustom } from "./Image"

const HowToBook = () => {
    return (
        <div className="sm:flex flex-col sm:flex-row gap-[5px] sm:gap-0">
            <div className="flex-1 border-[1px] border-[#00552c]">
                <ImageCustom src="/img/how_to_book.webp" />
            </div>
            <div className="flex-1 border-[1px] border-[#00552c]">
                <ImageCustom src="/img/rule.webp" />
            </div>
        </div>
    )
}

export { HowToBook }