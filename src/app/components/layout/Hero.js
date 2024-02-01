import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return(
        <>
            <section className="hero">
                <div className="py-12">   
                <h1 className="text-4xl font-semibold">Tout est mieux avec un Fast&Tasty</h1>
                <p className="my-4 text-gray-500">
                  <span className="text-primary">Fast&Tasty</span>est la piece manquante qui mettra du gout à votre journée
                 </p>
                 <div className="flex gap-4 items-center">
                    <button className="bg-primary uppercase flex  gap-2 text-white rounded-full py-2 px-4 text-sm items-center">Commander <Right className="w-7 h-7"/></button>
                    <button className="flex gap-2 py-2 px-4 text-gray-600 font-semibold">Découvrir <Right/></button>
                 </div>
                </div>
                <div className=" relative">
                    <Image src={'/pizza.png'} alt="food" layout={'fill'} objectFit={'contain'}/>
                </div>               
            </section>
        </>
    )
}