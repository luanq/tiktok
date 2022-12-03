import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { googleLogout, GoogleLogin } from "@react-oauth/google";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Logo from "../utils/tiktik-logo.png";
import Discover from "./Discover";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px] ">
          <Image
            className=" cursor-pointer"
            layout="responsive"
            src={Logo}
          ></Image>
        </div>
      </Link>
      <div>
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            <Link href={"/upload"}>
              <button
                type="button"
                className=" border-2 px-2 font-semibold flex items-center"
              >
                <IoMdAdd className="text-xl" />
                <span className="hidden md:block ">上传</span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href={"/"}>
                <Image
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                  src={userProfile.image}
                  alt="profile"
                />
              </Link>
            )}
            <button
              type="button"
              className="px-2"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(res) => {
              createOrGetUser(res, addUser);
            }}
            onError={() => {
              console.log("err");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
