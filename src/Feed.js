import React, { useState, useEffect } from 'react'
import './Feed.css'
import InputOptions from "./InputOptions"
import Post from "./Post"

import AddCircleIcon from '@material-ui/icons/AddCircle';
import ImageIcon from '@material-ui/icons/Image';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import EventIcon from '@material-ui/icons/Event';
import LabelIcon from '@material-ui/icons/Label';
import { db } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


funcnpm stion Feed() {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(onSnapshot => (
            setPosts(onSnapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: "Wael Elk",
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed__input" >
                    <AddCircleIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOptions Icon={ImageIcon} title='Photo' color="#70b5f9"/>
                    <InputOptions Icon={MovieCreationIcon} title='Video' color="#00d68f"/>
                    <InputOptions Icon={EventIcon} title='Event' color="#e7dab6"/>
                    <InputOptions Icon={LabelIcon} title='Label' color="#e05c61"/>
                </div>
            </div>
            {/* Posts */}
            <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
                    <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
          
        </div>
    )
}

export default Feed
