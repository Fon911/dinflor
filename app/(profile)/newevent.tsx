import NewEvent from "@/components/comp/newevent";
import GenLayout from "@/components/layout/Genlayout";
import React from "react";

const newevent = () => {
  return (
    <GenLayout pageName="Новое событие" backArrow>
      <NewEvent />
    </GenLayout>
  );
};

export default newevent;
