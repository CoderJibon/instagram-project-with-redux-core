import React, { useState } from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/AuthReducer/ActionReducer.js";

const Home = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const handleLogoutUser = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="main">
        <div className="leftside">
          <p className="logo">Instragram</p>
          <p>
            <i className="fa fa-home" aria-hidden="true"></i> Home
          </p>
          <p>
            <i className="fa fa-search" aria-hidden="true"></i> Search
          </p>
          <p>
            <i className="fa fa-compass" aria-hidden="true"></i> Explore
          </p>
          <p>
            <i className="fa fa-comments" aria-hidden="true"></i> Message
          </p>
          <p>
            <i className="fa fa-bell" aria-hidden="true"></i> Notification
          </p>
          <p onClick={() => setModal(true)}>
            <i className="fa fa-plus" aria-hidden="true"></i> Create
          </p>
          <p>
            <i className="fa fa-user" aria-hidden="true"></i> Profile
          </p>
          <p onClick={handleLogoutUser}>
            <i className="fa fa-lock" aria-hidden="true"></i> Logout
          </p>
          <p className="more">
            <i className="fa fa-caret-down" aria-hidden="true"></i> More
          </p>
        </div>
        <div className="middle">
          <div className="story">
            <div className="story1">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" />
              <p>Aoasd54</p>
            </div>
            <div className="story1">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" />
              <p>Aoasd54</p>
            </div>
            <div className="story1">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" />
              <p>Aoasd54</p>
            </div>
            <div className="story1">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" />
              <p>Aoasd54</p>
            </div>
            <div className="story1">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" />
              <p>Aoasd54</p>
            </div>
            <div className="story1">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" />
              <p>Aoasd54</p>
            </div>
            <div className="story1">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" />
              <p>Aoasd54</p>
            </div>
            <div className="story1">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" />
              <p>Aoasd54</p>
            </div>
          </div>

          <div className="post">
            <div>
              <div className="header">
                <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-8-1.png" />
                <p>
                  AnisAhad <span>. 2d</span>
                </p>
                <h6>
                  <MdOutlineMoreHoriz />
                </h6>
              </div>
              <div className="body">
                <img src="https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcTx8LeM4Blpo9SC1MDqosM9xKqQ9kP7cKrHdw&usqp=CAU" />
              </div>
              <div className="footer">
                <div className="icon">
                  <i className="fa fa-heart" aria-hidden="true"></i>

                  <i className="fa fa-comment" aria-hidden="true"></i>

                  <i className="fa fa-paper-plane" aria-hidden="true"></i>

                  <i className="fa fa-bookmark" aria-hidden="true"></i>
                </div>
                <div className="like">
                  <p>45 likes</p>
                  <p>Good morning everyone</p>
                </div>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  name=""
                  id=""
                />
              </div>

              <hr />
            </div>
            <div>
              <div className="header">
                <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-8-1.png" />
                <p>
                  AnisAhad <span>. 2d</span>
                </p>
                <h6>
                  <MdOutlineMoreHoriz />
                </h6>
              </div>
              <div className="body">
                <img src="https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcTx8LeM4Blpo9SC1MDqosM9xKqQ9kP7cKrHdw&usqp=CAU" />
              </div>
              <div className="footer">
                <div className="icon">
                  <i className="fa fa-heart" aria-hidden="true"></i>

                  <i className="fa fa-comment" aria-hidden="true"></i>

                  <i className="fa fa-paper-plane" aria-hidden="true"></i>

                  <i className="fa fa-bookmark" aria-hidden="true"></i>
                </div>
                <div className="like">
                  <p>45 likes</p>
                  <p>Good morning everyone</p>
                </div>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  name=""
                  id=""
                />
              </div>

              <hr />
            </div>
            <div>
              <div className="header">
                <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-8-1.png" />
                <p>
                  AnisAhad <span>. 2d</span>
                </p>
                <h6>
                  <MdOutlineMoreHoriz />
                </h6>
              </div>
              <div className="body">
                <img src="https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcTx8LeM4Blpo9SC1MDqosM9xKqQ9kP7cKrHdw&usqp=CAU" />
              </div>
              <div className="footer">
                <div className="icon">
                  <i className="fa fa-heart" aria-hidden="true"></i>

                  <i className="fa fa-comment" aria-hidden="true"></i>

                  <i className="fa fa-paper-plane" aria-hidden="true"></i>

                  <i className="fa fa-bookmark" aria-hidden="true"></i>
                </div>
                <div className="like">
                  <p>45 likes</p>
                  <p>Good morning everyone</p>
                </div>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  name=""
                  id=""
                />
              </div>

              <hr />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="profile">
            <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-8-1.png" />
            <div>
              <p>coderjibon</p>
              <p>Jibon roy</p>
            </div>
            <p>Switch</p>
          </div>
          <div className="follow">
            <p>
              Seggested for you <span>See All</span>
            </p>
            <div className="su">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-9.png" />
              <div>
                <p>md Fahim</p>
                <p>Suggest for you</p>
              </div>
              <p>Follow</p>
            </div>
            <div className="su">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-9.png" />
              <div>
                <p>md Fahim</p>
                <p>Suggest for you</p>
              </div>
              <p>Follow</p>
            </div>
            <div className="su">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-9.png" />
              <div>
                <p>md Fahim</p>
                <p>Suggest for you</p>
              </div>
              <p>Follow</p>
            </div>
            <div className="su">
              <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-9.png" />
              <div>
                <p>md Fahim</p>
                <p>Suggest for you</p>
              </div>
              <p>Follow</p>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div className="modal-box">
          <div className="modalHead">
            <div className="row">
              <div className="col-md-6">Create new Post</div>
              <div className="col-md-6 btntnb">
                <button
                  onClick={() => setModal(false)}
                  className="btn btn-primary"
                >
                  x
                </button>
              </div>
            </div>
          </div>
          <div className="modalBody">
            <hr />
            <form action="">
              <textarea
                className="form-control"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <br />
              <input className="form-control" type="file" />
              <br />
              <button className="btn btn-success" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
