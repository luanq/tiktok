import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const normalLink =
    "flex items-center justifycenter font-semibold gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-poninter rounder";
  const userProfile = false;

  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3"
        onClick={() => setShowSideBar(!showSideBar)}
      >
        {showSideBar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSideBar && (
        <div className=" xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100  xl:border-0 p-3">
          <div className=" xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className=" text-2xl">
                  <AiFillHome />
                </p>
                <span className=" text-xl hidden xl:block">主页</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className=" text-gray-400">登录观看视频</p>
              <div className=" pr-4 ">
                <GoogleLogin
                  clientId=""
                  render={(renderProps) => (
                    <button
                    className=" bg-white text-lg text-[#F51997] border-[1px] font-semibold w-full border-[#F51997] px-6 py-3 rounded-md outline-none"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      谷歌登录
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
          )}
          <Discover/>
          <SuggestedAccounts/>
          <Footer/>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
