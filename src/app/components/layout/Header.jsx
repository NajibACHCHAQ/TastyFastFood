import Link from "next/link"
export default function Header() {
    return(
<>
    <header className="flex items-center justify-between">
        
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl " href={''}>Fast&Tasty</Link>
            <Link href={'/'}>Acceuil</Link>
            <Link href={''}>Menu</Link>
            <Link href={''}>A propos</Link>
            <Link href={''}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
            <Link href={'/login'}>Se connecter</Link>
            <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2 hover:bg-[#f13901d4]">Créer un compte</Link>
            
        </nav>

    </header>

        
        </>
    )
}