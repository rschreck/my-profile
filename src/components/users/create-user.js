import React, { useContext, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useLocalStorageState } from "../../hooks/use-location";
import ContactContext from "../../context/contact/contact-context";
export default function CreateUser(props) {
  const contactContext = useContext(ContactContext);
  const { addContact } = contactContext;
  //const { type = "User" } = props;
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
    gender = "",
    openforwork = "no",
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
    setValue("myprofile.gender", gender, {
      shouldDirty: true,
    });
    setValue("myprofile.openforwork", openforwork, {
      shouldDirty: true,
    });

    setValue("skills", skills);
    // eslint-disable-next-line
  }, []);
  const onSubmit = (data) => {
    setMyProfile({ myprofile: data?.myprofile });
    setSkills(data.skills);
    addContact(data);
  };

  return (
    <form className="text-primary" onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Profile</h2>
      <div className="grid-3">
        <div className="form-group col-5">
          <label>
            {" "}
            Name:
            <input {...register("myprofile.firstName", { required: true })} />
            {errors?.myprofile?.firstName?.type === "required" &&
              "Name is required"}
          </label>
        </div>

        <div className="form-group col-5">
          <label>
            {" "}
            Email:
            <input {...register("myprofile.email", { required: true })} />
            {errors?.myprofile?.email?.type === "required" &&
              "email  is required"}
          </label>

          <div className="form-group col-5">
            <label>
              {" "}
              Phone:
              <input {...register("myprofile.phone", { required: true })} />
              {errors?.myprofile?.phone?.type === "required" &&
                "phone  is required"}
            </label>
          </div>
        </div>
        <div className="form-group col-5">
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
        <div className="form-group col-5">
          <label>
            {" "}
            Skills:
            <input {...register("myprofile.skill")} placeholder="Skill" />
          </label>
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
            Open for work:
            <select {...register("myprofile.openforwork")}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
      </div>
      <input type="submit" value="Save" className="btn btn-primary btn-block" />
    </form>
  );
}
