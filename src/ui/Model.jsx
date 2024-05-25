import banner from "../../public/megamenu-banner.png";
import Image from "next/image";

function Model() {
  return (
    <div className="text-black bg-white">
      <div className="flex">
        <div>
          <div className="font-3xl">SteelCage</div>
          <div>Certified Cages</div>
          <div>Fire Cabinate</div>
          <div>Vault Doors</div>
          <div>Strong Rooms</div>
        </div>
        <div>
          <div className="font-3xl">SteelCage</div>
          <div>Certified Cages</div>
          <div>Fire Cabinate</div>
          <div>Vault Doors</div>
          <div>Strong Rooms</div>
        </div>
        <div>
          <div className="font-3xl">SteelCage</div>
          <div>Certified Cages</div>
          <div>Fire Cabinate</div>
          <div>Vault Doors</div>
          <div>Strong Rooms</div>
        </div>
      </div>
      <div>
        <Image src={banner} alt="" height={300} width={800} />
      </div>
    </div>
  );
}

export default Model;
