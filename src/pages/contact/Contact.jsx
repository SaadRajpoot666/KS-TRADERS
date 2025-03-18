import { useState } from "react";
import { useForm } from "react-hook-form";
import "./contact.css";
import { FormGroup } from "./Form-Group/FormGroup";

export function Contact() {
  const [showSucess, setShowSucess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // ✅ Fixed typo
  } = useForm();

  const handleFormSubmit = (data) => {
    // ✅ Accept `data`
    console.log(data); // ✅ Log submitted values
    setShowSucess(true);
    reset();
    setTimeout(() => {
      setShowSucess(false);
    }, 3000);
  };

  return (
    <>
      {showSucess && (
        <div className="text-center w-[100%] bg-green-400 text-white ">
          <p>Form submitted successfully!</p>
        </div>
      )}

      <h1 className="text-4xl text-gray-950 capitalize text-center  mt-10">
        Get in Touch
      </h1>

      <div className="contact-form-container justify-center flex flex-row">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="md:ml-[10%] flex flex-col gap-1 mt-20"
        >
          {" "}
          {/* ✅ Fixed submit function */}
          <FormGroup>
            {" "}
            {/* ✅ Fixed error reference */}
            <input
              className={`name-input h-10  w-76  pl-5 `}
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
                maxLength: {
                  value: 20,
                  message: "Name cannot exceed 20 characters",
                },
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                pattern: {
                  value: /[A-Z]/,
                  message: "Name must contain at least 1 UpperCase Character",
                },
              })}
            />
            {errors.name && <p className="   msg ">{errors?.name?.message}</p>}
          </FormGroup>
          <FormGroup>
            <input
              className="email h-10  pl-5 w-76"
              placeholder="Email:"
              {...register("email", {
                required: "Email is Required",
                pattern: { value: /[@]./, message: "Must Contact @ and ." },
                validate: (value) => {
                  if (!value.endsWith("@gmail.com")) {
                    return "Must ends with @gmail.com";
                  }
                },
                minLength: {
                  value: 4,
                  message: "Must be at least 4 characters",
                },
              })}
            />
            {errors?.email && <p className="msg">{errors?.email?.message}</p>}
          </FormGroup>
          <FormGroup>
            <input
              className="h-10  pl-5  w-76"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should have at least 8 characters",
                },
                pattern: {
                  value: /[0-9]_/,
                  message: "Password must contain (_) and digits",
                },
              })}
            />
            {errors.password && (
              <p className="msg">{errors?.password?.message}</p>
            )}
          </FormGroup>
          <FormGroup>
            <input
              className="h-10  pl-5  w-76"
              placeholder="Phone: 03*********"
              {...register("phone", {
                required: "Enter Your Phone Number",
                pattern: {
                  value: /[0-9]/,
                  message: "Must only contains digits",
                },
                minLength: {
                  value: 10,
                  message: "Phone Number should have at least 10 digits",
                },
                maxLength: {
                  value: 11,
                  message: "Phone Number cannot exceed 11 digits",
                },
              })}
            />
            {errors.phone && <p className="msg">{errors?.phone?.message}</p>}
          </FormGroup>
          <FormGroup>
            <textarea
              name="message"
              id="message"
              className="h-50   pl-5  w-76 "
              placeholder="Your message here"
            />
          </FormGroup>
          <button
            type="submit"
            className="w-76 bg-black text-white border-2 border-white rounded-sm hover:bg-white hover:text-black hover:border-black duration-150 pt-1 pb-1 submit-btn"
          >
            Submit
          </button>
        </form>

        <div className="form-image-container absolute bottom-0 right-0 top-[30%] ">
          <img
            className="contact-image"
            src="/images/undraw_personal-email_hfut-removebg-preview.png"
            alt="Contact Illustration" // ✅ Added alt attribute
          />
        </div>
      </div>
    </>
  );
}
