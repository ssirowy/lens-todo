import { connect } from 'react-redux'
import { TodoList } from '../components/TodoList'
import {
  removeTodo,
  updateTodo
} from '../utils/actions'
import { Todo, Todos } from '../utils/todo_utils'

interface FilterTodoProps {
  completed: boolean
}
​
const mapStateToProps = ( state: any, props: FilterTodoProps) => ({
  todos: state.todos.filter((todo: Todo) => todo.completed === props.completed) as Todos
})
​
const mapDispatchToProps = (dispatch: any) => ({
  removeTodo: (id: number) => {
    dispatch(removeTodo(id))
  },
  updateTodo: (id: number, completed: boolean, on?: Date) => {
    dispatch(updateTodo(id, completed, on))
  },
})
​
export const FilteredTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
