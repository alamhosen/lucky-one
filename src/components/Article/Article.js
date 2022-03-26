import React from 'react';
import './Article.css'
const Article = () => {
    return (
        <div className='article'>
            <div>
            <h4>How does React Work?</h4>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. React implements a virtual DOM So when it needs to read or write to DOM, it uses the virtual representation of it. The virtual DOM try to find the most useful way to update the browser’s DOM. Because of this, JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation. </p>
            </div>
            <div>
                <h4>Different between Props and State</h4>
                <p>Props are read-only components but State can be change by asynchronous. Props are immutable but State is mutable. Props allow us to pass data from one component to another component but State holds information about the components. We can access Props by the child component but we can not access State by child component. Props can make components reusable but State cannot make components reusable. We use Props to communicate between components and we use State for rendering dynamic changes with the component.</p>
            </div>
            <div>
                <h4>How does useState works? </h4>
                <div>
                useState is a Hook that lets us have state variables in functional components. We pass the initial state to the function and it returns a variable with the current state value and another function to update this value. Each piece of state holds one value, which can be an object, an array,  Boolean, or any other type.
                </div>
            </div>
        </div>
        
    );
};

export default Article;