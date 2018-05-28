import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Button, Table } from 'reactstrap';

const App = () => (
    <div>
        <Navbar/>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
        <Sidebar/>
        <Button color="danger">Danger!</Button>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App