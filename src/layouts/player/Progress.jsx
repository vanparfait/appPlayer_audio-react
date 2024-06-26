import React from "react";
import { useSelector } from "react-redux";

const Progress = () => {
  const progressData = useSelector((state) => state.progress);
  console.log(progressData);
  return (
    <div className="max-w-[800px] mx-auto">
      <div className="bg-slate-900 h-2 rounded cursor-pointer overflow-hidden">
        <div className="bg-indigo-400 origin-left h-full pointer-events-none"></div>
      </div>
      <div className="flex justify-between">
        <span>2:15</span>
        <span>9:15</span>
      </div>
    </div>
  );
};

export default Progress;
