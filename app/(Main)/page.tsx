"use client";
import Header from "@/components/Header";
import Hero from "@/components/Route/Hero";
import React, { useState, useEffect } from "react";

type Props = {};

const page = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <Header activeItem={0} />
      <Hero />
    </div>
  );
};

export default page;
