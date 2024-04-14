import React from 'react'
import "./card.css"

const Card = ({date,title,reads,views,comments,img}) => {

  return (
    
    <div className='container'>
        <div className="card-container">
            <div className="card-img">
                <img src={img}/>
            </div>
            <div className="card-top">
                <div className='card-date'>{date} Day ago</div>
                <div className='card-title'>{title}</div>
            </div>
            <div className="card-info">
                <div className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nesciunt velit in tenetur earum veniam rerum numquam, minima nulla nihil.</div>
            </div>
            <div className="card-bottom">
                <div className="card-bottom-first">
                    <div><span>{reads}</span></div>
                    <span>Reads</span>
                </div>
                <div className="card-bottom-second">
                    <div><span>{views}</span></div>
                    <span>Views</span>
                </div>
                <div className="card-bottom-third">
                    <div><span>{comments}</span></div>
                    <span>Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card