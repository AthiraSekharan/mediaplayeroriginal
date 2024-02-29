import { commonAPI } from './commonAPI'
import { SERVER_URL } from './server_url'

//upload video -store in http://localhost:3000/videos

export const uploadVideoAPI =async(video)=>{
    //send request to add compomnent
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
}
//get video called by view component
export const getAllVideosAPI =async()=>{
    
    return await commonAPI("GET",`${SERVER_URL}/videos`,"")

}

//store watch history by videocard to localhost:3000/history
export const saveHistoryAPI = async(videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//get history to watch componenetto localhost:3000/history
export const getHistoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//remove history to watchhistory
export const removeHistoryAPI = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}
//removw video by videocard
export const removeVideoAPI = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}


//save Category to category component
export const addCategoryAPI = async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)

}

//get Category to category component
export const getCategoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")

}

//remove category api
export const removeCategoryAPI = async(categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})

}


//get single video api
export const getVideoAPI = async(videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")

}

//update category API
export const UpdateCategoryAPI = async(categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)

}
//get single category api
export const getSingleCategoryAPI = async(categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")

}