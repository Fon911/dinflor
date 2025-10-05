import Help from "@/components/comp/help";
import GenLayout from "@/components/layout/Genlayout";
import React from "react";

const help = () => {
  return (
    <GenLayout pageName="Поддержка" backArrow>
      <Help />
    </GenLayout>
  );
};

export default help;
