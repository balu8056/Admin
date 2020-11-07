import React from 'react'


const Nav = (props) => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          data-toggle="modal"
          data-target="#myModal"
          href="/#"
        >
          <img
            className="mr-2 rounded-circle"
            width="40"
            height="40"
            src={props.props.imageurl}
            alt=""
          />
          {props.props.profileName}
        </a>
        <ul className="navbar-nav mx-auto">
          <li>
            <h3 className="pr-5">{'Admin'} </h3>
          </li>
        </ul>
      </nav>

      <div className="modal p-0" id="myModal">
        <div className="modal-dialog p-0">
          <div className="modal-content p-0">
            <div className="card hovercard">
              <div className="cardheader"></div>
              <div className="avatar">
                <img alt="" src={props.props.imageurl} />
              </div>
              <div className="info">
                <div className="title">
                  
                    {props.props.profileName}
                
                </div>
                <div className="desc">{props.props.email}</div>
                <div className="desc">Curious developer</div>
                <div className="desc">Tech geek</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
