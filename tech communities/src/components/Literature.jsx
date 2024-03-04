import React from "react";

    const Literature = () => {
        const books = [
            {
                "title": "The Love Songs of W.E.B. Du Bois",
                "author": "Honoree Fanonne Jeffers"
            },
            {
                "title": "The Fire Next Time",
                "author": "James Baldwin"
            },
            {
                "title": "Go Tell It on the Mountain",
                "author": "James Baldwin"
            },
            {
                "title": "Black Girl, Call Home",
                "author": "Jasmine Mans"
            },
            {
                "title": "Purple Hibiscus",
                "author": "Chimamanda Ngozi Adichie"
            },
            {
                "title": "Elijah of Buxton",
                "author": "Christopher Paul Curtis"
            },
            {
                "title": "Such a Fun Age",
                "author": "Kiley Reid"
            },
            {
                "title": "One of the Good Ones",
                "author": "Maika Moulite"
            },
            {
                "title": "Grown",
                "author": "Tiffany D. Jackson"
            },
            {
                "title": "Monday's Not Coming",
                "author": "Tiffany D. Jackson"
            },
            {
                "title": "The Hate U Give",
                "author": "Angie Thomas"
            },
            {
                "title": "On the Come Up",
                "author": "Angie Thomas"
            },
            {
                "title": "Concrete Rose",
                "author": "Angie Thomas"
            }
        ];

        return (
            <div className="Literature">
                <h1>My favorite books by Black Authors.</h1>
                <div className="card-container">
                    {books.map((book, index) => (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <h2>{book.title}</h2>
                                <p>{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

export default Literature;