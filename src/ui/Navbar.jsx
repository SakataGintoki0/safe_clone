import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between py-12 px-12 text-white bg-[#004981]">
      <div>
        <ul className="flex gap-6">
          <li>
            <Link href="/products">OUR PRODUCT</Link>
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
