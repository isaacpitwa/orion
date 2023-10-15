import {Post} from '../types/post';

/**
 * @description Add Post
 * @param {Object} postData Post informatiom to add
 * @returns {Promise}
 */
export const addPost = async (post: Post): Promise<any> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return {success: true, data: {}};
  } catch (error) {
    console.log('Error in addPost', post);
    return {success: false, data: error};
  }
};
