import React from "react";
import classNames from "classnames";

const Button = ({ href, className, children }) => {
  return (
    <a
    href={href}
    className={
      classNames(
        "px-4 p-3 flex text-white justify-center items-center cursor-pointer rounded-[8px] bg-blue hover:bg-white hover:text-blue border border-blue",
        className
      )
    }
  >
    {children}
    </a>
  );
};

export default Button;
