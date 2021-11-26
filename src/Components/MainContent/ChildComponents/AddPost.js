import css from "./Common.module.css";
import React,{useRef} from "react";
import {Actions} from "../../Store/Store";
import {useDispatch,useSelector} from "react-redux";

const AddPost=()=>{
    const postTextarea=useRef(null);
    const dispatch=useDispatch();
    const Post=useSelector(state=>state.neewsFeed.Posts);
    const onAddPost=()=>{
        let holdData={post:postTextarea.current.value};
       
        let finalData=[...Post,holdData];
        let data=JSON.stringify({posts:finalData});
         fetch("https://jsonplaceholder.typicode.com/posts",{ headers: {
           'Content-Type': 'application/json'
         },method:"POST",body:data})
         .then(res=>res.json())
         .then(res=>{dispatch(Actions.onAddPost(res.posts));postTextarea.current.value="";});


    }


    return(
        <>
    <div className={css.add_post}>
    <textarea  ref={postTextarea}/>
    <button onClick={onAddPost}>Add Post</button>
    
    </div>
    <hr/>
    </>
    );
    
    }
    export default AddPost;