import Order from "@/components/comp/order";
import GenLayout from "@/components/layout/Genlayout";
import React from "react";

const order = () => {
  return (
    <GenLayout pageName="Мои Заказы" backArrow>
      <Order />
    </GenLayout>
  );
};

export default order;
