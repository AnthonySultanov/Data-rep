import { Component } from 'react';
import { Footer } from './footer'; // Import the Footer component from the 'footer' file
import { Header } from './header'; // Import the Header component from the 'header' file

// Define a class named Content that extends the Component class
export class Content extends Component
{
    render()
    {
        return (
            <div >
                <Header /> // Render the Header component
                <h1>Hello World!</h1> // Display the "Hello World!" heading
                <h2>It is {new Date().toLocaleTimeString()}.</h2> // Display the current time
                <Footer /> // Render the Footer component
            </div>
        );
    }
}
