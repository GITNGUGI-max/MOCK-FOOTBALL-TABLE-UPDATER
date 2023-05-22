import {  UPDATE_TABLE } from "../constants/constants";



export const updateTable = (teamId, points, result)=>{
    return{
        type:UPDATE_TABLE,
        payload: {teamId, points, result}
    }
}


