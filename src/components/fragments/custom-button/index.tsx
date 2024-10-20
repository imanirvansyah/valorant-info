import Link from "next/link";

export const CustomButton: React.FC<{ id: string; title: string; subtitle: string; }> = ({ id, title, subtitle }) => {
    return (
        <Link href={`/${id}`}>
            <div className="text-center p-5 hover:bg-brand active:bg-red-900 max-w-[250px] transition ease-in-out duration-200 cursor-pointer" >
                <h3 className="text-xl mb-2">{title}</h3>
                <p className="text-sm font-light">{subtitle}</p>
            </div>
        </Link>
    )
}