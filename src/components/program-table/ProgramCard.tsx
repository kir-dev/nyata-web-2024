import clsx from "clsx";
import React from "react";

type ProgramCardProps = {
  time: string;
  name: string;
  description?: string;
  color: "green" | "orange";
}

export function ProgramCard({ time, name, color, description }: ProgramCardProps) {
  return (
    <div className="font-body text-center">
      <div className="bg-gray-lighter text-xl text-white font-extrabold py-2">
        <span>{time}</span>
      </div>
      <div className={clsx("bg-white uppercase py-5 px-4", {
        "text-primary": color === "green",
        "text-secondary-dark": color === "orange",
      })}>
        <div className="font-extrabold text-xl">
          {name}
        </div>
        {description && (
          <div className="italic font-medium text-lg">
            {description}
          </div>
        )}
      </div>
    </div>
  )
}