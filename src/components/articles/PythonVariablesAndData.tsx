import React, { CSSProperties } from 'react'
import SearchEngineOptimize from '../utils/SearchEngineOptimize';
import SectionHeading from '../utils/SectionHeading';
import Header from '../Header';
// import SmallHeading from '../utils/SmallHeading';
// import SmallerHeading from '../utils/SmallerHeading';
import PostImage from '../utils/PostImage';
import { pythonBG, pythonLogo } from '../utils/ImageImporter';
import Divider from '../utils/Divider';
import SmallerHeading from '../utils/SmallerHeading';
// import Divider from '../utils/Divider';
import '../../Python.css'
import { Link } from 'react-router-dom';

interface PythonBlogProps {
    // Add any props you might need
}

// We can explicitly add : JSX.Element, but it is not needed
const PythonVariablesDataBlog = ({ }: PythonBlogProps): JSX.Element => {

    const boldStyle: CSSProperties | undefined = {
        fontSize: "30px",
        color: "#839bf9"
    }

    const headingStyle: CSSProperties | undefined = {
        color: "#b3a630"
    }
    const postImageStyle: CSSProperties | undefined = {
        height: "10vw",
        width: "10vw",
        position: "fixed",
    }

    const codeBlockStyle: CSSProperties | undefined = {
        backgroundColor:"black",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        fontFamily: "monospace",
        overflow: "auto"
    }

    return (
        <>
            <Header
                heading="Python For You"
                backgroundImage={pythonBG}
                subHeading="Exploring Python's Simplicity and Versatility New Programmers"
            />
            <SearchEngineOptimize
                title="Python Programming for Beginners: Learn Coding with Python | Your Path to Software Development"
                description="Embark on your coding journey with Python! This beginner's guide introduces you to Python's readable syntax, versatile applications, and supportive community. Start your software development adventure now."
                name="Python Code"
                type="article"
            />

            <PostImage style={postImageStyle} image_path={pythonLogo} />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-11 col-lg-9 col-xl-9">

                            <SectionHeading style={headingStyle} heading="Python Variables and Data Types: Building Blocks of Code" />

                            <Divider />

                            <p>
                                Welcome back, coding enthusiasts! In our last blog, we took our first steps into the world of coding with Python.
                                Now, let's dive deeper and explore the essential concepts of variables and data types in Python.
                                These building blocks are crucial for storing and manipulating information in your programs.
                            </p>
                            <Divider />

                            <p>
                            <SmallerHeading style={boldStyle} heading="Defining Variables:" />
                                In Python, a variable is like a labeled box where you can store values. You can give a variable any name you like, as long as it follows a few rules:
                                - It must start with a letter (a-z, A-Z) or an underscore (_).
                                - It can be followed by letters, underscores, and digits (0-9).
                                - Variable names are case-sensitive (e.g., "myVar" and "myvar" are different).</p>

                            <p>
                            <SmallerHeading style={boldStyle} heading="Data Types in Python:" />
                                Python supports various data types, each designed to handle different kinds of information. Here are some fundamental data types:</p>

                            <ul>
                                <li> <b>1. Integers (int):</b> Used to represent whole numbers, positive or negative.</li>
                                <li> <b>2. Floating-Point Numbers (float):</b> Used to represent decimal numbers.</li>
                                <li> <b>3. Strings (str):</b> Used to store text. Enclosed in single (' ') or double (" ") quotes.</li>
                                <li> <b>4. Booleans (bool):</b> Represents either True or False values, essential for making decisions in your code.</li>
                            </ul>


                            <p>
                            <SmallerHeading style={boldStyle} heading="Assigning Values to Variables:" />
                                You can assign values to variables using the assignment operator (=). Here's an example:</p>

                            <div style={codeBlockStyle}>

                            <pre className="code-block"><code>name = "Alice"
                                age = 25
                                height = 5.7
                                is_student = True</code></pre>
                            </div>

                            <p>
                                <SmallerHeading style={boldStyle} heading="Type Conversion:" />
                                Python allows you to convert values from one data type to another. For example, you can convert a number to a string using the <code>str()</code> function.</p>

                            <pre className="code-block"><code>num = 42
                                num_as_str = str(num)</code></pre>

                            <p>
                                <SmallerHeading style={boldStyle} heading="Dynamic Typing:" />
                                Python is dynamically typed, which means you don't need to declare the data type of a variable explicitly. Python figures out the data type based on the value assigned to it.</p>

                            <p>
                                <SmallerHeading style={boldStyle} heading="Concatenating Strings:" />
                                You can concatenate strings using the <code>+</code> operator. Here's how:</p>

                            <pre className="code-block"><code>first_name = "John"
                                last_name = "Doe"
                                full_name = first_name + " " + last_name</code></pre>

                            <p>Conclusion:
                                Understanding variables and data types is essential for any aspiring Python programmer. With these building blocks in place, you can start creating more complex programs that handle and manipulate various types of information. Stay tuned for our next blog, where we'll explore control structures and decision-making in Python!</p>

                            <p>Happy coding! 🐍🔧</p>

                        </div>

                        <div style={{maxHeight: "600px"}} className="col-md-1 col-lg-3 col-xl-3 overflow-auto shadow-sm">
                            <Link  className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link>
                            <Divider />
                            <Link  className="nav-link px-lg-3 py-3 py-lg-4" to="/python/variables-datatypes">Python Types</Link>
                            <Divider />
                            <Link  className="nav-link px-lg-3 py-3 py-lg-4" to="/python/variables-datatypes">Python Types</Link>
                            <Divider />
                            <Link  className="nav-link px-lg-3 py-3 py-lg-4" to="/python/variables-datatypes">Python Types</Link>

                        </div>

                    </div>
                </div>
            </article>
        </>
    );
};

export default PythonVariablesDataBlog;
