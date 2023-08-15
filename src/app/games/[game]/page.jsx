'use client';
import Headers from "@/components/header";
import useAxios from "@/hooks/useAxios";
import { KEY } from "@/lib/contents";

export default function Game(params){
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
    console.log(response)
    return (
        <>
        <div className="" style={backgr}>

        </div>
        </>
    )
}