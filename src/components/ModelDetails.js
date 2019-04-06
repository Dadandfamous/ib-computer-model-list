import * as React from 'react'
import PropTypes from 'prop-types'

ModelDetails.propTypes = {
  
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired
}

export default function ModelDetails (props) {
  
  return (
  <div>
    <ul>
      <li>Name: {props.name}</li>
      <li>Manufacturer: {props.manufacturer}</li>
      <li>Year: {props.year}</li>
      <li>Origin: {props.origin}</li>
    </ul>
  </div>
)
}


// <div>
//   <ul>
//     <li>Name: Ivel Z3</li>
//     <li>Manufacturer: Ivasim</li>
//     <li>Year: 1969</li>
//     <li>Origin: Croatia</li>
//   </ul>
// </div>

// const TodoList = ({ todos, onTodoClick }) => (
//   <ul>
//     {todos.map((todo, index) => (
//       <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
//     ))}
//   </ul>
// )


// ModelDetails.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }


// export default ModelDetails