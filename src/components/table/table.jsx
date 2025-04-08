// import React from 'react';
// import './table.css'
// import imdb from "../../assets/images/imdb-logo-transparent.png"

// export const Table = ({ data, onRowClick }) => {
  
  

//   const handleOpenIMDBbMovie = (event, imdbID) => {
//     event.stopPropagation();
//     window.open(`https://www.imdb.com/title/${imdbID}`, " ");
//   };

//   return (
//     <table className="table mt-5 ">
//       <thead className="thead-dark" >
//         <tr>
//           <th>Poster</th>
//           <th>Title</th>
//           <th>Year</th>
//           <th>Type</th>
//           <th className="text-md-end">IMDB ID</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((movie) => (
//           <tr key={movie.imdbID} onClick={() => onRowClick(movie)}>
//             <td>
//               <img width="95" src={movie.Poster} alt={movie.Title} />
//             </td>
//             <td>{movie.Title}</td>
//             <td>{movie.Year}</td>
//             <td>{movie.Type}</td>
//             <td className="text-md-end">
//             <div className="d-flex justify-content-end">
//                 <button
//                   type="button"
//                   className="btn "
//                   onClick={(event) => handleOpenIMDBbMovie(event, movie.imdbID)}
//                 >
//                   Watch on IMDB

//                   <img src={imdb} alt="" width={40} />
//                 </button>
//               </div>
//             </td>
//             <td>
//               {/* <button 
//               className='remove-button'
//                 onClick={(e) => {
//                   e.stopPropagation(); 
//                   // handleRemove(movie); 
//                 }}
//               >
//                 Remove movie
//               </button> */}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };






import React from 'react';
import './table.css';
import imdb from "../../assets/images/imdb-logo-transparent.png"; 

export const Table = ({ data, onRowClick }) => {

  const handleOpenIMDBbMovie = (event, imdbID) => {
    event.stopPropagation();
    window.open(`https://www.imdb.com/title/${imdbID}`, "_blank");
  };

  return (
    <div className="table-responsive mt-5">
      <table className="table table-bordered table-hover table-white">
        <thead className="thead-light">
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
            <th className="text-center">IMDB ID</th>
            <th></th> {/* Placeholder for additional actions */}
          </tr>
        </thead>
        <tbody>
          {data.map((movie) => (
            <tr key={movie.imdbID} onClick={() => onRowClick(movie)}>
              <td>
                <img width="100" src={movie.Poster} alt={movie.Title} className="img-fluid" />
              </td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Type}</td>
              <td className="text-center">
                <button
                  type="button"
                  className="btn "
                  onClick={(event) => handleOpenIMDBbMovie(event, movie.imdbID)}
                >
                  Watch on IMDB
                  <img src={imdb} alt="IMDB logo" width={30} className="ms-2" />
                </button>
              </td>
              <td>
                {/* Additional actions (e.g., Remove button, etc.) can go here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
