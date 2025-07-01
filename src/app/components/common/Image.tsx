import { Property } from "csstype"
import Image from "next/image"

interface IImageProps {
    src: string
    alt?: string
    objectFit?: Property.ObjectFit
    width?: string
    height?: string
}

const ImageCustom = (props: IImageProps) => {
    return (
        <Image
            src={props.src}
            alt={props?.alt || ''}
            width={0}
            height={0}
            sizes="100vw"
            style={{
                width: '100%',
                height: props?.height || 'auto',
                objectFit: props?.objectFit || 'cover'
            }}
        ></Image>
    )
}

export default ImageCustom