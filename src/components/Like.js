import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../actions/post.action";
import { addUserLike } from "../actions/user.action";
import { FcDislike } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

const Like = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);

  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      id: post.id,
      liked:!post.liked,
      likes: post.liked?post.likes + 1:post.likes - 1,
    };

    const userData = {
      pseudo: user.pseudo,
      likes: post.liked?user.likes + 1:user.likes - 1,
      age: user.age,
      id: user.id,
    };

    dispatch(addPostLike(postData));
    dispatch(addUserLike(userData));
  };

  return (
    <div>{
      !post.liked?(
        <  FcLike
        onClick={() => handleLike()}
        
        className="clap"
        alt="clap"
      />
      ):( <  FcDislike
        onClick={() => handleLike()}
        
        className="clap"
        alt="clap"
      />)
      }
      {/* <FcDislike
        onClick={() => handleLike()}
        
        className="clap"
        alt="clap"
      /> */}
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
