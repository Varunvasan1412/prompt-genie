import { Avatar, Button, Card, Divider } from "@nextui-org/react";
import React from "react";
import Fourteen from "@/public/Assets/fourteen.png";
import Chat from "@/public/Assets/chat.png";
import { styles } from "@/utils/styles";
import Image from "next/image";
import Avatar1 from "@/public/Assets/avatar1.jpg";
import Ratings from "@/utils/Ratings";
import Link from "next/link";

type Props = {};

const PromptCard = (props: Props) => {
  return (
    <Card
      radius="lg"
      className="w-full md:w-[31%] 2xl:w-[23%] p-4 bg-[#130f23] m-3"
    >
      <div className="relative">
        <Image
          src={Fourteen.src}
          alt=""
          className="w-full object-cover"
          width={300}
          height={300}
        />

        <div className="absolute bottom-2 left-2">
          <div className="w-max bg-black hover:bg-[#16252] duration-300 transition-opacity hover:text-black text-white p-[10px] items-center flex rounded-xl">
            <Image src={Chat.src} width={25} height={25} alt="" />
            <span className={`${styles.label} pl-2 text-white`}>Chatgpt</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between py-2">
        <h3 className={`${styles.label} text-[18px] text-white`}>
          Animal Prompts
        </h3>
        <p className={`${styles.paragraph}`}>$25.00</p>
      </div>
      <Divider className="bg-[#ffffff18] my-3" />
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <Avatar src={Avatar1.src} />
          <span className={`${styles.label} pl-3`}>@Devil</span>
        </div>
        <Ratings rating={4.5} />
      </div>
      <br />
      <Link href="/shop/124" className="w-full">
        <Button
          className={`my-3 w-full text-white bg-transparent border border-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity`}
        >
          Get Prompts
        </Button>
      </Link>
    </Card>
  );
};

export default PromptCard;
