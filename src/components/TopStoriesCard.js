
    import React from 'react';
    import "./TopStoriesCard.css";
    
    function TopStoriesCard({imageSrc , author , body , datePosted , title}) {
        return (
            <div className="topCard">            
                  <div className="topCardImage">
                  <img src={imageSrc} alt="Post"/>
                  </div>

                  <div className="topCardContent">
                        <h2>{title}</h2>
                        <p>{body}</p>
                       <span>Posted By <b>{author}</b></span>
                        <div className="stamp">
                   <small>{datePosted}</small>
                  <a href="/">Read More</a>
                        </div>
                  </div>
              

            </div>
        )
    }
    
    export default TopStoriesCard
    