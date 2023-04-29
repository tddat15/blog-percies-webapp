import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/44561791_506751633169699_3831945924293165056_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=5DQdW7e00ZUAX9F4rVB&_nc_ht=scontent-tpe1-1.xx&oh=00_AfBFul9C8xWkUNTlxrHm07MfE8cCkDrE7ptRIvWm29Q1_w&oe=6468FE88"
          alt=""
        />
        <p>
          “Like other successful endeavors in my life, I credit my old friend,
          Mel Brooks... he always gives me sage advice. When I told him that I
          was at loose ends since completing my last book, “Carl Reiner, Now
          You’re Ninety-Four,” he shouted, “Start a new one and call it, ‘Too
          Busy To Die.’” I thought it a smashing title and hopefully,“Too Busy
          To Die,” will also turn out to be a smashing read.”
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music </li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Career</li>
          <li className="sidebarListItem">Style</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}
