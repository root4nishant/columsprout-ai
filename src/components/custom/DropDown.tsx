import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductsDropdownProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

export function ProductsDropdown({
  isOpen,
  closeDrawer,
}: ProductsDropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 w-full px-4 lg:px-10 text-black z-20 mt-10 font-primary"
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={closeDrawer}
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="bg-gradient-to-l from-[#c9c8d9] to-white rounded-md shadow-lg">
          <div className="p-6 ">
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
                {/* <h3 className="text-2xl font-semibold mb-3">Tabi</h3> */}
                <p className="text-gray-700 mb-6 font-secondary">
                  Effortlessly use Gen AI for tabular data with speed &
                  accuracy. Guess what, anyone can use it.
                </p>
                <Link href="/tabi">
                  <Button
                    className="bg-primary-dark hover:bg-black text-white font-medium rounded px-6"
                    onClick={closeDrawer}
                  >
                    Explore Tabi
                  </Button>
                </Link>
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
                {/* <h3 className="text-2xl font-semibold mb-3">Clio</h3> */}
                <p className="text-gray-700 mb-6 font-secondary">
                  Deliver seamless customer experiences and gain actionable
                  insights with intelligent AI agents.
                </p>
                <Link href="/clio">
                  <Button
                    className="bg-primary-dark hover:bg-black text-white font-medium rounded px-6"
                    onClick={closeDrawer}
                  >
                    Explore Clio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
