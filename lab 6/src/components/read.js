import axios from 'axios';
import { Component } from 'react';
import { Books } from './books';

export class Read extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            books: [
            ]
        }
    }

    componentDidMount()
    {
        // Async get request
        axios.get("http://localhost:4000/api/books/").then(
            (resp) =>
            {
                // Update the state
                console.log(resp.data);
                this.setState({ books: resp.data.books });
            }
        )
    }

    render()
    {
        return (
            <div >
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}

export default Read;
