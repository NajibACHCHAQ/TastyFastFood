import Image from "next/image";

export default function Hero() {
    return(
        <>
            <section className="grid grid-cols-2">
                <div>   
                <h1 className="text-4xl font-semibold">Tout est mieux avec un TastyFastFood</h1>
                <p className="my-4 text-gray-500">
                    TastyFastFood est la piece manquante qui mettra du gout à votre journée
                 </p>
                 <div className="flex gap-4">
                    <button className="bg-primary text-white rounded-full py-2 px-8 ">Commander</button>
                    <button className="">Découvrir</button>
                 </div>
                </div>
                <div className=" relative">
                    <Image src={'/pizza.png'} alt="food" layout={'fill'} objectFit={'contain'}/>
                </div>               
            </section>
        </>
    )
}