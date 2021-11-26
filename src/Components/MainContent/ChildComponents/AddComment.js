import css from "./Common.module.css";
import React,{useRef} from "react";
import {Actions} from "../../Store/Store";
import {useDispatch,useSelector} from "react-redux";

const AddComment=({index})=>{
    const commentTextarea=useRef(null);
    const dispatch=useDispatch();
    const Comments=useSelector(state=>state.neewsFeed.Comments);
    const onAddComment=()=>{
        let holdData={comment:commentTextarea.current.value};
        let finalData;
       if(!Comments[`comments${index}`]){
         finalData={[`comments${index}`]:[holdData]};
       }
       else{
           finalData={...Comments}
           finalData[`comments${index}`]=[...finalData[`comments${index}`],holdData];
       }
        let data=JSON.stringify(finalData);
         fetch("https://jsonplaceholder.typicode.com/comments",{ headers: {
           'Content-Type': 'application/json'
         },method:"POST",body:data})
         .then(res=>res.json())
         .then(res=>{dispatch(Actions.onAddComment(res));commentTextarea.current.value="";});


    }
    return(
        <>
    <div className={css.add_post}>
    <textarea ref={commentTextarea}/>
    <button onClick={onAddComment}>Add Comment</button>
    
    </div>
    <hr/>
    </>
    );
    
    }
    export default AddComment;