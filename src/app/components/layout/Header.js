import Link from "next/link"
export default function Header() {
    return(
<>
    <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href={''}>Tasty Fast Food</Link>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
            <Link href={''}>Acceuil</Link>
            <Link href={''}>Menu</Link>
            <Link href={''}>A propos</Link>
            <Link href={''}>Contact</Link>
            <Link href={''} className="bg-primary rounded-full text-white px-8 py-2">Connection</Link>
        </nav>

    </header>

        
        </>
    )
}