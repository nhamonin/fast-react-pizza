import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type?: "primary" | "secondary" | "small";
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  to,
  type = "primary",
}) => {
  const baseStyles = `inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase
  tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300
  focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300
  disabled:cursor-not-allowed disabled:bg-yellow-400 disabled:text-stone-800
  disabled:opacity-50 `;
  const styles = {
    primary: baseStyles + "px-4 py-3 md:px-6 sm:py-4",
    secondary: `inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase
    tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800
    focus:bg-stone-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-stone-300
    disabled:cursor-not-allowed disabled:bg-stone-400 disabled:text-stone-800
    disabled:opacity-50 px-4 py-2.5 md:px-6 sm:py-3.5`,
    small: baseStyles + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
