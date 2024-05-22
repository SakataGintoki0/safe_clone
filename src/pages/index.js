import Image from "next/image";
import categoryImg from "../../public/images/product_category/safes.png";
import img from "../../public/images/products/optimusBiometric.png";
import Form from "@/ui/Form";

export default function Home() {
  return (
    <main>
      <div className="bg-landing h-[80vh] bg-cover mb-12"></div>
      <div className="p-8">
        <h1 className="text-3xl text-center mb-8">BEST SELLER</h1>
        <div className="flex justify-between text-center border-b py-8">
          <div>
            <Image src={img} width={300} height={300} alt="" />
            <span>Optimus Biometric</span>
          </div>
          <div>
            <Image src={img} width={300} height={300} alt="" />
            <span>Optimus Biometric</span>
          </div>
          <div>
            <Image src={img} width={300} height={300} alt="" />
            <span>Optimus Biometric</span>
          </div>
          <div>
            <Image src={img} width={300} height={300} alt="" />
            <span>Optimus Biometric</span>
          </div>
          <div>
            <Image src={img} width={300} height={300} alt="" />
            <span>Optimus Biometric</span>
          </div>
        </div>

        <div className="flex gap-12 my-32">
          <div className="bg-[#9f9271] text-white p-4 flex">
            <div>
              <Image src={img} width={200} height={200} alt="" />
            </div>
            <div>
              <h2 className="font-semibold underline text-lg">VIPER SAFE</h2>
              <div>THE IDEAL SAFE STORAGE SOLUTION FOR HOME AND OFFICE</div>
            </div>
          </div>
          <div className="bg-[#0096af] text-white p-4 flex">
            <div>
              <Image src={img} width={200} height={200} alt="" />
            </div>
            <div>
              <h2 className="font-semibold underline text-lg">VIPER SAFE</h2>
              <div>THE IDEAL SAFE STORAGE SOLUTION FOR HOME AND OFFICE</div>
            </div>
          </div>
          <div className="bg-[#9f9271] text-white p-4 flex">
            <div>
              <Image src={img} width={200} height={200} alt="" />
            </div>
            <div>
              <h2 className="font-semibold underline text-lg">VIPER SAFE</h2>
              <div>THE IDEAL SAFE STORAGE SOLUTION FOR HOME AND OFFICE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-fit w-screen flex flex-col items-center text-center space-y-8 bg-[#eee] py-16">
        <h2 className="text-3xl">PRODUCT CATEGORIES WE DEAL IN</h2>
        <div className="flex border w-fit bg-white">
          <div>
            <div className="flex flex-col justify-center align-center py-24 px-12">
              <Image src={categoryImg} alt="" height={100} width={100} />
              <p>Certified Safes</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center align-center py-24 px-12 border-l">
              <Image src={categoryImg} alt="" height={100} width={100} />
              <p>Certified Safes</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center align-center py-24 px-12 border-l">
              <Image src={categoryImg} alt="" height={100} width={100} />
              <p>Certified Safes</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center align-center py-24 px-12 border-l">
              <Image src={categoryImg} alt="" height={100} width={100} />
              <p>Certified Safes</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center align-center py-24 px-12 border-l">
              <Image src={categoryImg} alt="" height={100} width={100} />
              <p>Certified Safes</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center align-center py-24 px-12 border-l">
              <Image src={categoryImg} alt="" height={100} width={100} />
              <p>Certified Safes</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center align-center py-24 px-12 border-l">
              <Image src={categoryImg} alt="" height={100} width={100} />
              <p>Certified Safes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#333] text-center text-white text-4xl py-32 justify-around">
        <div>
          <h2>Established In</h2>
          <h2 className="text-6xl text-[#00a7c4] mt-2">1985</h2>
        </div>
        <div>
          <h2>Clients Served</h2>
          <h2 className="text-6xl text-[#00a7c4] mt-2">1000+</h2>
        </div>
        <div>
          <h2>Product Covered</h2>
          <h2 className="text-6xl text-[#00a7c4] mt-2">30+</h2>
        </div>
      </div>
      <div>
        <Form type="blue" />
      </div>
    </main>
  );
}
