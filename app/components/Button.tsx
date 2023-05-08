"use client";

import clsx from "clsx";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "reset" | "submit" | undefined;
  fullWidth?: boolean;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  danger,
  disabled,
  fullWidth,
  onClick,
  secondary,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        `
    flex
    justify-center
    rounded-md
    px-3
    py-2
    text-sm
    font-semibold
    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-offset-2
    transition-all duration-100
    `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:bg-sky-600"
      )}
    >
      {children}
    </button>
  );
};
