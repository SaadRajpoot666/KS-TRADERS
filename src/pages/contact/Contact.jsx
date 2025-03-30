import { useState } from "react";
import "./contact.css";
import axios from "axios";

export function Contact() {
  const [showSucess, setShowSucess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); //  New state for password visibility

  const [errors, setErrors] = useState({});

  const handleFormSubmit = async (data) => {
    data.preventDefault();
    let validationErrors = {};

    // Name validation
    if (!name) validationErrors.name = "Name is required";
    else if (name.length < 3 || name.length > 20)
      validationErrors.name = "Name must be between 3 and 20 characters";
     
    // Email validation
    if (!email) validationErrors.email = "Email is required";
    else if (!email.includes("@")) validationErrors.email = "Email must contain '@'";
    else if (!email.endsWith("@gmail.com")) validationErrors.email = "Email must end with '@gmail.com'";

    // Password validation
    if (!password) validationErrors.password = "Password is required";
    else if (password.length < 3) validationErrors.password = "Password must be at least 3 characters";

    // Phone validation
    if (!phone) validationErrors.phone = "Enter your phone number";
    else if (!/^\d{10,11}$/.test(phone)) validationErrors.phone = "Phone number must be 10 or 11 digits";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    
    // Sending form data to the backend
    try {
      const response = await axios.post( "https://ks-traders-backend.vercel.app/contact" , {
        name,
        email,
        password,
        phone,
        message,
      });
      setShowSucess(true);
      setTimeout(() => setShowSucess(false), 3000);
      console.log(response);
 alert('🎉 Form Submitted Successfully 🎉')

 setName("");
 setEmail("");
 setPassword("");
 setPhone("");
 setMessage("");
} catch (err) {
  console.log("Form Error:", err);
alert("Error Processing Data")    
}
  };

  return (
    <>
      {showSucess && (
        <div className="text-center w-[100%] bg-green-400 text-white">
          <p>🎉 Form submitted successfully! 🎉</p>
        </div>
      )}

      <h1 className="text-4xl text-gray-950 capitalize text-center mt-10">Get in Touch</h1>

      <div className="contact-form-container flex flex-row">
        <form onSubmit={handleFormSubmit} className="md:ml-[10%] flex flex-col gap-3 mt-20">
          <div>
            <input type="text" name="name" className="h-10 w-76 pl-5" placeholder="Enter your name"
              value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <p className="msg">{errors.name}</p>}
          </div>

          <div>
            <input type="email" name="email" className="h-10 w-76 pl-5" placeholder="Email"
              value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="msg">{errors.email}</p>}
          </div>

          {/* Password Input with Toggle Button */}
          <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password"
              className="h-10 w-76 pl-5 pr-10" placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)} />
            
            {/* Eye Icon to Toggle Password Visibility */}
            <button type="button" className="absolute right-2 top-2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </button>
            
            {errors.password && <p className="msg">{errors.password}</p>}
          </div>

          <div>
            <input type="tel" name="phone" className="h-10 w-76 pl-5" placeholder="Phone: 03*********"
              value={phone} onChange={(e) => setPhone(e.target.value)} />
            {errors.phone && <p className="msg">{errors.phone}</p>}
          </div>

          <div>
            <textarea name="message" className="h-50 w-76 pl-5" placeholder="Your message here"
              value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>

          <button type="submit"
            className="w-[100%] bg-black text-white border-2 mb-20 border-white rounded-sm hover:bg-white hover:text-black hover:border-black duration-150 pt-1 pb-1">
            Submit
          </button>
        </form>

        <div className="form-image-container absolute bottom-0 right-0 top-[30%]">
          <img className="contact-image"
            src="/images/undraw_personal-email_hfut-removebg-preview.png" alt="Contact Illustration" />
        </div>
      </div>
      <p className="text-red-600 relative mb-16  capitalize"><strong className="text-xl">Note:</strong>if it shows error processing data then try again. to submit this error is because of the network error that occurs while parsing data</p>
    </>
  );
}
