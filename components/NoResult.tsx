import React from "react";


//另一种为props.text赋予类型的写法
interface IProps {
  text: string;
  icon?: any;
}

//从父组件接受reactnode渲染,类似vue的插槽
const NoResult = ({ text, icon }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <p className="text-8xl">{icon}</p> 
      <p className="text-2xl text-center">{text}</p>
    </div>
  );
};

export default NoResult;
