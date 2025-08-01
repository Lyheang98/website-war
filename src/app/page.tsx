import React from "react";
import BlogCard from "@/component/blog/BlogCard";
import HeroComponent from "@/component/herosection/HeroComponent";
import QuoteComponent from "@/component/quote/QuoteComponent";

export default function HeroSection() {
  return (
    <div>
      <HeroComponent />
      <QuoteComponent />
      <BlogCard />
    </div>
  );
}
