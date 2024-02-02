import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
    return(
        <section className="mt-8">
           <h1 className="text-center text-primary text-4xl mb-4">Créer un compte</h1>
           <form  action="" className="block max-w-sm mx-auto">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="mot de passe" />
            <button type="submit" className="hover:bg-[#f13901d4]">Créer un compte</button>
            <div className="my-4 text-center text-gray-500">Ou se connecter avec...</div>
            <button className="flex items-center gap-4 justify-center"><FcGoogle size={28}/> Se connecter avec Google</button>
           </form>

        </section>
    )
}