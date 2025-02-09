import { useState } from "react";
import Button from "./Button";
import { BiMessageDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";



const Form = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  }

  return (
    <section className="flex justify-between max-w-[70vw] mt-8 mx-auto relative">

      <div className=" flex flex-col gap-6 mt-6 w-[40%]">
        <div className="flex gap-8">
          <Button btnText="VIA SUPPORT CHAT" icon={<BiMessageDetail className="text-xl" />} />
          <Button btnText="VIA CALL" icon={<FiPhoneCall className="text-xl" />} />
        </div>

        <Button outline={true} btnText="VIA EMAIL FORM" icon={<FiPhoneCall className="text-xl" />} />

        <form  onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="relative">
            <label htmlFor="name" className="absolute -top-3.5 left-5 bg-white px-2">Name</label>
            <input type="text" name="name" className="border-2 rounded-lg h-11 px-2 w-full outline-0" />
          </div>

          <div className="relative">
            <label htmlFor="name" className="absolute -top-3.5 left-5 bg-white px-2">E-Mail</label>
            <input type="text" name="name" className="border-2 rounded-lg h-11 px-2 w-full outline-0" />
          </div>

          <div className="relative">
            <label htmlFor="name" className="absolute -top-3.5 left-5 bg-white px-2">Text</label>
            <textarea type="text" name="name" className="border-2 rounded-lg p-2 w-full h-40 outline-0" />
          </div>

          <div className="flex justify-end">
          <Button btnText="SUBMIT"/>
          </div>
        </form>

      </div>
      <div>
        <img src="/images/Service 24-7.svg" alt=""/>
      </div>
    </section>
  );
}

export default Form;