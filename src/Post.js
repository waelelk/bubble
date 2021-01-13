import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import InputOptions from "./InputOptions"
import './Post.css'

import FavoriteIcon from '@material-ui/icons/Favorite';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import ShareIcon from '@material-ui/icons/Share';
import MoreIcon from '@material-ui/icons/More';

const Post = forwardRef (({ name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
            <Avatar className="avatar" />
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>  
            <div className="post__buttons">
                <InputOptions Icon={FavoriteIcon} title="Like" color="grey" />
                <InputOptions Icon={InsertCommentIcon} title="Comment" color="grey" />
                <InputOptions Icon={ShareIcon} title="Share" color="grey" />
                <InputOptions Icon={MoreIcon} title="More" color="grey" />
            </div>
        </div>
    )
}) 

export default Post
