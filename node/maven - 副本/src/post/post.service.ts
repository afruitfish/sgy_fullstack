import { request } from 'express'
import { createPostfix } from 'typescript'
import { postModel } from './post.model'
/**
 * 新增文章
 */
export const createPost = (post: postModel) => {
    const statement = `
    INSERT INTO post
    SET ?
    `
}
// export default createPost