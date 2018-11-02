import * as React from 'react'
import { connect } from 'react-redux'
import { FilteredTodos } from './FilteredTodos'
​
const mapStateToProps = ( state: any ) => ({
  show: state.showCompleted
})
​
interface ToggleProps {
  show: boolean,
}

const CompletedTodoContainer = (props: ToggleProps) => (
  props.show ? <FilteredTodos completed={true} /> : <div />
)
​
export const CompletedTodos = connect(mapStateToProps)(CompletedTodoContainer)
