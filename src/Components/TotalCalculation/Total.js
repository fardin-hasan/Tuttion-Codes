import React from 'react';

const Total = (props) => {
    const{selected}=props;
    let total = 0;
    for(const select of selected){
        total=total+select.sallary;

    }
    

    return (
        <div className='mt-5 mx-2'>
            <h4>Teacher Added : {selected.length} </h4>
            <h4>Total : {total} </h4>
            {
                
                selected.map(select=><h4 key={select.id}>Teacher Name : {select.name} </h4>)
            }
        </div>
    );
};

export default Total;