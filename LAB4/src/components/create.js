import React from 'react';
import { Button } from 'react-bootstrap';
// Add necessary imports

// Start of class Create (extends React.Component)
export class Create extends React.Component {
  constructor(props) {
    super(props);
    // Set the state
    this.state = { title: '', author: '', url: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changebooktitle = this.changebooktitle.bind(this);
    this.changeauthor = this.changeauthor.bind(this);
    this.changeurl = this.changeurl.bind(this);
  }

  handleSubmit(e) {
    // log the state
    console.log(this.state);

    // alert the user that is was added
    alert(this.state.title + ' was added to the database');
    alert(this.state.author + ' was added to the database');
    alert(this.state.url + ' was added to the database');
  }

 
// update the state here
  changebooktitle(e) {
    
    this.setState({ title: e.target.value });
  }

  changeauthor(e) {
   
    this.setState({ author: e.target.value });
  }

  changeurl(e) {
    
    this.setState({ url: e.target.value });
  }
// update the state here
  render() {
    return (
     
      <div className='container'>
        
        <form onSubmit={this.handleSubmit}>
          {/* add book title */}
          <p>Add Book Title:</p>
          <input type='text' value={this.state.title} onChange={this.changebooktitle}/>
          <br />
          {/* add book author */}
          <p>Add Book Author:</p>
          <input
            type='text' value={this.state.author} onChange={this.changeauthor} />
          <br />
          {/* add book url */}
          <p>Add Book URL:</p>
          <input type='text' value={this.state.url} onChange={this.changeurl}/>
          <br />
          <br />
          {/* button to submit */}
          <Button type='submit' value='Submit' >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}