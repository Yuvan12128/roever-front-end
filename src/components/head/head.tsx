import './head.css'

const Head = () => {
  return (
    <div>
         <header className="topbar">
      {/* Left side */}
      <div className="top-left">
        <span className="college-name">
          ABC College of Engineering
        </span>
      </div>

      {/* Right side */}
      <div className="top-right">
        <span className="user-name">Admin</span>
        <div className="avatar">A</div>
      </div>
    </header>
    </div>
  )
}

export default Head