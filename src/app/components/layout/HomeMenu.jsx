import Image from "next/image"
import { MenuItem } from "../menu/MenuItem"

export default function HomeMenu() {
    return(
        <section className="">
            <div className="absolute left-0 right-0 " >
                <div className="left-0 absolute -top-[80px] -z-10 text-left">
                    <Image src={'/sallad1.png'} alt='image salade' width={187} height={195}  objectFit={'contain'} />
                </div>
                <div className=" absolute -top-[120px] right-0 -z-10">
                    <Image src={'/sallad2.png'} alt='image salade' width={187} height={195} objectFit={'contain'} />
                </div>
            </div>
            <div className="text-center mb-4">
                <h3 className="uppercase text-gray-600 font-semibold leading-4">Paiement</h3>
                <h3 className="text-primary font-bold text-4xl italic">Menu</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
            
        </section>
    )
}