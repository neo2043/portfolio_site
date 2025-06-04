import Navbar from "@/components/Navbar";
import SearchAndBlogs from "@/components/SearchAndBlogs";
import { roboto } from "@/lib/font";
import getBlogs from "@/server/getBlogs";

export default async function Blog() {
  const { blogs, blogFrontMatter } = await getBlogs();

  if (blogs.length===0) {
    return (
      <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 min-h-screen h-full py-16 md:gap-8 gap-4 md-4">
        <Navbar />
        <h1 
          className={
            roboto.className +
            " text-blue-300 md:text-6xl animate-fadeLeft300 text-lg"
          }
        >
          Such an Empty.<br/>
          Wait for more to be Posted.
        </h1>
      </main>
    )
  }

  return (
    <main className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto px-4 min-h-screen h-full py-16 md:gap-8 gap-4 md-4">
      <Navbar />
      <h1
        className={
          roboto.className +
          " text-blue-300 md:text-base text-sm animate-fadeLeft300"
        }
      >
        Sharing ideas and insights
      </h1>
      <h1 className="md:text-4xl text-2xl font-semibold animate-fadeLeft500">
        Blogs
      </h1>
      {blogs && blogFrontMatter && (
        <SearchAndBlogs blogs={blogs} blogFrontMatter={blogFrontMatter} />
      )}
    </main>
  );
}
