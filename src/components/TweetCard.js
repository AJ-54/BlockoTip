import React, { Component } from 'react';
import '../styles/TweetCard.css';
import { SmallAvatar } from '../images/avatars'
import { TweetCommentIcon, TweetRetweetIcon, TweetLikeIcon, TweetSendIcon } from '../images/svg/svgs';
import Identicon from 'identicon.js';

export default class TweetCard extends Component {
    post = this.props.tweet;
    profImageurl = 'https://pbs.twimg.com/profile_images/1247964769669136385/KVCROk2D_bigger.jpg';

    render() {
        return (
                <div className="tweet-card">
                    <div className="left">
                        <img
                            className='mr-2'
                            width='30'
                            height='30'
                            src={`data:image/png;base64,${new Identicon(this.post.author, 30).toString()}`}
                        />
                    </div>
                    <div className="right">
                        <div className="tweet-card-head">
                            <span className="tweet-card-name" >{this.post.author}</span>

                            {/* <span className="tweet-card-handle" >{this.tweet.user.handle}</span>

                            <span className="tweet-card-time"> - {this.tweet.tweet.time}</span> */}
                        </div>
                        <div className="tweet-card-body">
                            <div className="tweet-card-content">
                                <p className="m-0">{this.post.content}</p>
                                {this.post.hash == '#' ? null: 
                                <p class="text-center"><img src={`https://ipfs.infura.io/ipfs/${this.post.hash}`} style={{ maxWidth: '420px'}}/></p>
                                }
                            </div>
                            {/* <div className="tweet-card-image">
                                <img src={this.tweet.tweet.image} alt="" />
                            </div> */}
                            <div className="tweet-card-footer">
                                <span className="flex-align-center"><TweetCommentIcon /> <span className="tweet-cars-icon">143</span></span>
                                <span className="flex-align-center"><TweetRetweetIcon /><span className="tweet-cars-icon">128</span></span>
                                <span className="flex-align-center"><TweetLikeIcon /><span className="tweet-cars-icon">TIPS: {window.web3.utils.fromWei(this.post.tipAmount.toString(), 'Ether')} ETH</span></span>
                                <button className="btn btn-link btn-sm float-right pt-0"
                                    name={this.post.id}
                                    onClick={(event) => {
                                        let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                                        this.props.tipPost(this.post.id, tipAmount)
                                    }}>
                                <span className="flex-align-center"><TweetSendIcon />                         
                                <span className="tweet-cars-icon">TIP 0.1 ETH</span>
                                    </span></button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}