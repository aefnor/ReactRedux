import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './style.css';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const Home = () => (

    <div>
        <text className="headline">Algorithm of Success</text>
        <LiveProvider code="While(!Success)">
            <LiveEditor />
            {/* <LiveError /> */}
            {/* <LivePreview /> */}
        </LiveProvider>
        {/* <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" value="Hi? hi" name="text" id="exampleText" />
        </FormGroup>
        <form>
            <label>
                Name:
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form> */}

        
    </div>
)
export default Home