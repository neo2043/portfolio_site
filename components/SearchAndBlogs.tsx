"use client";

import { roboto } from "@/lib/font";
import Link from "next/link";
import { useState } from "react";

export default function SearchAndBlogs({
  blogs,
  blogFrontMatter,
}: {
  blogs: string[];
  blogFrontMatter: Record<string, string>[];
}) {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <input
        className="md:text-base text-sm w-full px-4 py-2 rounded bg-slate-900 animate-fadeLeft700 focus:outline-slate-700 focus:outline focus:outline-2"
        placeholder={
          "Search through " +
          blogFrontMatter.length +
          " blog" +
          (blogFrontMatter.length > 1 ? "s" : "")
        }
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="flex flex-col items-center gap-4 flex-1 animate-fadeLeft700">
        {blogFrontMatter
          .filter((blog) =>
            blog.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((blog, i, a) => {
            return (
              <li
                key={i}
                className={
                  "flex flex-col items-start gap-2 pb-4 w-full " +
                  (i >= 0 && i < blogFrontMatter.length - 1 && a[i + 1]
                    ? " border-b border-slate-700"
                    : "")
                }
              >
                <div className="flex md:flex-row flex-col md:items-center items-start gap-2 w-full justify-between">
                  <Link
                    href={"/blog/" + blogs[i]}
                    className="hover:text-blue-300 md:text-lg text-base transition-colors"
                  >
                    {blog.title}
                  </Link>
                  <p
                    className={
                      roboto.className +
                      " text-blue-200/85 md:text-base text-sm"
                    }
                  >
                    {blog.date}
                  </p>
                </div>
                <p className="text-blue-200/85 md:text-base text-sm">
                  {blog.summary}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
