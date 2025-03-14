export default function About() {
    return (
      <div className="mx-auto max-w-7xl mt-32">
  
        <div className="flex gap-36">
          <h1 className="font-roboto text-[24px] font-semibold">About</h1>
          <div>
            <p className="leading-tight font-roboto font-400 text-[40px] text-justify">
              We  provide  innovative  solar  solutions  with  high-efficiency  panels  and  energy  storage, 
              making clean, reliable energy accessible for homes and businesses. Join us in creating a sustainable future.
            </p>

            <div className="flex gap-64 font-roboto font-400">
                <div className="flex flex-col ">
                <p className=" text-gray-500  mt-12">over</p>
                <p className="text-7xl">54K</p>
                <p className="text-gray-500">Solor panels installed</p>
                </div>
           
                <div className="flex flex-col">
                <p className=" text-gray-500 mt-12">over</p>
                <p className="text-7xl">312</p>
                <p className="text-gray-500">recognized clients</p>
                </div>

                <div className="flex flex-col">
                <p className=" text-gray-500 mt-12">over</p>
                <p className="text-7xl">64</p>
                <p className="text-gray-500">countries</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  