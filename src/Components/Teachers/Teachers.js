import React from 'react';
import './Teachers.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Teachers = (props) => {
    const{name,subject,sallary,img,age,university}=props.teacher;
    
    return (
        <div >
            <div className=" mt-5">
                
                    <div className="card h-100 card-body">
                    <img className='teacher-img mt-2'  src={img} alt="" />
                    <div className="single-teacher">
                        <h5 className="card-title">Name : {name} </h5>
                        <h5 className="card-title">Age : {age} </h5>
                        <h5 className="card-title">Subject : {subject} </h5>
                        <h5 className="card-title">University : {university} </h5>
                        <h5 className="card-title">Sallary : {sallary} </h5>
                        <button onClick={()=>props.handleAddToList(props.teacher)} className='addCart'>add to list</button>
                    </div>
                    </div>
                
 
            </div>
        

        </div>
            
    );
};

export default Teachers;