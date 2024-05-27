import Safe from "@/ui/Safe";

function Products() {
  return (
    <div>
      <div className="text-3xl font-semibold text-center py-8 bg-[#004981] text-white ">
        Certified Safes
      </div>
      <div className="py-12 px-12 space-y-12 border-b">
        <Safe />
        <Safe />
        <Safe />
        <Safe />
        <Safe />
      </div>
    </div>
  );
}

export default Products;
