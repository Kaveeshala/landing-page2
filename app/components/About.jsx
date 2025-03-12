export default function About() {
    return (
      <div className="mx-auto max-w-7xl mt-24">
  
        <div className="flex gap-36">
          <h1 className="font-semibold text-lg">About</h1>
          <div>
            <p className="leading-tight tracking-wide text-4xl">
              We  provide  innovative  solar  solutions  with  high-efficiency  panels  and  energy  storage, 
              making clean, reliable energy accessible for homes and businesses. Join us in creating a sustainable future.
            </p>

            <div className="flex gap-64">
                <div className="flex flex-col">
                <p className=" text-gray-400 text-sm mt-12">over</p>
                <p className="text-7xl font-semibold">54K</p>
                <p className="text-gray-400 text-sm">Solor panels installed</p>
                </div>
           
                <div className="flex flex-col">
                <p className=" text-gray-400 text-sm mt-12">over</p>
                <p className="text-7xl font-semibold">312</p>
                <p className="text-gray-400 text-sm">recognized clients</p>
                </div>

                <div className="flex flex-col">
                <p className=" text-gray-400 text-sm mt-12">over</p>
                <p className="text-7xl font-semibold">64</p>
                <p className="text-gray-400 text-sm">countries</p>
                </div>
            </div>

            
          </div>
        </div>
      </div>
    );
  }
  