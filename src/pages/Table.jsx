import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateTable } from '../redux/actions/actions'


const Table = () => {

 
    const teams = useSelector(state=>state.teams)

    const dispatch = useDispatch()



const handleTableUpdate = (teamId, points, result, GF, GA)=>dispatch(updateTable(teamId, points, result, GF, GA))




  return (
    <>
         <h1>MOCK KENYA PREMIERE LEAGUE TABLE UPDATER USING RACT AND REDUX</h1>
    <div className='container'>

   
        <table className='striped-table'>
            <thead>
                <tr>
                    <th colSpan={6}>Club</th>
                    <th colSpan={2}>MP</th>
                    <th colSpan={2}>W</th>
                    <th colSpan={2}>D</th>
                    <th colSpan={2}>L</th>
                    <th colSpan={2}>GF</th>
                    <th colSpan={2}>GA</th>
                    <th colSpan={2}>GD</th>
                    <th colSpan={2}>Pts</th>
                    <th colSpan={4}>Last 5</th>
                    <th colSpan={6} id='actions'>Actions</th>
                </tr>
            </thead>
            <tbody>
                
            {teams?.map(team=>(
          

            

                <tr key={team.id}>
                    <td colSpan={6} >{team.name}</td>
                    <td colSpan={2}>{team.matches}</td>
                    <td colSpan={2}>{team.wins}</td>
                    <td colSpan={2}>{team.draws}</td>
                    <td colSpan={2}>{team.losses}</td>
                    <td colSpan={2}>{team.GF}</td>
                    <td colSpan={2}>{team.GA}</td>
                    <td colSpan={2}>{team.GF - team.GA}</td>
                    <td colSpan={2}>{team.points}</td>
                    <td colSpan={4}>{team.lastFiveGames.map((result, index)=>(
                        <span key={index}>{result == 'win' ? 'W': result == 'draw' ? 'D' : 'L'}</span>
                    ))}</td>
                    <td> <button onClick={()=>handleTableUpdate(team.id, 0, 'match') }>+Add Match</button></td>
                    <td> <button onClick={()=>handleTableUpdate(team.id, 3, 'win') }>+Add Win</button></td>
                    <td> <button onClick={()=>handleTableUpdate(team.id, 1, 'draw')}>+Add Draw</button></td>
                    <td> <button onClick={()=>handleTableUpdate(team.id, 0, 'loss')}>+Add Loss</button></td>
                    <td> <button onClick={()=>handleTableUpdate(team.id, 0, 'GF')}>+Add GF</button></td>
                    <td><button onClick={()=>handleTableUpdate(team.id, 0, 'GA')}>+Add GA</button></td>
                </tr>
                ))}
                
            </tbody>
        </table>
      
    </div>
    </>
  )
}

export default Table
