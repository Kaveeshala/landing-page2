import Image from "next/image";
import tableimg from "../../public/images/tableimg.png";

export default function TableSection() {
  return (
    <div className="flex border border-gray-400">
     
      <div className="flex-shrink-0 w-1/12 border-r border-gray-400">
      
      </div>

    
      <div className="flex-1 border-r border-gray-400">
      
      </div>

     
      <div className="flex-1 border-r border-gray-400">
      </div>

      <div className="flex-1 border-r border-gray-400">

      </div>
      
      <div className="flex-2">
        <Image src={tableimg} alt="tableimg" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
