import React, { useEffect, useState } from "react";
import { Card } from "../../components/blog/Card";
import { blog } from "../../assets/data/data";
import { Category } from "../../components/category/Category";
import { Home } from "../home/Home";

export const Blog = () => {
  console.log(blog[0]);
  return (
    <>
      <Home></Home>
    </>
  );
};
