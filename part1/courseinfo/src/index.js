import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
const {name, parts} = course
const [course1, course2, course3] = parts

  return (
    <div>
     <Header
     name={course.name} />
     <Content 
       parts={course1.name}
       exercises={course1.exercises}
     />
     <Content 
       parts={course2.name}
       exercises={course2.exercises}
     />
     <Content 
       parts={course3.name}
       exercises={course3.exercises}
     />
    <Total 
      parts={parts[0].exercises + parts[1].exercises + parts[2].exercises}
    />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
