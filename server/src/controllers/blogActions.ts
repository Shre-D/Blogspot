import { Request, Response } from "express";
import Blog from "../models/blog";

// helper functions
function updateContent(field: any, blog: any, updatedContent: any) {
  console.log(updatedContent);
  switch (field) {
    case "title": {
      blog!.title = updatedContent;
    }
    case "content": {
      blog!.content = updatedContent;
    }
  }
  return blog;
}

export async function addBlog(req: Request, res: Response) {
  try {
    const blog = req.body;
    const newBlog = await Blog.create(blog);
    res.status(200).json({
      message: "Created blog",
      success: true,
      payload: newBlog,
    });
  } catch (err: any) {
    console.error(err);
  }
}

export async function getAllBlogsByUser(req: Request, res: Response) {
  try {
    const blogs = await Blog.find({
      author: "Shred",
    });
    if(blogs.length!=0){
        res.status(200).json({
            message: "Blogs retrieved",
            success: true,
            payload: blogs,
          });
    }else{
        res.status(404).json({
            "message":"blogs not found for user"
        })
    }
    
  } catch (err: any) {
    console.error(err);
  }
}

export async function getBlogById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id).exec();
    if (blog) {
      res.status(200).json({
        message: "Blog retrieved",
        success: true,
        payload: blog,
      });
    } else {
      res.status(404).json({
        message: "blog not found",
      });
    }
  } catch (err: any) {
    console.error(err);
  }
}

export async function updateBlog(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { field, updatedContent } = req.body;
    let blog = await Blog.findById(id).exec();
    const fields = ["title", "content"];

    if (!fields.includes(field)) {
      res.json({
        message: "Please enter a valid field",
        success: false,
      });
    }

    blog = updateContent(field, blog, updatedContent);
    await blog!.save();

    res.status(200).json({
      message: "Blog updated!",
      success: true,
      payload: blog,
    });
  } catch (err: any) {
    console.error(err);
  }
}

export async function deleteBlog(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id).exec();
    res.status(200).json({
      message: "Blog deleted",
      success: true,
      payload: blog,
    });
  } catch (err: any) {
    console.error(err);
  }
}
