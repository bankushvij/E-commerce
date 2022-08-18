import axios from "axios";
import { GET_ITEMS ,GET_IMAGE} from "./items.type";

export const getItems=()=>async(dispatch)=>
{
    try{
        
        const ItemsList=await axios(
            {
                method:"GET",
                url:"https://vercel.com/bankushvij/e-commerce-store-backend/items"
            }
        )
        return dispatch({ type: GET_ITEMS, payload: ItemsList.data });
    }
    catch(error)
    {
        return dispatch({type:"ERROR",payload:error})
    }
}
export const getImage=(_id)=>async(dispatch)=>
{
    try{
        
        const ImageList=await axios(
            {
                method:"GET",
                url:`https://vercel.com/bankushvij/e-commerce-store-backend/images/${_id}`,
            }
        )
        return dispatch({type:GET_IMAGE,payload:ImageList.data});
    }
    catch(error)
    {
        return dispatch({type:"ERROR",payload:error})
    }
}