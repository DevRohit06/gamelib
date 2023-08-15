"use client";
import { useState } from "react";
import { getGames } from "../hooks/useAxios";
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards,HiMenuAlt1 } from 'react-icons/hi';

import Switcher from "./switcher";
export default function Headers() {
  const [sidebar, isSideBar] = useState(false);
  function activeSideBar(){
    isSideBar(!sidebar);
  }
  return (
    <>
      <header className="  py-2 font-bold dark:bg-gray-800 bg-white">
        <nav className="px-4 mx-auto flex justify-between items-center ">
          <div className="flex gap-2 items-center">
            <button onClick={activeSideBar} className="p-1  text-3xl text-black dark:text-white"><HiMenuAlt1/></button>
            <h1 className="text-3xl dark:text-white text-black">GameLib</h1>
          </div>
          <div>
            <input
              className="rounded-xl sm:block hidden text-xl h-8 w-96 text-black bg-transparent border-gray-400 border-2"
              type="text"
            />
          </div>
          <div>
           <Switcher/>
          </div>

        </nav>
        
      </header>

      {
        
        sidebar ? 
        <div className="absolute w-full h-full">
        <Sidebar className=" min-w-1/6 md:w-1/4 xl:w-1/6 sm:w-1/4 w-full" aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="#"
              icon={HiChartPie}
            >
              <p>
                Dashboard
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiViewBoards}
              label="Pro"
              labelColor="dark"
            >
              <p>
                Kanban
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiInbox}
              label="3"
            >
              <p>
                Inbox
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiUser}
            >
              <p>
                Users
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiShoppingBag}
            >
              <p>
                Products
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiArrowSmRight}
            >
              <p>
                Sign In
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiTable}
            >
              <p>
                Sign Up
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      </div>
      : null
      }
      
    </>
  );
}
