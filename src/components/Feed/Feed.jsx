import React from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="feed">
      <Link to={`video/20/4521`} className="card">
        <img src={thumbnail1} alt="" />
        <h2>Yoga is an ancient mind‑body</h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 2 days ago</p>
      </Link>
      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>
          The exact amount of vacation time you need for peak mental and
          physical health, according to experts
        </h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 12 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>
          Fast food, characterized by high levels of saturated fats, added
          sugars
        </h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 10 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>
          Football is a highly dynamic team sport that offers holistic health
          benefits—physically, mentally, and socially.
        </h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 5 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>
          {" "}
          They offer essential mental breaks from routine stress by immersing us
          in engaging stories
        </h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 19 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>Music affects both mind and body profoundly</h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 3 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>Art Of Chef</h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 1 months ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>Reding bOOKS</h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 5 days ago</p>
      </div>
      
      <div className="card">
        <img src={thumbnail1} alt="" />
        <h2>Yoga is an ancient mind‑body</h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>
          The exact amount of vacation time you need for peak mental and
          physical health, according to experts
        </h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 12 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>
          Fast food, characterized by high levels of saturated fats, added
          sugars
        </h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 10 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>
          Football is a highly dynamic team sport that offers holistic health
          benefits—physically, mentally, and socially.
        </h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 5 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>
          {" "}
          They offer essential mental breaks from routine stress by immersing us
          in engaging stories
        </h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 19 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>Music affects both mind and body profoundly</h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 3 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>Art Of Chef</h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 1 months ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>Reding bOOKS</h2>
        <h3>Muskan tueja</h3>
        <p>12k views &bull; 5 days ago</p>
      </div>
    </div>
  );
};

export default Feed;
