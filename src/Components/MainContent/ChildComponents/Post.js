import Comments from "./Comments";
import css from "./Common.module.css";
import {useSelector} from "react-redux";
const Posts=()=>{
    const Post=useSelector(state=>state.neewsFeed.Posts)
    return(
        <>
        {Post.length != 0 &&Post.map((res,index)=>
        <>
        <div className={css.post_container}>
        <p className={css.avathar_container}><span className={css.avathar}></span>{res.post}</p>
    </div>
    <Comments index={index}/>

    </>)}
    {Post.length == 0 && <p style={{textAlign:"center"}}>No Post Found or Add New post</p>}


</>

    );
    
    }
    export default Posts;