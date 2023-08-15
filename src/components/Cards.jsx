"use client";
import useAxios from "@/hooks/useAxios";
import Card from "./Card";

import { platforms } from "@/lib/utils";
export default function Cards() {
  const { response } = useAxios(`/games?key=${process.env.KEY}`);
  if (!response) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        {" "}
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <h1 className=" text-black dark:text-white text-center font-bold text-3xl mt-12">
        All Games
      </h1>
      <div className="justify-center pt-8 flex gap-8 flex-wrap">
        {response.results.map((items) => {
          console.log(items.parent_platforms);

          return (
            <div
              key={items.id}
              className="w-96 bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-xl w-full h-52 object-cover"
                  src={items.background_image}
                  alt=""
                />
              </a>
              <div className="p-5 flex justify-between items-end">
                <div>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {items.name}
                    </h5>
                  </a>
                  <p className="flex gap-2 pb-1">
                    {items.parent_platforms.map((item) => {
                      const name = item?.platform.slug;
                      return platforms(name);
                    })}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {items.released}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {items.metacritic}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
