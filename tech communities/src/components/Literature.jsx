import React from "react";


    const Literature = () => {
        const books = [
            {   
                "title": "The Love Songs of W.E.B. Du Bois",
                "author": "Honoree Fanonne Jeffers",
                "buyLink": "https://www.sankofa.com/blank-2/the-love-songs-of-w-e-b-du-bois",
                img: "../../assets/IMG_5529.jpeg"
            },
            {
                "title": "The Fire Next Time",
                "author": "James Baldwin",
                "buyLink": "https://www.sankofa.com/blank-2/the-fire-next-time"
    
            },
            {
                "title": "Go Tell It on the Mountain",
                "author": "James Baldwin",
                "buyLink": "https//www.sankofa.com/blank-2/go-tell-it-on-the-mountain"
            },
            {
                "title": "Black Girl, Call Home",
                "author": "Jasmine Mans",
                "buyLink": "https://www.sankofa.com/blank-2/black-girl-call-home"
            },
            {
                "title": "Purple Hibiscus",
                "author": "Chimamanda Ngozi Adichie",
                "buyLink": "https://www.sankofa.com/blank-2/purple-hibiscus"
            },
            {
                "title": "Elijah of Buxton",
                "author": "Christopher Paul Curtis",
                "buyLink": "https://www.sankofa.com/blank-2/elijah-of-buxton-paperback"
            },
            {
                "title": "Such a Fun Age",
                "author": "Kiley Reid",
                "buyLink": "https://www.sankofa.com/blank-2/such-a-fun-age"
            },
            {
                "title": "One of the Good Ones",
                "author": "Maika Moulite",
                "buyLink": "https://www.sankofa.com/blank-2/one-of-the-good-ones-1"
            },
            {
                "title": "Grown",
                "author": "Tiffany D. Jackson",
                "buyLink": "https://www.sankofa.com/blank-2/grown"
            },
            {
                "title": "Monday's Not Coming",
                "author": "Tiffany D. Jackson",
                "buyLink": "https://www.sankofa.com/blank-2/monday-s-not-coming"
            },
            {
                "title": "The Hate U Give",
                "author": "Angie Thomas",
                "buyLink": "https://www.sankofa.com/blank-2/the-hate-u-give"
            },
            {
                "title": "On the Come Up",
                "author": "Angie Thomas",
                "buyLink": "https://www.sankofa.com/blank-2/on-the-come-up"
            },
            {
                "title": "Concrete Rose",
                "author": "Angie Thomas",
                "buyLink": "https://www.sankofa.com/blank-2/concrete-rose"
            }
        ];

        return (
            <div className="Literature">
                <h1>My favorite books by Black Authors.</h1>
                <div className="card-container">
                    {books.map((book, index) => (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <img src={book.img } alt={book.title} />
                                <h2>{book.title}</h2>
                                <p>{book.author}</p>
                            </div>
                            <a href={book.buyLink} target="_blank" rel="noopener noreferrer">
                                <button>Buy Now</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

export default Literature;