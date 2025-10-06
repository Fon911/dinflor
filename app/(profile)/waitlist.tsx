import Waitlist from "@/components/comp/waitlist";
import GenLayout from "@/components/layout/Genlayout";
import React from "react";

const waitlist = () => {
  return (
    <GenLayout pageName="Лист ожидания" backArrow>
      <Waitlist />
    </GenLayout>
  );
};

export default waitlist;
