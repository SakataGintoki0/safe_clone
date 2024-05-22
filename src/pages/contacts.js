import Form from "@/ui/Form";

function Contacts() {
  return (
    <div>
      <div className="flex gap-8 px-8 py-12">
        <div className="basis-1/2">
          <Form type="white" />
        </div>
        <div className="bg-[#f2f2f2] p-8 basis-1/2 ml-32">
          <h2 className="text-4xl pb-4">Contact Us</h2>
          <div className="border-b py-8">
            <h2 className="text-3xl pb-4">Address</h2>
            <p className="text-lg text-[#666] pb-8">
              NC-2B, Lohiya Nagar, Road No. 2, Kankarbagh, Patna - 800020
            </p>
            <p className="text-lg text-[#666]">
              Dak Bungalow Road, Opp Westsite, SP Verma Road Corner, Patna,
              Bihar-800001
            </p>
          </div>

          <div className="border-b py-8">
            <h2 className="text-3xl pb-4">Phone</h2>
            <p className="text-lg text-[#666]">
              Mobile: 9386310001 | 9430002525
            </p>
          </div>
          <div className="pt-8">
            <h2 className="text-3xl pb-4">Email</h2>
            <p className="text-lg text-[#666] pb-2">
              support@agarwalagencies.com
            </p>
            <p className="text-lg text-[#666]">contact@agarwalagencies.com</p>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14392.581392472219!2d85.154068!3d25.600086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59162692b0a7%3A0x295a4464bc852df6!2sAgarwal%20Agencies!5e0!3m2!1sen!2sin!4v1716286812631!5m2!1sen!2sin"
          allowfullscreen=""
          className="w-screen h-screen"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
