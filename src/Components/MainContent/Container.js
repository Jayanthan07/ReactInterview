import AddPost from "./ChildComponents/AddPost";
import Comments from "./ChildComponents/Comments";
import Posts from "./ChildComponents/Post";
import css from "./ChildComponents/Common.module.css";
const Container=()=>{
return(
    <div className={css.container}>
        <AddPost />
        <Posts />
    </div>
);

}

export default Container;