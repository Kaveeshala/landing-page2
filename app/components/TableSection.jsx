import Image from "next/image";
import tableimg from "../../public/images/tableimg.png";

export default function TableSection() {
  return (
    <div className="flex border border-gray-300 mt-30">
     
      <div className="flex-shrink-0 w-1/50 border-r border-gray-300">
      
      </div>

      <div className="flex-1 border-r border-gray-300 px-6">
        <h1 className="font-roboto text-[24px] mt-6">Consultation</h1>
        <p className="font-roboto font-light text-[14px] text-gray-400 leading-tight mt-4">Our Consultation provides expert
           guidance on tailored solar solutions,
           helping you make informed decisions for
           a sustainable energy future</p>

           <h1 className="underline text-sm cursor-pointer mt-6">LEARN MORE</h1>
    
      </div>

     
      <div className="flex-1 border-r border-gray-300 px-6">
        <h1 className="font-roboto text-[24px] mt-67">Survay</h1>
        <p className="font-roboto font-light text-[14px] text-gray-400 leading-tight mt-4">Our Survey Process evaluates your site
           and energy needs to design an optimal
           solar solution</p>

           <h1 className="text-sm underline cursor-pointer mt-6">LEARN MORE</h1>
      </div>

      <div className="flex-1 border-r border-gray-300 px-6">
        <h1 className="font-roboto text-[24px] mt-113">Execute</h1>
        <p className=" font-roboto font-light text-[14px] text-gray-400 leading-tight mt-4">Our Execution Process ensures seamless
           installation and integration of your solar
           system, delivering efficient, reliable, and
           sustainable energy solutions.</p>

           <h1 className="text-sm underline cursor-pointer mt-6">LEARN MORE</h1>

      </div>

      <div className="flex-2">
        <Image src={tableimg} alt="tableimg" className="w-full h-full object-cover" />
      </div>
    </div>
    
  );
}
