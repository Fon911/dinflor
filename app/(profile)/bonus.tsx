import Bonus from "@/components/comp/bonus";
import GenLayout from "@/components/layout/Genlayout";
import React from "react";

const bonus = () => {
  return (
    <GenLayout pageName="Бонусная программа" backArrow>
      <Bonus />
    </GenLayout>
  );
};

export default bonus;
