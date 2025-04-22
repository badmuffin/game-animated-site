import React, { ReactNode } from "react";

interface IButtonProps {
  id: string;
  title: string;
  leftIcon: ReactNode;
  containerClass: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { id, title, containerClass, leftIcon } = props;

  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
