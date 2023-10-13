// Import the Component class from the 'react' module
import { Component } from 'react';

// Define a new React component called 'Header'
export class Header extends Component {
    // The 'render' method defines what the component should display
    render() {
        return (
            <div>
                {/* This is the header element */}
                <h1>My Header in another component</h1>
            </div>
        );
    }
}
