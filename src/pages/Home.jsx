import React from "react";

function Home() {
  return (
    <div className="page home">
      <h2>Welcome to Padhayenge Tution Classes</h2>
      <p>Choose your learning path:</p>
      <div className="dropdowns">
        <div className="dropdown">
          <label>Languages</label>
          <select>
            <option>English</option>
            <option>Hindi</option>
            <option>French</option>
          </select>
        </div>
        <div className="dropdown">
          <label>Courses</label>
          <select>
            <option>Mathematics</option>
            <option>Science</option>
            <option>Computer Science</option>
          </select>
        </div>
        <div className="dropdown">
          <label>Co-curricular</label>
          <select>
            <option>Dancing</option>
            <option>Singing</option>
            <option>Painting</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Home;