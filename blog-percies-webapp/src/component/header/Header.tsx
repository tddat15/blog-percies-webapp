import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>

      <img
        src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/03/anh-nang.jpg?ssl=1"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
