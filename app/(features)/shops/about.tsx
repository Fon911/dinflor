import About from "@/components/comp/about";
import GenLayout from "@/components/layout/Genlayout";
import React from "react";

const about = () => {
  return (
    <GenLayout pageName="О компании" backArrow>
      <About />
    </GenLayout>
  );
};

export default about;
