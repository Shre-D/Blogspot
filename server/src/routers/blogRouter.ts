import express from 'express'
import { Request,Response } from 'express'
import { addBlog } from '../controllers/blogActions'
import { getAllBlogsByUser } from '../controllers/blogActions'
import { getBlogById } from '../controllers/blogActions'
import { updateBlog } from '../controllers/blogActions'
import { deleteBlog } from '../controllers/blogActions'

const blogRouter = express.Router()

blogRouter.get('/getAll',getAllBlogsByUser)

blogRouter.get('/get/:id', getBlogById)

blogRouter.post('/create',addBlog);

blogRouter.put('/update/:id', updateBlog)

blogRouter.delete('/delete/:id', deleteBlog )

export default blogRouter;