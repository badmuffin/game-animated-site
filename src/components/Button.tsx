import React, { ReactNode } from "react";

interface IButtonProps {
  id: string;
  title: string;
  icon?: ReactNode;
  containerClass?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { id, title, containerClass, icon } = props;

  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {icon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
