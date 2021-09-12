import React, { Component } from 'react'
import { SmallAvatar } from '../images/avatars'
import { AddImageIcon, AddGifIcon, AddPollIcon, AddEmojiIcon } from '../images/svg/svgs'


export default class TweetCard extends Component {
    const profImageurl = 'https://pbs.twimg.com/profile_images/1247964769669136385/KVCROk2D_bigger.jpg';

    render(){
        return (
        <div className="new-tweet">
            <div className="left">
                <SmallAvatar width="48" image={profImageurl} />
            </div>
            <div className="right">
                <div className="flex-align-center">

                    <span className="w-100">
                        <input className="w-100" placeholder="What's happening?" type="text" onChange={(event) => setContent(event.target.value)} /></span>
                </div>
                <div className="new-tweet-options">
                    <div className="add-icons">
                        <AddImageIcon />
                        <AddGifIcon />
                        <AddPollIcon />
                        <AddEmojiIcon />
                    </div>
                    <div className="tweet" onClick={handleNewTweet}>
                        <div className="btn tweet-btn text-center">Tweet</div>
                    </div>
                </div>
            </div>

        </div>
    );}
}