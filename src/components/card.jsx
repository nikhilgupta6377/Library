import React from 'react'

const card = (props) => {
    console.log(props);
    
  return (
    <div >
          <div className="card">
                  <div className="line">
                      <div className="topp">
                         <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83HWjWnB4C01ls7ZzaieSTNlH7uulsWrsLw&s" alt="" /></span> 
                             <h4>{props.rating}</h4>
                      </div> 
                       <div> <h4>{props.category}</h4></div>
                 </div> 
                  <div className='top'>
                     
                      <h1>{props.head}</h1>
                </div>
                  <div className="center">
                      <img src={props.img} alt="" />
                      <h4>{props.author}</h4>
                      <h3>{props.price}</h3>
                  </div>
                  <div className="bottom">
                  <h4> { props.description}</h4>
                  </div>
                  
           </div>
             
       
    </div>
  )
}

export default card;
