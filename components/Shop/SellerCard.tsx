import { Avatar, Card } from "@nextui-org/react";
import React from "react";
import TopSeller1 from "@/public/Assets/a-one.webp";
import { styles } from "@/utils/styles";
import Ratings from "@/utils/Ratings";

type Props = {};

const SellerCard = (props: Props) => {
  return (
    <Card className="py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22]">
      <Avatar src={TopSeller1.src} className="w-[80px] h-[80px]" />
      <span className={`${styles.label} py-2 text-xl`}>@Hermione Granger</span>
      <div className="flex item-center">
        <span className={`${styles.label} pr-2`}>4.5/5</span>
        <Ratings rating={4.5} />
      </div>
      <span className={`${styles.label} py-2`}>Total sales: 212</span>
    </Card>
  );
};

export default SellerCard;
