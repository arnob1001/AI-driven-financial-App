

"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
      <h1 className="text-5xl md:text-7xl lg:text-7xl pb-6 bg-gradient-to-r from-[#43cea2] to-[#185a9d] bg-clip-text text-transparent tracking-tight font-extrabold drop-shadow-lg text-center animate-text">
  Take Control of Your Finances <br /> with Intelligent Insights
</h1>

<p className="text-1.3xl text-gray-700 mb-10 max-w-3xl mx-auto">
  Revolutionize the way you manage money with AI-driven tools for better financial decisions, budgeting, and goal tracking.
</p>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white border-none"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

