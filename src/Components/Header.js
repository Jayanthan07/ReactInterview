import css from "./Header.module.css";
import React,{useRef} from "react";
import {useDispatch} from "react-redux";
import {Actions} from "./Store/Store";
const Header=()=>{
    const Search=useRef(null);
    const dispatch=useDispatch();
   const onHandleChange=()=>{
       dispatch(Actions.filter(Search.current.value))
   }
return (
    <header className={css.header_container}>
        <div className={css.content}>
            Jayanthan
        </div>
        <div>
            <input type="search" ref={Search} placeholder="search with post " onChange={onHandleChange}/>
        </div>
    </header>
);

}
export default Header;