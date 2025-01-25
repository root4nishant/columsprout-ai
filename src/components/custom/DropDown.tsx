// import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductsDropdownProps {
  isOpen: boolean;
}

export function ProductsDropdown({ isOpen }: ProductsDropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 mt-10 right-0 px-4 lg:px-20  text-black font-primary"
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-gradient-to-l from-[#c9c8d9]  to-white rounded-md shadow-lg">
          <div className="p-8">
            {/* <h2 className="text-white text-xl font-semibold mb-8">Products</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Tabi Product */}
              <div>
                <div className="mb-6">
                  <Image
                    src="/hero.png"
                    alt="Tabi AI"
                    width={400}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className=" text-2xl font-semibold mb-3">Tabi</h3>
                <p className="text-gray-700 mb-6">
                  Effortlessly use Gen AI for tabular data with speed &
                  accuracy. Guess what, anyone can use it
                </p>
                <Button className="bg-gray-300 hover:bg-white text-black font-medium rounded px-6">
                  Explore Tabi
                </Button>
              </div>

              {/* Clio Product */}
              <div>
                <div className="mb-6">
                  <Image
                    src="/hero.png"
                    alt="Clio AI"
                    width={400}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className=" text-2xl font-semibold mb-3">Clio</h3>
                <p className="text-gray-700 mb-6">
                  Deliver seamless customer experiences and gain actionable
                  insights with intelligent AI agents
                </p>
                <Button className="bg-gray-300 hover:bg-white text-black font-medium rounded px-6">
                  Explore Clio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
