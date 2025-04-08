// import React, {useContext, useReducer, useEffect, useRef } from "react";
// import { Table } from "../../components/table/table";
// import { Modal } from "../../components/modal/modal";
// import { omdbApi } from "../../api/movie.api";
// import { MovieDetails } from "./movie-details/movie-details";
// import { APP_TITLE } from "../../utils/constant";
// import { getAppTitleByMovie } from "../../utils/helpers";
// import { MoviesContext } from "../../contexts/moviecontext"


// const initialState = {
//   data: [],
//   open: false,
//   selectedMovie: null,
// };

// const searchMovieReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_DATA": 
//       return { ...state, data: action.payload };
//     case "SET_MODAL_OPEN": 
//       return { ...state, open: action.payload };
//     case "SET_SELECTED_MOVIE": 
//       return {
//         ...state,
//         open: action.payload.open,
//         selectedMovie: action.payload.selectedMovie,
//       };
//     default:
//       break;
//   }
// };

// export const SearchMovies = () => {
//   const { searchQuery } = useContext(MoviesContext);

//   const [state, dispatch] = useReducer(searchMovieReducer, initialState);
//   const timeoutIdRef = useRef(null);

//   const fetchMovies = async () => {
//     const response = await omdbApi.fetchMoviesBySearch(searchQuery || "");

//     if (response.success) {
//       dispatch({ type: "SET_DATA", payload: response.data.Search || [] });
//     }
//   };

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);

//     const movieId = urlParams.get("movieId");
//     const title = urlParams.get("title");
//     const year = urlParams.get("year");

//     if (movieId && title && year) {
//       dispatch({
//         type: "SET_SELECTED_MOVIE",
//         payload: {
//           open: true,
//           selectedMovie: { imdbID: movieId, Title: title, Year: year },
//         },
//       });
//       document.title = getAppTitleByMovie(title, year);
//     }
//   }, []);

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   useEffect(() => {
//     clearTimeout(timeoutIdRef.current);

//     const toId = setTimeout(() => {
//       fetchMovies();
//     }, 1000);

//     timeoutIdRef.current = toId;
//   }, [searchQuery]);

//   const handleRowClick = (row) => {
//     dispatch({
//       type: "SET_SELECTED_MOVIE",
//       payload: {
//         open: true,
//         selectedMovie: row,
//       },
//     });

//     document.title = getAppTitleByMovie(row.Title, row.Year);

//     window.history.pushState(
//       null,
//       "",
//       `?movieId=${row.imdbID}&title=${row.Title}&year=${row.Year}`
//     );
//   };

//   const handleCloseModal = () => {
//     dispatch({
//       type: "SET_MODAL_OPEN",
//       payload: false,
//     });
//     window.history.pushState("", "", "/");
//     document.title = APP_TITLE;
//   };

//   return (
//     <div className="container mt-4">
//       <Table data={state.data} onRowClick={handleRowClick} />
//       <Modal
//         open={state.open}
//         onClose={handleCloseModal}
//         title={getAppTitleByMovie(
//           state.selectedMovie?.Title,
//           state.selectedMovie?.Year
//         )}
//       >
//         <MovieDetails id={state.selectedMovie?.imdbID} />
//       </Modal>
//     </div>
//   );
// };

















import React, { useContext, useReducer, useEffect, useRef, useState } from "react";
import { Table } from "../../components/table/table";
import { Modal } from "../../components/modal/modal";
import { omdbApi } from "../../api/movie.api";
import { MovieDetails } from "./movie-details/movie-details";
import { APP_TITLE } from "../../utils/constant";
import { getAppTitleByMovie } from "../../utils/helpers";
import { MoviesContext } from "../../contexts/moviecontext";
import { Pagination } from "../../components/pagination/pagination"

const initialState = {
  data: [],
  open: false,
  selectedMovie: null,
};

const searchMovieReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": 
      return { ...state, data: action.payload };
    case "SET_MODAL_OPEN": 
      return { ...state, open: action.payload };
    case "SET_SELECTED_MOVIE": 
      return {
        ...state,
        open: action.payload.open,
        selectedMovie: action.payload.selectedMovie,
      };
    default:
      break;
  }
};

export const SearchMovies = () => {
  const { searchQuery } = useContext(MoviesContext);
  const [state, dispatch] = useReducer(searchMovieReducer, initialState);
  const [currentPage, setCurrentPage] = useState(1);  // State for current page
  const [totalPages, setTotalPages] = useState(0);  // State for total pages
  const timeoutIdRef = useRef(null);

  // Fetch Movies from API
  const fetchMovies = async () => {
    const response = await omdbApi.fetchMoviesBySearch(searchQuery || "", currentPage);

    if (response.success) {
      dispatch({ type: "SET_DATA", payload: response.data.Search || [] });
      setTotalPages(Math.ceil(response.data.totalResults / 10));  // Assuming 10 results per page
    }
  };

  // Debounce search and fetch movies
  useEffect(() => {
    clearTimeout(timeoutIdRef.current);

    const toId = setTimeout(() => {
      fetchMovies();
    }, 1000);

    timeoutIdRef.current = toId;
  }, [searchQuery, currentPage]);

  // Handle row click (select a movie)
  const handleRowClick = (row) => {
    dispatch({
      type: "SET_SELECTED_MOVIE",
      payload: {
        open: true,
        selectedMovie: row,
      },
    });

    document.title = getAppTitleByMovie(row.Title, row.Year);

    window.history.pushState(
      null,
      "",
      `?movieId=${row.imdbID}&title=${row.Title}&year=${row.Year}`
    );
  };

  // Handle close modal
  const handleCloseModal = () => {
    dispatch({
      type: "SET_MODAL_OPEN",
      payload: false,
    });
    window.history.pushState("", "", "/");
    document.title = APP_TITLE;
  };

  // Handle page change (update current page)
  const handlePageChange = (page) => {
    setCurrentPage(page);  // Update the page
  };

  return (
    <div className="container mt-4">
      {/* Movie Table */}
      <Table data={state.data} onRowClick={handleRowClick} />
      
      {/* Movie Details Modal */}
      <Modal
        open={state.open}
        onClose={handleCloseModal}
        title={getAppTitleByMovie(
          state.selectedMovie?.Title,
          state.selectedMovie?.Year
        )}
      >
        <MovieDetails id={state.selectedMovie?.imdbID} />
      </Modal>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
