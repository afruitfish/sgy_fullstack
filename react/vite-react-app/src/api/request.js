import { axiosInstance } from './config'

// 所有的请求都在这里统一管理
// axios
// url 改了
export const getBannerRequest = () => {
  return axiosInstance.get('/banner')
}

export const getRecommendListQuest = () => {
  return axiosInstance.get('/personalized')             
}

// export const getSingerListRequest = ()=>{
//     return axiosInstance.get('/personalized')
// }