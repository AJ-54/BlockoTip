import React, { Component } from 'react';
import { SmallAvatar } from '../images/avatars'
import { AddImageIcon, AddGifIcon, AddPollIcon, AddEmojiIcon } from '../images/svg/svgs'
import TweetCard from './TweetCard' 
import '../styles/Main.css';
import Identicon from 'identicon.js';

class Main extends Component {

  render() {
    return (
      <>
      <div className="home">
        <h1>BlockoTip Home</h1>
      </div>
      <div className="new-tweet">
            <div className="left">
            <img
              className='mr-2'
              width='30'
              height='30'
              src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
            />
            </div>
            <form onSubmit={(event) => {
              event.preventDefault()
              const content = this.postContent.value
              this.props.createPost(content)
            }}>
            <div className="right">
                <div className="flex-align-center">
                    <span className="w-100">
                        <input className="w-100" placeholder="What's happening?" id="postContent"
                          type="text"
                          ref={(input) => { this.postContent = input }}
                          className="form-control"
                          placeholder="What's on your mind?"
                          required />
                    </span>
                </div>
                <div className="new-tweet-options">
                    <div className="add-icons">
                    <label>
                      <input className='add-image' type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} hidden />
                      <AddImageIcon /> 
                    </label>
                    <label>
                      <input className='add-image' type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} hidden />
                      <AddGifIcon /> 
                    </label>    
                        
                        <AddPollIcon />
                        <AddEmojiIcon />
                    </div>
                    <div className="tweet">
                      
                    <button type="submit" className="btn tweet-btn text-center">Tweet</button>
                    </div>
                </div>
            </div>
            </form>
        </div>

        <div className="tweets">
          { this.props.posts.map((post, key) => (<TweetCard key={key} id={key} tweet={post} tipPost={this.props.tipPost} />))}
        </div>
      </>
    );
  }
}

export default Main;
