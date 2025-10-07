import Helpshop from "@/components/comp/helpshop";
import GenLayout from "@/components/layout/Genlayout";
import React from "react";

const chat = () => {
  return (
    <GenLayout pageName="Поддержка магазина Luna" backArrow>
      <Helpshop />
    </GenLayout>
  );
};

export default chat;
