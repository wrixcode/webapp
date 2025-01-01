'use client'
import React from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "32a28fd3-b755-4c31-ac69-d52387255f55");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully")
      event.target.reset();
    } else {
    
      toast.error("error")
      setResult(data.message);
    }
  };
  return (
    
    <div className='bg-[#101125] '
 
    >
         <h1 className='text-4xl font-bold  text-center text-white pt-9 pb-9'> Contact Us</h1>
    
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto px-5 text-gray-600 pt-8">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 text-left">Your Name<input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name="Name" placeholder="Your Name" required />
        </div><div className="w-full md:w-1/2 text-left md:pl-4">Your Email<input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name="Email" placeholder="Your Email" required=""/>
        </div></div><div className="my-6 text-left">Message<textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="Message" placeholder="Message" required="">
          </textarea>
          </div>
          <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">{result ? result : "send message"}</button>
          </form>
    </div>
  )
}

export default Contact
