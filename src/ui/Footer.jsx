function Footer() {
  return (
    <div className="p-8">
      <div className="flex gap-4 justify-between p-8">
        <div className="flex gap-12">
          <div className="text-7xl">AA</div>
          <div className="flex flex-col">
            <h2 className="font-semibold">Agarwal agencies</h2>
            <span>
              Dak Bungalow Road, Opp Westsite, SP Verma Road Corner, Patna,
              Bihar-800001
            </span>
            <span>Phone: 9386310001 | 9430002525 </span>
            <span>Email: contact@agarwalagencies.com </span>
          </div>
          <div>
            <h2 className="font-semibold">Overview</h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
            </ul>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14392.581392472219!2d85.154068!3d25.600086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59162692b0a7%3A0x295a4464bc852df6!2sAgarwal%20Agencies!5e0!3m2!1sen!2sin!4v1716286812631!5m2!1sen!2sin"
            width="400"
            height="200"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="border-t py-4">
        Copyright © 2024. All Rights Reserved. | Designed & Maintained by Xeon
        Multimedia
      </div>
    </div>
  );
}

export default Footer;
