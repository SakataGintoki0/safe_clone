function Form({ type }) {
  const formStyle =
    type === "blue"
      ? "bg-[#00a7c4] px-8 py-16 flex flex-col gap-8"
      : "space-y-4";
  const labelStyle =
    type === "blue" ? "text-white font-semibold text-lg mb-2" : "";
  const inputRowStyle = type === "blue" ? "flex gap-12" : "space-y-4";
  const inputBlockStyle = "flex flex-col w-full";
  const inputStyle =
    type === "blue"
      ? "h-12 px-4 focus:outline-none"
      : "h-12 px-4 focus:outline-none border border-[#ddd]";
  const textareaStyle =
    type === "blue"
      ? "h-32 px-4 py-4 focus:outline-none"
      : "h-32 px-4 py-4 focus:outline-none border border-[#ddd]";
  const headingStyle =
    type === "blue"
      ? "text-3xl text-white self-center font-semibold"
      : "text-3xl self-center pb-2";
  const buttonStyle =
    type === "blue"
      ? "text-white bg-[#363f4d] w-fit px-12 py-4 self-center hover:bg-[#00a7c4] transition duration-300 rounded"
      : "text-white bg-[#363f4d] w-fit px-12 py-4 hover:bg-[#00a7c4] transition duration-300 rounded";
  const title = type === "blue" ? "ENUIRE NOW" : "GET IN TOUCH WITH US";

  return (
    <form className={formStyle}>
      <h1 className={headingStyle}>{title}</h1>
      <div className={inputRowStyle}>
        <div className={inputBlockStyle}>
          <label htmlFor="" className={labelStyle}>
            Name
          </label>
          <input type="text" placeholder="Name" className={inputStyle} />
        </div>
        <div className={inputBlockStyle}>
          <label htmlFor="" className={labelStyle}>
            Mobile Number
          </label>
          <input
            type="text"
            className={inputStyle}
            placeholder="10 digit mobile number"
          />
        </div>
      </div>
      <div className={inputRowStyle}>
        <div className={inputBlockStyle}>
          <label htmlFor="" className={labelStyle}>
            Email
          </label>
          <input
            type="text"
            placeholder="Your Email ID"
            className={inputStyle}
          />
        </div>
        <div className={inputBlockStyle}>
          <label htmlFor="" className={labelStyle}>
            Location
          </label>
          <input type="text" placeholder="Location" className={inputStyle} />
        </div>
        <div className={inputBlockStyle}>
          <label htmlFor="" className={labelStyle}>
            Looking For
          </label>
          <select name="Looking" id="Looking" className={inputStyle}>
            <option value="select" disabled selected>
              Please Select
            </option>
            <option value="Products">Products</option>
            <option value="Services">Services</option>
          </select>
        </div>
      </div>
      <div className={inputBlockStyle}>
        <label htmlFor="" className={labelStyle}>
          Your Message
        </label>
        <textarea className={textareaStyle} />
      </div>
      <button className={buttonStyle}>Submit</button>
    </form>
  );
}

export default Form;
