import "./comments.scss";
import Comments from "./comments/Comments";
import { getAuth } from "firebase/auth";
import { useParams } from "react-router-dom";
const CommentSection = ()=>{
  const auth = getAuth();
  const user = auth.currentUser;
  const params = useParams();
  if (user !== null) {
   const uid = user.uid;
   
   return(
    <Comments
    commentsUrl={params.id}
    currentUserId={uid}
    />
    )
  }
  
  
}
export default CommentSection;