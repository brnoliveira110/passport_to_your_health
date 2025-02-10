import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils/tailwindMerge/tailwindMerge";

interface ButttonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButttonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={cn("w-full", className)}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
