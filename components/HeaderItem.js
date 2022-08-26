import React from "react";

const HeaderItem = ({ title, Icon }) => {
  return (
    <div>
      <div className="flex items-center justify-center cursor-pointer flex-col group w-12 sm:w-20 ">
        <Icon className="h-8 text-slate-200 mb-1 group-hover:text-green-400 group-hover:animate-bounce" />
        <p className="text-slate-200 tracking-widest opacity-0 group-hover:opacity-100 group-hover:text-green-400">
          {title}
        </p>
      </div>
    </div>
  );
};

export default HeaderItem;
