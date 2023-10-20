import { Component } from 'react';
import axios from 'axios';
import { Books } from './books';
export class Read extends Component {
 // Constructor
 constructor(props) {
    // Super
    super(props);

    // Set the state
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    // Use axios to get the data from the API
    axios
      .get('https://jsonblob.com/api/jsonblob/1027219693823606784')
      .then((resp) => {
        // Update the state with the data from the API
        this.setState({ books: resp.data });
      })
      .catch((err) => {
        // Log the error
        console.log(err);
      });
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