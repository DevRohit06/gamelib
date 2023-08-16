"use client";
import Headers from "@/components/header";
import useAxios from "@/hooks/useAxios";
import { KEY } from "@/lib/contents";

export default function Game(params) {
  const { response } = useAxios(`/games/${params.params.game}?key=${KEY}`)
  if(!response){
      return (
          <div className="w-full h-screen flex items-center justify-center">
      {" "}
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
      )
  }
  console.log(response.background_image)
  const image = "https://images6.alphacoders.com/421/421645.jpg";
  return (
    <>
      <Headers />
      <div className="">
        <div
          style={{ backgroundImage: `url(${response.background_image})` }}
          className={` h-screen w-full bg-gradient-to-b from-transparent to-black  bg-no-repeat bg-cover  rounded-lg`}
        ></div>
      </div>
    </>
  );
}
