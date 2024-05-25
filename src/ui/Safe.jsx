import Image from "next/image";
import magma from "../../public/images/products/magma.png";

function Safe() {
  return (
    <div>
      <div className="flex gap-8">
        <div>
          <Image src={magma} alt="" height={700} width={500} />
        </div>

        <div className="text-xl w-2/3 space-y-8">
          <div className="text-4xl font-bold text-[#333]">
            Magma Class C Safe
          </div>
          <div className="space-y-8">
            <p>
              High security safes for protection of cash and valuables certified
              as per BIS Class C. Ideal for high-risk business environments
              storing cash and valuables, such as banks, high-end retail,
              jewellers or pawnshops.
            </p>
            <p>
              This premium range, best-in-class offering comes with industry
              acclaimed strength and quality standards and is certified in
              accordance with IS 550 from the Bureaus of Indian standards.
            </p>
          </div>
          <div>
            <button className="bg-[#00a7c4] text-white rounded px-8 py-4 hover:bg-[#004981] transition-all">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safe;
