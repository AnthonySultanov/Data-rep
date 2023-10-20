import { Component } from 'react';
import { Footer } from './footer';
import { Header } from './header';
export class Content extends Component {
  render() {
    return (
      <div >
          <Header />
          <h1>HELLO WORLDS!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
          <Footer />
         
       
      </div>
    );
  }
}