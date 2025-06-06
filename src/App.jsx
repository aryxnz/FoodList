import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [comment, setComment] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Basic Info Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>

        <label>
          Comment:
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </label>

        <label>
          Job:
          <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
        </label>

        <label>
          Salary:
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </label>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="result">
          <h3>Submitted Info:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Comment:</strong> {comment}</p>
          <p><strong>Job:</strong> {job}</p>
          <p><strong>Salary:</strong> ₹{salary}</p>
        </div>
      )}
    </div>
  );
}

export default App;




















// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <>
//       {[1, 2, 3, 4, 5].map((ele, idx) => {
//         return (
//           <button
//             key={idx}
//             onClick={() => setSelected(idx)}
//             className={`btn ${selected === idx ? "active" : ""}`}
//           >
//             {ele}
//           </button>
//         );
//       })}
//     </>
//   );
// }

// export default App;




{/* 
// function App(){
//   let[cnt,setCnt]=useState(0);
//   let Count=0;
//   let date =new Date();
//   date.setDate(date.getDate()+cnt);
//   return (<header>
//     <button  onClick={(e)=>{
//       console.log("Hello",Count++);
//       setCnt(cnt+1);
//     }}>+</button>
//     <p>Count={cnt}</p>
//     <button onClick={(e)=>{
//       console.log("Hello",Count--);
//       setCnt(cnt-1);
//     }}>-</button>
//     <div className="dates">
//       <p>{date.toDateString()}</p>
//     </div>
//   </header>

//   )
// } */}














// 
// import { useState } from "react";
// function App() {
//   const [text, setText] = useState("Click Me!!");

//   const handler = () => {
//     setText(prev => prev === "Click Me!!" ? "Don't Click Me" : "Click Me!!");
//   };

//   return (
//     <>
//       <button onClick={handler}>{text}</button>
//     </>
//   );
// }

