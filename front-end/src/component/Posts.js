import React from 'react'

function Posts({ post }) {
    const { name, location, likes, description, postImage, date } = post
    return <>
        <div className='post-page'>
            <div className='post-header'>
                <h5>{name}</h5>

                <span className='post-action'>
                    <img src='/Assets/more_icon.png' alt='dot' />
                </span>
                <span className='post-location'>{location}</span>
            </div>
            <div className='post-image'>
                <img src={postImage} alt='postImage' />
            </div>
            <div className='post-footer'>
                <div >
                    <img src='/Assets/heart.png' alt='like' />
                    <img src='/Assets/share.png' alt='arrow' />
                    <span className='date'>{date}</span>
                </div>
                <div className='post-likes'>
                    {likes} likes
                </div>
                <div className='post-desc'>
                    {description} description
                </div>
            </div>
        </div>
    </>
}

export default Posts