import clsx from "clsx";

const Title = ({ title, color, lineColor }: { title: string, color?: string, lineColor?: string }) => {
    return (
        <div className="text-center">
            <p
                style={{ color }}
                className={clsx(
                    `font-paytone text-[30px] sm:text-5xl`,
                    {
                        'text-line-[1px_#000] sm:text-line-[1.5px_#000]': lineColor === 'black',
                        'text-line-[1px_#fff] sm:text-line-[1.5px_#fff]': lineColor === 'white',
                    },
                )}
            >
                {title}
            </p>
        </div>
    )
}

export { Title };