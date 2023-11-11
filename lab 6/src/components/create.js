import axios from 'axios';
import { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Create extends Component
{
    constructor(props)
    {
        super(props);

        // Set default state
        this.state = { title: '', year: '', thumbnailUrl: '' };

        // Bind events
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeYear = this.changeYear.bind(this);
        this.changeUrl = this.changeUrl.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();

        // Send data to the server
        axios.post("http://localhost:4000/api/books/", this.state)
    }

    changeTitle(event)
    {
        // Update the state from the
        this.setState({ title: event.target.value })
    }

    changeYear(event)
    {
        // Update the state from the
        this.setState({ year: event.target.value })
    }

    changeUrl(event)
    {
        // Update the state from the
        this.setState({ thumbnailUrl: event.target.value })
    }

    // render html
    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Add Book Title:</p>
                <input type="text" value={this.state.title} onChange={this.changeTitle} />

                <p>Add Book Year:</p>
                <input type="text" value={this.state.year} onChange={this.changeYear} />

                <p>Add Book Page Url:</p>
                <input type="text" value={this.state.thumbnailUrl} onChange={this.changeUrl} />
                <br />
                <br />
                <Button type="submit" value="Submit" >Submit</Button>
            </form>
        );
    }
}

export default Create;
