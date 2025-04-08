import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  // I have added Tailwind based CSS

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center h-screen bg-gray-100"
      >
        <div>
          <label htmlFor="FirstName" className="block text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="FirstName"
            {...register("FirstName", { required: true })}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
          />
          {errors.FirstName && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="LastName" className="block text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="LastName"
            {...register("LastName", { required: true })}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
          />
          {errors.LastName && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="Password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="Password"
            {...register("Password", { required: true })}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
          />
          {errors.Password && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="Gender" className="block text-gray-700">
            Gender:
          </label>
          <label htmlFor="GenderMale" className="mr-4">
            <input
              type="radio"
              id="genderMale"
              value="male"
              {...register("gender", { required: true })}
            />{" "}
            Male
          </label>
          <label htmlFor="GenderFemale" className="mr-4">
            <input
              type="radio"
              id="genderFeale"
              value="female"
              {...register("gender", { required: true })}
            />{" "}
            Female
          </label>
          {errors.Gender && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="Address" className="block text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="Address"
            {...register("Address", { required: true })}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
          />
          {errors.Address && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="State" className="block text-gray-700">
            State
          </label>
          <select
            id="State"
            {...register("State", { required: true })}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
          >
            <option value="">Select state</option>
            <option value="State1">Punjab</option>
            <option value="State2">Haryana</option>
            <option value="State3">Himachal Pradesh</option>
          </select>
          {errors.State && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
      </form>
    </>
  );
}

export default Form;
