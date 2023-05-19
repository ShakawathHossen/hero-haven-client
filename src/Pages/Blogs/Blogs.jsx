import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blogs = () => {
    return (

        <div className='container mx-auto md:my-16'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hero Haven-Blogs</title>
            </Helmet>
            <div>
                <div className='text-end'>
                    <Pdf targetRef={ref} filename="blogs.pdf">
                        {({ toPdf }) => <button className='custom-button' onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                </div>
                <div ref={ref}>
                    <div>
                        <div className='md:py-6'>
                            <h1 className='text-[#283149] text-3xl'>
                                What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                            <p className='md:py-4'>Access Token:
                                An access token is a credential that is issued to a client (such as a user or an application) by an authentication server after a successful authentication process. It is typically a string of characters that represents the authorization granted to the client to access specific resources or perform certain actions. The access token is included in the headers or the body of API requests to authenticate and authorize the client to access protected resources on the server. <br />Refresh Token:
                                A refresh token is a credential that is also issued to the client by the authentication server, along with the access token. Its purpose is to obtain a new access token when the current access token expires. The refresh token is usually long-lived and has a longer expiration time compared to the access token. It is securely stored on the client-side and is sent to the authentication server to request a new access token when needed. <br /> As for where to store these tokens on the client-side, best practices recommend storing the access token securely, usually in memory or in a secure HTTP-only cookie. Storing it in memory helps minimize the risk of exposing it to potential security vulnerabilities. On the other hand, the refresh token should be stored in a more persistent and secure manner, such as in an HTTP-only cookie or local storage, to ensure it is not easily accessible by malicious actors. Using an HTTP-only cookie helps protect against cross-site scripting (XSS) attacks.  </p>
                        </div>
                        <div className='md:py-3'>
                            <h1 className='text-[#283149] text-3xl'>

                                Compare SQL and NoSQL databases?</h1>
                            <p className='md:py-4'>QL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems (DBMS) that differ in their data models, querying methods, and scalability. Here's a brief comparison of SQL and NoSQL databases: <br />

                                <span className='font-bold'>Data Model:</span>
                                SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships between tables are defined using foreign keys. NoSQL databases, on the other hand, use a flexible and schema-less data model. They can be document-based (e.g., MongoDB), key-value pairs (e.g., Redis), columnar (e.g., Cassandra), or graph-based (e.g., Neo4j). <br />

                                <span className='font-bold'>Querying:</span>
                                SQL databases use SQL as the query language to perform structured queries using statements like SELECT, INSERT, UPDATE, and DELETE. The query language provides powerful operations for complex joins, aggregations, and filtering. NoSQL databases have their own querying mechanisms specific to their data models. For example, document-based NoSQL databases use JSON-like queries, and key-value stores use simple get/put operations. NoSQL databases may have limited support for complex queries compared to SQL databases.
                                <br />
                                <span className='font-bold'>Scalability:</span>
                                SQL databases are traditionally designed for vertical scaling, meaning they can handle increasing loads by adding more powerful hardware resources to a single server. NoSQL databases are designed for horizontal scaling, allowing data to be distributed across multiple servers. They offer built-in mechanisms for sharding, replication, and automatic partitioning, making them more suitable for handling large-scale and high-traffic applications.
                                <br />
                                <span className='font-bold'>Schema Flexibility:</span>
                                SQL databases enforce a rigid schema, requiring predefined table structures and data types. Any changes to the schema often involve altering the tables, which can be cumbersome for evolving applications. NoSQL databases offer greater flexibility as they don't enforce strict schemas. New data can be added without modifying existing records, allowing for more agile development and accommodating changing requirements.

                                Use Cases:
                                SQL databases are commonly used in applications that require complex queries, transactions, and data integrity guarantees, such as financial systems, content management, and relational data storage. NoSQL databases are preferred in scenarios with large amounts of unstructured or semi-structured data, real-time data processing, high write loads, and flexible schemas. They are commonly used in social media, IoT, big data analytics, and caching scenarios.</p>
                        </div>
                        <div className='md:py-3'>
                            <h1 className='text-[#283149] text-3xl'>What is express js? What is Nest JS ? </h1>
                            <p className='md:py-4'> <span className='font-bold'>Express.js:</span>
                                Express.js is a minimalist and flexible web application framework for Node.js. It provides a simple and straightforward way to build web servers and APIs. Express.js focuses on being lightweight and unopinionated, allowing developers to have more control and flexibility in designing their application's structure and behavior. It offers a set of middleware functions and routing mechanisms to handle HTTP requests and responses. Express.js is widely used and has a large ecosystem of extensions and integrations available.    <br />
                                <span className='font-bold'>Nest.js:</span>
                                Nest.js is a progressive and opinionated framework for building scalable and maintainable server-side applications. It is built on top of Express.js but adds additional features and architectural patterns inspired by Angular, such as dependency injection, modules, and decorators. Nest.js follows a modular and component-based approach, promoting code organization and reusability. It provides out-of-the-box support for features like routing, middleware, authentication, validation, and database integration. Nest.js aims to provide a structured and robust foundation for building enterprise-level applications, making it suitable for complex and large-scale projects.
                            </p>
                        </div>
                        <div className='md:py-6'>
                            <h1 className='text-[#283149] text-3xl'>What is MongoDB aggregate and how does it work?</h1>
                            <p className='md:py-4'>The aggregate function in MongoDB is a powerful tool for performing complex data processing and analysis tasks on collections. It works by defining an aggregation pipeline, which consists of a series of stages that are applied sequentially to the documents in the collection. Each stage represents a specific operation, such as filtering, grouping, sorting, projecting, or computing new fields. MongoDB provides a wide range of stage operators that can be used to perform these operations. For example, the $match operator allows you to filter documents based on specific criteria, while the $group operator enables you to group documents and apply aggregate functions like $sum, $avg, $max, and more. The aggregate function executes the defined pipeline on the collection and returns the result of the aggregation. This powerful feature of MongoDB allows developers to perform complex data transformations and computations efficiently, making it suitable for a wide range of data analysis tasks.</p>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Blogs;