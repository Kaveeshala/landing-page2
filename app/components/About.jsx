export default function About() {
    return (
      <div className="mx-auto max-w-7xl mt-24">
      {/* Keep h1 and paragraph in the same row */}
        <div className="flex gap-36">
          <h1 className="font-semibold">About</h1>
          <div>
            <p className="leading-relaxed">
              We provide innovative solar solutions with high-efficiency panels and energy storage, 
              making clean, reliable energy accessible for homes and businesses. Join us in creating a sustainable future.
            </p>

            <div className="flex gap-64">
                <div className="flex flex-col">
                <p className=" text-gray-400 mt-12">over</p>
                <p className="text-5xl">54K</p>
                <p className="text-gray-400">Solor panels installed</p>
                </div>
           
                <div className="flex flex-col">
                <p className=" text-gray-400 mt-12">over</p>
                <p className="text-5xl">312</p>
                <p className="text-gray-400">recognized clients</p>
                </div>

                <div className="flex flex-col">
                <p className=" text-gray-400 mt-12">over</p>
                <p className="text-5xl">64</p>
                <p className="text-gray-400">countries</p>
                </div>
            </div>

            
          </div>
        </div>
      </div>
    );
  }
  