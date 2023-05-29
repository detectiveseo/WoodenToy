import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:w-6/12 mx-auto h-[800px] overflow-scroll overflow-x-clip'>
            <div className='text-center font-bold uppercase w-full p-3 text-3xl bg-slate-400'>
                <h1>Boss</h1>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble">What Are Access Tokens and Refresh Tokens?
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">When we talk about security in web applications, access tokens and refresh tokens are two terms that come up frequently. But what exactly are they? And how do they work? In this article, we'll explore these concepts in depth and discuss where they should be stored on the client-side.</div>
            </div>

            <div className="chat chat-start">
                <div className="chat-bubble">Access Tokens ?
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">An access token is a string that identifies a user and provides access to a resource. Typically, it's issued by an authorization server after a user has successfully authenticated. The token is then sent to the client-side, where it's included in subsequent requests to the server to gain access to protected resources.</div>
            </div>

            <div className="chat chat-end">
                <div className="chat-bubble">Access tokens are typically short-lived, and their expiration time is set by the authorization server. Once the token expires, the client-side must request a new one from the server.</div>
            </div>


            <div className="chat chat-start">
                <div className="chat-bubble">What about refresh Tokens ?
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">Refresh tokens, on the other hand, are used to obtain a new access token after the current one has expired. They are typically longer-lived than access tokens and are used to authenticate the client-side rather than the user.</div>
            </div>

            <div className="chat chat-end">
                <div className="chat-bubble">When a user logs in, the server issues both an access token and a refresh token. The access token is used to authenticate the user for a set period, while the refresh token is used to obtain a new access token when the current one expires.</div>
            </div>


            <div className="chat chat-start">
                <div className="chat-bubble">Could you please give me a Ide about What about refresh Tokens ?
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">So, where should we store these tokens on the client-side? There are a few options, including:
                    <ol>
                        <li>Cookies</li>
                        <li>Local storage</li>
                        <li>Session storage</li>
                    </ol>
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">Each method has its pros and cons, and the choice will depend on the specific use case and security requirements. Generally, cookies are the most secure option as they can be configured to only be accessible over secure HTTPS connections and have built-in expiration and authentication mechanisms.</div>
            </div>


            <div className="chat chat-start">
                <div className="chat-bubble">Can you compare SQL and NOSQL databases ?
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">There is so many defferent between this. NoSQL is High Scalability, otherhand SQL is weak data consistency. NoSQL has ability to handle unstructured data but SQL limited query capabilitis. At last we can compare SQL data stay on a table type of thing further more NoSQL data stay on Object type of thing</div>
            </div>


            <div className="chat chat-start">
                <div className="chat-bubble">Okay Good, So now please tell be about Express JS.
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">Express JS is a popular web application framework for Node.js. It provides a set of features and tools for building web applications, including routing, middleware, and template rendering.</div>
            </div>


            <div className="chat chat-start">
                <div className="chat-bubble">What is Nest JS?
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">Nest JS is a progressive Node.js framework for building scalable and efficient server-side applications. It's built on top of Express and provides a set of features and tools for building enterprise-grade applications.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">Nest JS is designed to be modular and flexible, allowing developers to easily integrate with other libraries and frameworks. It also has a strong focus on testability and maintainability, making it a popular choice for large-scale projects.</div>
            </div>


            <div className="chat chat-start">
                <div className="chat-bubble">What is MongoDB Aggregate?
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">MongoDB Aggregate is a framework for performing complex data analysis and aggregation operations on MongoDB data. It provides a set of pipeline stages that allow developers to transform, filter, and group data in a variety of ways.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">Aggregate is designed to be flexible and powerful, allowing developers to perform complex data analysis without the need for external tools or libraries. It also has a rich and expressive query language, making it easy to write complex queries with minimal code.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">In conclusion, access tokens and refresh tokens are important concepts in web application security, and their storage on the client-side is an important consideration. SQL and NoSQL databases have their strengths and weaknesses, and the choice will depend on the specific use case. Express JS and Nest JS are popular web application frameworks for Node.js, and MongoDB Aggregate is a powerful tool for data analysis and aggregation.</div>
            </div>

        </div>
    );
};

export default Blogs;