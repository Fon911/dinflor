import Event from "@/components/comp/event";
import GenLayout from "@/components/layout/Genlayout";
import React from "react";

const event = () => {
  return (
    <GenLayout pageName="Мои События" backArrow>
      <Event />
    </GenLayout>
  );
};

export default event;
