"use client";

import LoginForm from "@/components/Form/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/logo/logo.png"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-40 w-fit mx-auto md:mx-0"
          />
          <LoginForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-gray-700 xl:text-left">
              © 2025 Taking care of your health
            </p>
          </div>
        </div>
      </section>
      <Image
        src="/assets/hero.jpg"
        height={1000}
        width={1000}
        alt="hero"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
