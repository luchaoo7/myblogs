import React, { CSSProperties } from 'react'
import SearchEngineOptimize from '../utils/SearchEngineOptimize';
import SectionHeading from '../utils/SectionHeading';
import Header from '../Header';
// import SmallHeading from '../utils/SmallHeading';
// import SmallerHeading from '../utils/SmallerHeading';
import PostImage from '../utils/PostImage';
import { pythonBG, pythonLogo } from '../utils/ImageImporter';
import Divider from '../utils/Divider';
// import Divider from '../utils/Divider';

interface PythonBlogProps {
    // Add any props you might need
    component?: React.ComponentType<any>;
    name?: string;
}

const PythonBlog: React.FC<PythonBlogProps> = () => {
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
                        <div className="col-md-10 col-lg-8 col-xl-7 shadow">

                            <SectionHeading style={headingStyle} heading="Getting Started with Python" />
                            <p>Welcome to the world of coding! If you're just stepping into the exciting realm of programming, learning Python is an excellent choice to kickstart your journey. In this beginner's guide, we'll explore why Python is the perfect language for newcomers and highlight its pros and cons.</p>
                            <Divider />

                            <SectionHeading style={headingStyle} heading="Pros of Learning Python" />
                            <p><b style={boldStyle}>1. Simple and Readable Syntax:</b> Python's syntax resembles plain English, making it easy for beginners to grasp. This readability reduces the learning curve and allows you to focus on logic and problem-solving.</p>
                            <p> <b style={boldStyle}>2. Versatility:</b> Python is a versatile language used in web development, data analysis, artificial intelligence, automation, scientific computing, and more. It's a great starting point as it opens doors to various domains.</p>
                            <p> <b style={boldStyle}>3. Large Community and Resources:</b> Python has a massive and active community. This means there are countless tutorials, documentation, forums, and libraries available to help you learn and solve problems.</p>
                            <p> <b style={boldStyle}>4. Abundant Libraries:</b> Python offers numerous pre-built libraries, such as NumPy, Pandas, and Matplotlib, that simplify complex tasks. These libraries save time and effort by providing ready-made functions and tools.</p>
                            <p> <b style={boldStyle}>5. Cross-Platform Compatibility:</b> Python code can run on different operating systems without modification. This feature ensures your programs work seamlessly across Windows, macOS, and Linux.</p>

                            <SectionHeading style={headingStyle} heading="Cons of Learning Python" />
                            <p> <b style={boldStyle}>1. Slower Execution:</b> Python is an interpreted language, which means it can be slower compared to compiled languages like C or Java. However, for most applications, this performance difference is negligible.</p>
                            <p> <b style={boldStyle}>2. Global Interpreter Lock (GIL):</b> In some cases, Python's GIL can limit the execution of multi-threaded code, affecting performance on multi-core processors. However, this is mainly a concern for specific use cases.</p>

                            <SectionHeading style={headingStyle} heading="Why Start with Python" />
                            <p> <b style={boldStyle}>1. Gentle Learning Curve:</b> Python's straightforward syntax helps beginners focus on programming concepts rather than struggling with complex code structures.</p>
                            <p> <b style={boldStyle}>2. Real-World Applicability:</b> Python's wide range of applications ensures that the skills you learn are relevant and valuable in various industries.</p>
                            <p> <b style={boldStyle}>3. Community and Support:</b> With a vibrant and welcoming community, you'll find ample resources, online forums, and expert advice to guide you through your learning journey.</p>
                            <p> <b style={boldStyle}>4. Transferable Skills:</b> Concepts learned while mastering Python, such as problem-solving, algorithms, and logical thinking, are transferable to other programming languages.</p>

                            <SectionHeading heading="Conclusion" />
                            <p>Embarking on your coding journey with Python is a wise decision. Its simplicity, versatility, and strong community support make it an ideal choice for beginners. So dive in, explore the vast world of programming, and unlock endless possibilities with Python!
                                Happy coding! 🚀</p>

                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default PythonBlog;
