import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useLocalStorageState } from "../../hooks/use-location";

export default function CreateUser(props) {
  const { type = "User" } = props;
  const [myprofile, setMyProfile] = useLocalStorageState("myprofile", {
    myprofile: {},
  });
  const [skills, setSkills] = useLocalStorageState("skills", [{ name: "" }]);
  const {
    firstName = "",
    skill = "",
    phone = "",
    Type = "",
    email = "",
  } = myprofile?.myprofile;
  const {
    register,
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { fields, append } = useFieldArray({
    control,
    name: "skills",
  });
  const watchFieldArray = watch("skills");

  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  useEffect(() => {
    setValue("myprofile.email", email, { shouldDirty: true });
    setValue("myprofile.firstName", firstName, {
      shouldDirty: true,
    });
    setValue("myprofile.skill", skill, {
      shouldDirty: true,
    });
    setValue("myprofile.Type", Type, {
      shouldDirty: true,
    });
    setValue("myprofile.phone", phone, {
      shouldDirty: true,
    });
    setValue("skills", skills);
    // eslint-disable-next-line
  }, []);
  const onSubmit = (data) => {
    setMyProfile({ myprofile: data?.myprofile });
    setSkills(data.skills);
  };

  return (
    <form className="text-primary" onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Profile</h2>

      <div className="form-group col-5">
        <label>
          {" "}
          Name:
          <input {...register("myprofile.firstName", { required: true })} />
        </label>
      </div>
      <div className="form-group col-5">
        <input {...register("myprofile.skill")} placeholder="Skill" />
        {controlledFields.map((field, index) => {
          return (
            <input
              {...register(`skills.${index}.name`)}
              key={`skills.${index}.name`}
            />
          );
        })}

        <button
          type="button"
          onClick={() =>
            append({
              name: "skill",
            })
          }
        >
          Append
        </button>
      </div>
      <div className="form-group col-5">
        <label>
          {" "}
          Email:
          <input {...register("myprofile.email", { required: true })} />
          {errors?.myprofile?.email?.type === "required" &&
            "email  is required"}
        </label>
        <label>
          {" "}
          Phone:
          <input {...register("myprofile.phone", { required: false })} />
        </label>
        {errors.myprofile?.phone?.type === "required" && "phone  is required"}
        <label>
          {" "}
          User Type:
          <input
            type="radio"
            checked={type === "User"}
            defaultValue={type}
            {...register("myprofile.Type", { required: false })}
          />
          Personal
        </label>
        <label>
          {" "}
          Gender:
          <select {...register("myprofile.gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </label>
      </div>
      <input type="submit" value="Add" className="btn btn-primary btn-block" />
    </form>
  );
}
