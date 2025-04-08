import React, { useContext, useState } from "react";
import { MoviesProvider, tab, MoviesContext } from "../../contexts/moviecontext.jsx";
import { Header } from "../../components/header/header";
import { SearchMovies } from "../../tabs/search-movies/search-movies";
import { Movies } from "../../tabs/movies/movies";
import { Footer } from "../../components/footer/footer.jsx";
import { Quiz } from "../../tabs/quiz/quiz.jsx";



import './main.page.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Tabs = () => {
  const { setActiveTab, activeTab } = useContext(MoviesContext);

  const getTabClasses = (tab) => {
    return `nav-link ${activeTab === tab ? "active" : ""}`;
  };

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item ">
        <button 
          onClick={() => setActiveTab(tab.search)}
          className={getTabClasses(tab.search)}
        >
          Search Movies
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => setActiveTab(tab.movies)}
          className={getTabClasses(tab.movies)}
        >
          My Movie List
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => setActiveTab(tab.quiz)}
          className={getTabClasses(tab.quiz)}
        >
          Quiz
        </button>
      </li>
    </ul>
  );
};

const Layout = () => {
  const { activeTab } = useContext(MoviesContext);

  console.log("activeTab", activeTab);

  return (
    <>
      {activeTab === tab.search && <SearchMovies />}
      {activeTab === tab.movies && <Movies />}
      {activeTab === tab.quiz && <Quiz />}
    </>
  );
};



export const MainPage = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <MoviesProvider>
      <div>
        {/* <Header /> */}

        <Header setShowLogin={setShowLogin} />  
        {showLogin && <LoginForm setShowLogin={setShowLogin} />}



        <Tabs />
        <Layout />
        <main className="container mt-4"></main>
        <Footer/>
      </div>
    </MoviesProvider>
   
  );
};
