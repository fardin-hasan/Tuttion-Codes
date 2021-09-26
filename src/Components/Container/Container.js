import React, { useEffect, useState } from 'react';
import Teachers from '../Teachers/Teachers';
import Total from '../TotalCalculation/Total';
import './Container.css'

const Container = () => {
    const[teachers,setTeachers]=useState([]);
    useEffect(()=>{
        fetch('./Teachers.JSON')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    },[])

    const[selected,setSelected]=useState([]);

    const handleAddToList =(teacher)=>{
        const newArr= [...selected,teacher];
        setSelected(newArr);
    }



  
    return (
        <div className='main-container'>
            <div className='teachers-container'>

                {
                    teachers.map(teacher=> <Teachers 
                        handleAddToList={handleAddToList}
                        key={teacher.id}
                        teacher={teacher}></Teachers>)
                }
            </div>
            <div>
                <Total selected={selected}></Total>
            </div>

        </div>
        
    );
};

export default Container;