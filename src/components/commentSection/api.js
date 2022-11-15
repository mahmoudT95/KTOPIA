import axios from "axios";
import { getAuth } from "firebase/auth";
const baseURL = "http://localhost:3005/comments"

export const getComments = async () => {
  const {data}=  await axios.get(baseURL)
  return data
};

export const createComment = async (text, parentId = null, watchId) => {
  const auth = getAuth();
  const user = auth.currentUser;
  
  if (user !== null) {
    
   const uid = user.uid;
  const name = user.displayName

    const {data}=await axios.post(baseURL,{
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId:uid,
      username: name,
      createdAt: new Date().toISOString(),
      watchId:watchId,
      // [watchId]: {
      //   id: Math.random().toString(36).substr(2, 9),
      //   body: text,
      //   parentId,
      //   userId: "1",
      //   username: "Muhamed",
      //   createdAt: new Date().toISOString(),
      // },
    })
    return data
  };
  }
  
  

export const updateComment = async (text) => {
  const {data}=await axios.post(baseURL,{ text })
  console.log(data);
  return text ;

};

export const deleteComment = async (id) => {
  const {data}=await axios.delete(`${baseURL}/${id}`)
  console.log(data);
  return {};
};
