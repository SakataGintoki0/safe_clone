import magma from "../../public/images/products/magma.png";
import features from "../../public/images/features/features.jpeg";
import range from "../../public/images/features/range.jpeg";
import Image from "next/image";

export default function Description() {
  return (
    <div>
      <div className="text-3xl font-semibold text-center py-8 bg-[#004981] text-white ">
        Magna Class C Safe
      </div>
      <div className="p-24">
        <div className="flex gap-12">
          <div className=" basis-1/3 flex flex-col gap-4 w-1/3">
            <Image src={magma} alt="" className="border border-[#ddd]" />
            <div className="flex justify-between w-full">
              <Image
                src={magma}
                alt=""
                className="border border-[#ddd] w-1/5 h-fit"
              />
              <Image
                src={magma}
                alt=""
                className="border border-[#ddd] w-1/5 h-fit"
              />
              <Image
                src={magma}
                alt=""
                className="border border-[#ddd] w-1/5 h-fit"
              />
              <Image
                src={magma}
                alt=""
                className="border border-[#ddd] w-1/5 h-fit"
              />
            </div>
          </div>
          <div className="basis-2/3 space-y-4 text-lg">
            <h2 className="text-4xl">
              A HIGH SECURITY SAFE CERTIFIED BY THE BUREAU OF INDIAN STANDARDS
              FOR RESISTANCE AGAINST BURGLARY.
            </h2>
            <h3 className="text-xl font-semibold text-[#00a7c4]">
              FIRE & BURGLARY RESISTANT SAFE
            </h3>
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
            <p>
              This product range provides the best burglary protection, torch
              and tool resistance and comes with a sleek and elegant design with
              the option of internal fittings for maximized storage capacity.
              Customers can select from a wide range of sizes, starting from 60
              to 345 litres. These security safes are available with a
              combination lock, electronic safe lock and biometric access
              control system. Customers also have a choice of customizable doors
              with the Left Hung (LH) option.
            </p>
            <p>
              The complete range has been certified by the Bureau of Indian
              standards as per the IS-550 standard. This High-security safe
              comes with monolithic door construction and continuous rebate on
              the hinge side for superior strength and protection.
            </p>
            <button className="bg-[#00a7c4] text-white py-4 px-8 rounded-full">
              Enquire now
            </button>
          </div>
        </div>
        <div className="my-16">
          <h2 className="text-3xl mb-8 text-center">Key Features</h2>
          <div className="flex gap-8">
            <div className="text-center">
              <Image src={features} alt="" />
              <h2 className="text-[#00a7c4] text-xl font-semibold">
                Type of Resistance
              </h2>
              <p>Burglary & Fire</p>
            </div>
            <div className="text-center">
              <Image src={features} alt="" />
              <h2 className="text-[#00a7c4] text-xl font-semibold">
                Type of Resistance
              </h2>
              <p>Burglary & Fire</p>
            </div>
            <div className="text-center">
              <Image src={features} alt="" />
              <h2 className="text-[#00a7c4] text-xl font-semibold">
                Type of Resistance
              </h2>
              <p>Burglary & Fire</p>
            </div>
          </div>
        </div>
        <div className="my-16">
          <h2 className="text-3xl mb-8 text-center">Complete Range</h2>
          <Image src={range} alt="" className="w-full" />
        </div>

        <div className="flex gap-12">
          <Image src={magma} alt="" className="basis-1/3" />
          <div className="basis-2/3">
            <h2 className="text-3xl mb-8 -ml-4">Complete Range</h2>
            <ul className="list-disc text-lg">
              <li>Best burglary protection, torch and tool resistant</li>
              <li>Sleek and elegant design</li>
              <li>
                Option of internal fittings for maximised storage capacity
              </li>
              <li>Best in class design and build quality</li>
              <li>Choice of 5 models-60 to 345 litres</li>
              <li>
                Also available with combination lock and biometric access
                control system
              </li>
              <li>Customizable with Left Hung (LH) door option</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
