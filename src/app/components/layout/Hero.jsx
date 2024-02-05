import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return(
        <>
            <section className="hero mt-4">
                <div className="py-12">   
                <h1 className="text-4xl font-semibold">Tout est <span className="text-primary">Meilleur</span> avec<br/> <span className="text-primary">Fast&Tasty</span></h1>
                <p className="my-6 text-gray-500">
                  <span className="text-primary font-semibold text-xl">Fast&Tasty </span>
                 <br/>La piece manquante qui mettra du <span className="text-primary text-xl font-semibold">Gout </span> à votre journée
                 </p>
                 <div className="flex gap-4 items-center">
                    <button className="bg-primary uppercase flex  gap-2 text-white rounded-full py-2 px-4 text-sm items-center hover:font-semibold hover:bg-[#f13901d4]">Commander <Right className="w-7 h-7"/></button>
                    <button className="flex gap-2 py-2 px-4 text-gray-600 font-semibold border-transparent w-[fit-content] hover:text-gray-500">Découvrir <Right/></button>
                 </div>
                </div>
                <div className=" relative">
                    <Image  src={'/pizza.png'} alt="food" layout={'fill'} objectFit={'contain'}/>
                </div>               
            </section>
        
        </>
    )
}