import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
// import Sidebar from './Sidebar'
import AddTodo from '../containers/AddTodo'
import RouterSidebar from './RouterSidebar'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Button, Table } from 'reactstrap';

const App = () => (
    <div>
        <Navbar/>
        <RouterSidebar/>
    </div>
)

export default App