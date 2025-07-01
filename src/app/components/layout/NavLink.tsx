import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={clsx(`
                flex-1
                header-hover 
                flex 
                items-center 
                justify-center 
                relative
                hover:text-[rgb(255,236,157)] 
            `)}
        >
            <span className={isActive ? "text-[rgb(255,236,157)]" : ""}>
                {children}
            </span>
        </Link>
    );
}

export default NavLink