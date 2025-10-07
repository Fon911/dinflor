import Feedback from "@/components/comp/feedback";
import GenLayout from "@/components/layout/Genlayout";
import React from "react";

const feedback = () => {
  return (
    <GenLayout pageName="Отзывы" backArrow>
      <Feedback />
    </GenLayout>
  );
};

export default feedback;
