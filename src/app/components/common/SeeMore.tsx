'use client'

import { ReactNode, useEffect, useRef, useState } from "react"

type SeeMoreProps = {
    children: ReactNode,
    expanded: Boolean
}

const SeeMore = ({
    children,
    expanded
}: SeeMoreProps) => {
    const [height, setHeight] = useState('0px')
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(expanded ? `${contentRef.current.scrollHeight}px` : '0px')
        }
    }, [expanded])

    return (
        <div
            ref={contentRef}
            style={{ maxHeight: height }}
            className={`overflow-hidden transition-max-height duration-300 ease-in-out`}
        >
            {children}
        </div>
    )
}

export default SeeMore