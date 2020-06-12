import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from "./components/Statistics"
import Button from "./components/Button"


const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState([])
  const [allGoodClicks, setAllGoodClicks] = useState([])

  const goodClick = () => {
    setAllClicks(allClicks.concat("2"));
    setAllGoodClicks(allGoodClicks.concat("2"))
    setGood(good+1);
      }
      const neutralClick = () => {
        setAllClicks(allClicks.concat("1"));
        setNeutral(neutral+1);
      }
      const badClick = () => {
        setAllClicks(allClicks.concat("0"));
        setBad(bad+1);
      }

      const arr = [...allClicks];
      const sum = arr.reduce((totalNumber,number)=>totalNumber+parseInt(number[0]), 0)
      const average = sum/arr.length
      
      const totalClicks = arr.length
      const goodClicksPer = Math.floor((allGoodClicks.length/totalClicks)*100)+"%"
      

  return (
    <div>
     <h1>Give feedback</h1>
     <Button clicked={goodClick} name="Good" />
     <Button clicked={neutralClick} name="Neutral" />
     <Button clicked={badClick} name="Bad" />
       <h1>Statistics</h1>
      {allClicks.length === 0 ? "No feedback given" : <div>
      <table>
      
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="total" value={totalClicks} />
      <Statistics text="average" value={average} />
      <Statistics text="positive" value={goodClicksPer} />
      </table></div> }
       
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
