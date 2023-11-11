import { Component } from 'react';
import { BookItem } from './bookItem';

export class Books extends Component
{
    render()
    {
        return (
            this.props.books.map(book =>
            (
                <BookItem book={book} key={book.isbn}></BookItem>
            )
            )
        );
    }
}
