import Notice from "@/components/comp/notice";
import GenLayout from "@/components/layout/Genlayout";
import React from "react";

const notice = () => {
  return (
    <GenLayout pageName="Уведомления" backArrow>
      <Notice />
    </GenLayout>
  );
};

export default notice;
