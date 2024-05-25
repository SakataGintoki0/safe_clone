import Link from "next/link";
import Model from "./model";
import { useState } from "react";

function Navbar() {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div className="flex justify-between py-12 px-12 relative text-white bg-[#004981]">
      <div className={showProducts ? `absolute top-3/4 left-4` : `hidden`}>
        <Model />
      </div>
      <div>
        <ul className="flex gap-6">
          <li
            className="cursor-pointer"
            onClick={() => setShowProducts((showProducts) => !showProducts)}
          >
            OUR PRODUCTS
          </li>
          <li>
            <Link href="/about">ABOUT US</Link>
          </li>
          <li>
            <Link href="/contacts">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href="/">AA</Link>
      </div>
      <div>SERVICE REQUEST</div>
    </div>
  );
}

export default Navbar;
