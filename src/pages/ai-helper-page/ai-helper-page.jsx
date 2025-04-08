// import   React  from "react";
// import { useNavigate } from 'react-router-dom'; 
// import { AILogic } from "../../components/AI/ai-helper";

// import "./ai-helper-page.css"


// export const  AiHelper =()=>{


//       const navigate = useNavigate(); 
    
//       // Handle navigating to another page
//       const handleButtonClick = () => {
//         navigate('/main'); 
//       };


//     return(
//         <div>
//         <header className="bg text-white p-3 d-flex justify-content-end">
//           <button
//             onClick={handleButtonClick}
//             style={{
//               backgroundColor: "transparent",
//               color: "white",
//               border: "none",
//               fontSize: "1.5rem",
//               cursor: "pointer",
//             }}
//           >
//             Go Back
//           </button>
//         </header>
  
//         <div className="">
//           <div className="" >
//             <h2 style={{color: "rgb(193, 64, 64)"}}>Welcom to Ai-helper page</h2>
//           </div>
//           <AILogic/>
//         </div>
//       </div>
  
//     )

// }



import React from "react";
import { useNavigate } from 'react-router-dom';
import { AILogic } from "../../components/AI/ai-helper";
import { Footer } from "../../components/footer/footer";

import "./ai-helper-page.css";

export const AiHelper = () => {
  const navigate = useNavigate();

  // Handle navigating to another page
  const handleButtonClick = () => {
    navigate('/main');
  };



  
  return (
    <div>
      <header className="bg text-white p-3 d-flex justify-content-between">

      <div className="logo" >
        <div className="backofh1">
          <h1>
            <span>M</span> MovieMapper
          </h1>
        </div>
      </div>

        <button
          onClick={handleButtonClick}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          Go Back
        </button>
      </header>

      <div className="content">
        <AILogic />
      </div>
      <Footer/>
    </div>
  );
};
