import React from 'react'
import './Sidebar.css'
import { Avatar } from "@material-ui/core";


function Sidebar() {
    const recentItem = (topic) =>
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>

    return (
        <div className="sidebar">
            <dvi className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80" alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Wael ELk</h2>
                <h4>Always Trying...</h4>
            </dvi>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewd you</p>
                    <p className="statNumber">2,549</p>
                </div>
                <div className="sidebar__stat">
                    <p>Viewd on posts</p>
                    <p className="statNumber">8,825</p>
                </div>
            </div>
            
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem ("Local")}
                {recentItem ("International")}
                {recentItem ("Sport")}
                {recentItem  ("Tech")}
            </div>
        </div>
    )
}

export default Sidebar
