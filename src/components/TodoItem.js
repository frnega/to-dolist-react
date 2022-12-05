// import React from "react"

// class TodoItem extends React.Component {
//   render() {
//     return <li>{this.props.todo.title}</li>
//   }
// }

// export default TodoItem
import React from "react"
import styles from "./TodoItem.module.css"

function TodoItem(props) {

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title } = props.todo;
 
  return (
  // <li className={styles.item}>
  //   <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps(props.todo.id)}/>
  //   <button onClick={() => props.deleteTodoProps(props.todo.id)}>
  // Delete
  //   </button>
  //   <span style={props.todo.completed ? completedStyle : null}>
  //     {props.todo.title}
  //   </span>
  // </li>
  
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  
  )
  
  
}

export default TodoItem