import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">NITW HUB</span>
        <span className="headerTitleLg">Latest Info & Updates</span>
      </div>
      <img
        className="headerImg"
        src="https://nitw.ac.in/api/static/files/NIT_WARANGAL_v1_2023-4-1-11-24-46.jpg"
        alt=""
      />
    </div>
  );
}
