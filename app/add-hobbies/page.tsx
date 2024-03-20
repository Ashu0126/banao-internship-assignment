import AddHobby from "@/src/components/AddHobby";
import React from "react";
import pageData from "../../src/data/add.json";

const Page = () => {
  return <AddHobby pageData={pageData} />;
};

export default Page;
