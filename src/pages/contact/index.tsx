import React from "react";
import Navbar from "~/components/Navbar";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

const ContactUs = () => {
  type FormValues = {
    email: string;
    text: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const ctx = api.useContext();
  const router = useRouter();

  const onSubmit = handleSubmit(async (form_data: FormValues) => {
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve("completed");
    //   }, 3000);
    // });
    console.log(form_data);
    // await mutateAsync(enhanced_data);
    // void ctx.person.get.invalidate();
  });

  return (
    <div>
      <Navbar />
      <div className="container py-[80px]">
        <p className="mb-[20px]  font-serif text-3xl "> Contact Us</p>
        <form onSubmit={onSubmit}>
          <div className="w-100 flex max-w-[1000px] flex-col gap-6 font-sans">
            <div className="form-control ">
              <label className="label">Your email</label>
              <input
                required
                type="text"
                {...register("email", {})}
                placeholder="Type here"
                className="w-100 input input-bordered focus:border-primary focus:outline-none focus:ring-0"
              />
            </div>

            <div className="form-control">
              <label className="label">Message</label>
              <textarea
                required
                {...register("text", {})}
                rows={8}
                placeholder="Type here"
                className="textarea input-bordered focus:border-primary focus:outline-none focus:ring-0"
              />
            </div>
            {/* 
            <FormControl isRequired isInvalid={!!errors.lastname}>
              <FormLabel>Last Name</FormLabel>
              <Input
                defaultValue={data?.lastname ?? ""}
                type="text"
                placeholder="Last Name"
                {...register("lastname", {})}
              />
              {!!errors.lastname && (
                <FormErrorMessage>Last name is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.AVS}>
              <FormLabel>AVS</FormLabel>
              <Input
                type="text"
                defaultValue={data?.AVS ?? ""}
                placeholder="AVS"
                {...register("AVS", { required: true })}
              />
              {!!errors.AVS && (
                <FormErrorMessage>AVS is required.</FormErrorMessage>
              )}
            </FormControl> */}

            <button
              className="btn btn-primary mt-3 w-[300px]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
