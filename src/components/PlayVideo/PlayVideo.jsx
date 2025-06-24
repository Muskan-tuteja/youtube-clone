import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_proflie from "../../assets/user_proflie.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted width="600"></video>
      <h3>Start Your Day with 12 Minutes of Refreshing Yoga</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr></hr>
      <div className="publisher">
        <img src={jack}></img>
        <div>
          <p>MuskanTuje</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Begin your morning with a calming yoga session designed to energize your body and focus your mind. </p>
        <p>Just 4 minutes a day can make a big difference in your mental and physical well-being.</p>
        <hr></hr>
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_proflie}></img>
          <div>
            <h3>Jack Nichlo <span>1 day ago</span></h3>
            <p>Very relaxing session. I feel fresh and calm now.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt=""  />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_proflie}></img>
          <div>
            <h3>Vikram Joshi <span>2 day ago</span></h3>
            <p>Good for beginners! Would love to see a 10-min version too. 🙌</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt=""  />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_proflie}></img>
          <div>
            <h3>Rahul Deshmukh <span>1 hour ago</span></h3>
            <p>I showed this to my mom and she loved it. Great job! 👏</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt=""  />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_proflie}></img>
          <div>
            <h3>Ananya Singh <span>2 mints ago</span></h3>
            <p>This short yoga routine is perfect for my busy mornings.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt=""  />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_proflie}></img>
          <div>
            <h3>isha <span>1 day ago</span></h3>
            <p>Short but very effective routine. Thank you</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt=""  />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_proflie}></img>
          <div>
            <h3>Aarav Sharma <span>1 mint ago</span></h3>
            <p>I do this yoga every morning. It really helps!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt=""  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
