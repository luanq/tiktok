import React, { useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

import { Video } from "../types";

//使用解构语法为props.post设置类型
const VideoCard = ({ post }: { post: Video }) => {
  const [isHover, setisHover] = useState(false);
  const [playing, setplaying] = useState(false);
  const [isVidoeMuted, setisVidoeMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const setVideoPlaying = () => {
    if (playing) {
      videoRef.current?.pause();//ts中的可选属性访问
      setplaying(false);
    } else {
      videoRef.current?.play();
      setplaying(true);
    }
  };
  const setVideoMuted=()=>{
    if(isVidoeMuted){
      videoRef.current!.muted=false//ts中的非空断言
      setisVidoeMuted(false)
    }else{
      videoRef.current!.muted=true;
      setisVidoeMuted(true);
    }
  }

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className=" md:w-16 md:h-16 w-10 h-10">
            <Link href={"/"}>
              <>
                <Image
                  width={62}
                  height={62}
                  className="rounded-full"
                  src={post.postedBy.image}
                  alt="profile"
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div className=" flex items-center gap-2 md:text-sm  font-bold text-primary">
            <Link href={"/"}>
              <p>{post.postedBy.userName}</p>
            </Link>
            <GoVerified className=" text-blue-400 text-sm" />
          </div>
        </div>
      </div>
      <div className=" lg:ml-20 flex gap-4 relative">
        <div
          onMouseEnter={() => {
            setisHover(true);
          }}
          onMouseLeave={() => {
            setisHover(false);
          }}
        >
          <Link href={`/videoDetail/${post._id}`}>
            <video
              ref={videoRef}
              src={post.video.asset.url}
              loop
              className=" lg:w[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
            ></video>
          </Link>
          {isHover && (
            <div className=" absolute bottom-6 cursor-pointer flex gap-10 left-8 w-[100px] md:w-[50px] lg:justify-between">
              {playing ? (
                <button onClick={setVideoPlaying}>
                  <BsFillPauseFill className=" text-black text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button onClick={setVideoPlaying}>
                  <BsFillPlayFill className=" text-black text-2xl lg:text-4xl" />
                </button>
              )}
              {isVidoeMuted ? (
                <button onClick={setVideoMuted}>
                  <HiVolumeOff className=" text-black text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button onClick={setVideoMuted}>
                  <HiVolumeUp className=" text-black text-2xl lg:text-4xl" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
