import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/constants";

const List = ({items,first}:{items:string[],first?:boolean}) => {
  return (
    //如果为第一个元素,添加mt-5
    <div className={`flex flex-wrap gap-2 ${first&& 'mt-5'}`}>
      {items.map((item) => (
        <p
          key={item}
          className="text-gray-400 text-sm hover:underline cursor-pointer"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1} first/>
      <List items={footerList2} />
      <List items={footerList3}/>
    </div>
  );
};

export default Footer;
