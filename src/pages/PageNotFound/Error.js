import React from 'react';
import "./Error.css";
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component{
    render(){
        return <div style={{textAlign:"center",marginTop:"200px"}}>
            <img className='img-fluid' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt=''  />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;