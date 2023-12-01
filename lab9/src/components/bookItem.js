import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

export class BookItem extends React.Component {

    constructor() {
        super();
        this.DeleteBook = this.DeleteBook.bind(this); // delete button works with delete code
      }
    
      // delete method for button
      DeleteBook(e) {
        e.preventDefault();
        console.log('delete: ' + this.props.book._id);
        axios
          .delete('http://localhost:4000/api/book/' + this.props.book._id).then((err, data) => 
          {
            this.props.ReloadPage(data);
          })
        
      }
    


    render() {
        return (
            <div>
               

                <Card>
            <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
       <blockquote className="blockquote mb-0">
            <img src={this.props.book.cover}></img>
            <footer >
                {this.props.book.author}
                    </footer>
                        </blockquote>
                        <Link to={"/edit/" + this.props.book._id} className="btn btn-primary">Edit</Link>
                        <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}