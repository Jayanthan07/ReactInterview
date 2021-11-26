import {createSlice,configureStore} from "@reduxjs/toolkit"

const neewsFeed=createSlice({
    name:"for-interview",
    initialState:{Posts:[],Comments:[],backUp:[]},
    reducers:{
        onAddPost(state,actions){
     state.Posts=actions.payload;
     state.backUp=state.Posts;
     console.log(state.Posts);
         },
        
        onAddComment(state,actions){
           state.Comments=actions.payload;
        },
        filter(state,actions){
            let allDatas=state.backUp;
          let array=allDatas.filter(res=>res.post.search(actions.payload) != -1)
        if(actions.payload){
            state.Posts=array;
        } 
        else{
            state.Posts=state.backUp;
        }
        }
    }
    
})

const Store=configureStore({
    reducer:{neewsFeed:neewsFeed.reducer}
})
export const Actions=neewsFeed.actions;
export default Store;