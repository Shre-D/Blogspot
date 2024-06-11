import { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState<any>();

  useEffect(() => {
    async function getAllBlogsFromUser() {
      const blogs = await (
        await fetch("http://localhost:3000/blog/getAll")
      ).json();
      setBlogs(blogs.payload);
    }
    getAllBlogsFromUser();
    console.log(blogs);
  }, []);

  return (
    <div className="">
      <section className="text-center text-3xl mt-10">See your Blogs</section>
      <div className="mx-10 my-6">
        {blogs?.map((blog: any) => (
          <div className="w-full border-solid border-2 p-2 px-6 rounded-xl border-black">
            <h1 className="text-2xl">{blog.title}</h1>
            <p className="text-sm">{blog.author}</p>
            <p className="my-4">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
