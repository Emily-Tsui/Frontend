import React from 'react';

function HomePage() {
    
    return(
        <>
        <h2>Web Dev Portfolio</h2>

        <article>

            <p>
                My career goal is to become a full-stack web developer. 
                After taking web development, being able to express, create, and understand the importance
                of accessibility has related to my first career. Especially being aware of accessibility to provide
                the necessary ways to share information online. In addition, learning to connect the frontend and the backend
                for a webpage is not only challenging, but also introduced another world to me positively.  
            </p>
            
            <p>
                <i>Technologies used in this website are</i>:
                <dl>
                    <strong>MongoDB</strong>
                        <ul>
                            <li>
                                A database management system (DBMS) is a software to manage databases for web applications.
                                Databases can store large volumes of data that is created, read/retrieved, updated, and deleted.
                                There are two types of DBMS's: relational database and document-oriented DBMS. The two types
                                differ in how they store data, such as in tables or as JSON or XML formats.
                            </li>
                        </ul>
                    <strong>Express.js</strong>
                        <ul>
                            <li>
                                Implementing an express app provides an application programming interface (API) to give tasks
                                for web applications. These tasks are get, post, and delete data. In addition, ports and routes
                                are defined for data created, such as in a form.
                            </li>
                        </ul>
                    <strong>React</strong>
                        <ul>
                            <li> 
                                A framework written in JavaScript for frontend applications with additional React syntax. React does not directly modify
                                the DOM tree. It creates a component tree and connects to the real DOM tree for the browser. This helps
                                eliminate the amount of rendering a browser does. React helps build simple page applications (SPA) to perform CRUD operations
                                with the client-side, instead of relying on the server application.
                            </li>
                        </ul>
                    <strong>Node.js</strong>
                        <ul>
                            <li>
                                An open-source application that is written in JavaScript provides a library of JavaScript
                                modules to develop server-side and network applications. Has asynchronous and event driven functions
                                to create an efficient call and response for an API to return data to the user.
                            </li>
                        </ul>
                </dl>
            </p>

        </article>
        </>
    );
}

export default HomePage;