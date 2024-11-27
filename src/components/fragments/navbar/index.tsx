import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="fixed">
            <Link href="/">
                <h3 className="text-white cursor-pointer">VALORANT INFO</h3>
            </Link>
        </div>
    )
}
