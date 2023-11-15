import React from "react";
import Navbar from "~/components/Navbar";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

const AboutUs = () => {
  const ctx = api.useContext();
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className="container py-[80px]">
        <p className="mb-[20px]  font-serif text-3xl "> About Us</p>
      </div>
    </div>
  );
};

export default AboutUs;
