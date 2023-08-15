import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BsPlaystation, BsWindows, BsXbox, BsNintendoSwitch, BsApple, BsAndroid } from "react-icons/bs";
import {DiLinux} from "react-icons/di";
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function platforms(name) {
  if (name === "pc") {
    return <BsWindows />;
  }
  if (name === "playstation") {
    return <BsPlaystation />;
  }
  if (name === "xbox") {
    return <BsXbox />;
  }
  if(name === "nintendo"){
    return<BsNintendoSwitch/>;
  }
  if(name === "mac"){
    return <BsApple/>
  }
  if(name === "linux") {
    return  <DiLinux />
  }
  if(name === "android"){
    return   <BsAndroid/>
  }
}
