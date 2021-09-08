import React from "react";
import { useForm } from "react-hook-form";
export default function CreateUser(props) {
  const { type = "User" } = props;
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form className="text-primary" onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Profile</h2>
      <label>
        {" "}
        Name:
        <input {...register("firstName", { required: true })} />
      </label>
      {errors.firstName?.type === "required" && "First name is required"}
      <label>
        {" "}
        Email:
        <input {...register("email", { required: true })} />
        {errors.email?.type === "required" && "email  is required"}
      </label>
      <label>
        {" "}
        Phone:
        <input {...register("phone", { required: false })} />
      </label>
      {errors.phone?.type === "required" && "phone  is required"}
      <label>
        {" "}
        User Type:
        <input
          type="radio"
          checked={type === "User"}
          defaultValue={type}
          {...register("Type", { required: false })}
        />
        Personal
      </label>
      <label>
        {" "}
        Gender:
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </label>
      <input type="submit" value="Add" className="btn btn-primary btn-block" />
    </form>
  );
}
