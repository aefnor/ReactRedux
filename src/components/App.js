import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Button } from 'reactstrap';

const App = () => (
    <div>
        <Button color="danger">Danger!</Button>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App