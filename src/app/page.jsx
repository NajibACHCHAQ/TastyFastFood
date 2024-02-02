import Image from "next/image";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu.jsx";
import { SectionHeaders } from "./components/layout/SectionHeaders";

export default function Home() {
  return (
      <>
        <Hero/>
        <HomeMenu/>
        <section className="text-center my-16">
          <SectionHeaders
          subHeader={'Notre histoire'}
          mainHeader={'à propos'}/>
          <div className="max-w-md mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p >
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Aliquid nisi officiis tempora 
            et assumenda ea temporibus quasi hic quidem cumque 
            ipsa commodi delectus nam optio ipsam labore ab, 
            adipisci debitis.
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Aliquid nisi officiis tempora 
            et assumenda ea temporibus quasi hic quidem cumque 
            ipsa commodi delectus nam optio ipsam labore ab, 
            adipisci debitis.
          </p>
            
          <p >Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Aliquid nisi officiis tempora 
            et assumenda ea temporibus quasi hic quidem cumque 
            ipsa commodi delectus nam optio ipsam labore ab, 
            adipisci debitis.
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. 
          </p>

          <p >Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Aliquid nisi officiis tempora 
            et assumenda ea temporibus quasi hic quidem cumque 
            ipsa commodi delectus nam optio ipsam labore ab, 
            adipisci debitis.
          </p>
          </div>
          
        </section>
        <section className=' text-center my-8' >
          <SectionHeaders
            subHeader={"N\'hésite pas"}
            mainHeader={"Contact nous"}/>
            <div className="mt-8">
              <a className="text-4xl underline text-gray-500" href="tel:+3380711111">03 80 71 11 11</a>
            </div>
        </section>

      </>
  );
}
