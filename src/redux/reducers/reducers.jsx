import {  ADD_MATCH, UPDATE_TABLE } from "../constants/constants";
import { data } from "../../teams";

const initialState ={
    numOfGames:0,
   teams:data

}



const matchReducer = (state=initialState, action)=>{

    switch(action.type){
   
        case UPDATE_TABLE:

        const {teamId, points, result } = action.payload
            return{
                ...state,
               teams:state.teams.map(team=>{

                const lastFiveGames = [...team.lastFiveGames]

                if(lastFiveGames.length>=5){
                    lastFiveGames.shift()
                }

                lastFiveGames.push(result)
                if(team.id === teamId){
                    return{
                        ...team,
                        matches:result === "match" ? team.matches + 1 : team.matches,
                        wins:result === "win" ? team.wins + 1 : team.wins,
                        draws:result === "draw" ? team.draws + 1 : team.draws,
                        losses:result === "loss" ? team.losses + 1 : team.losses,
                        GF:result === "GF" ? team.GF + 1 : team.GF,
                        GA:result === "GA" ? team.GA + 1 : team.GA,
                        points:team.points + points,
                        lastFiveGames

                    }
                }
                return team
               })
            }
        
        default: return state
    }
}

export default matchReducer