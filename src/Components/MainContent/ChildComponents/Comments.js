import AddComment from "./AddComment";
import css from "./Common.module.css";
import {useSelector} from "react-redux";

const Comments=(props)=>{
    const comments=useSelector(state=>state.neewsFeed.Comments);
return(<div className={css.post_container}>
    <h3 className={css.heading}>Comments</h3>
    {comments[`comments${props.index}`]  && comments[`comments${props.index}`].map((res)=><>
    <p className={css.avathar_container}><span className={css.avathar_comments}></span>{res.comment}</p>
    <hr/>
    </>
    )}
<AddComment index={props.index} />
</div>
)
}
export default Comments;