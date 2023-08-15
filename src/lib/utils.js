import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BsPlaystation, BsWindows, BsXbox, BsNintendoSwitch, BsApple, BsAndroid } from "react-icons/bs";
import {DiLinux} from "react-icons/di";
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function platforms(name, key) {
  if (name === "pc") {
    return <BsWindows key={key} />;
  }
  if (name === "playstation") {
    return <BsPlaystation key={key} />;
  }
  if (name === "xbox") {
    return <BsXbox key={key} />;
  }
  if(name === "nintendo"){
    return<BsNintendoSwitch key={key}/>;
  }
  if(name === "mac"){
    return <BsApple key={key}/>
  }
  if(name === "linux") {
    return  <DiLinux key={key} />
  }
  if(name === "android"){
    return   <BsAndroid key={key}/>
  }
}
