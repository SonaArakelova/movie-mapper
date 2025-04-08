
import React, { useState } from "react";
import { Button, Form, Container, Spinner } from "react-bootstrap"; 
import { aiApi } from "../../api/AI.api"; 

import "./ai-helper.css"

export const AILogic = () => {
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('');
  const [actor, setActor] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetSuggestions = async () => {
    setLoading(true);

    //  fetch movie suggestions
    const movies = await aiApi.getMovieSuggestions(genre, year, category, actor);

    // Update the state 
    setSuggestions(movies);
    setLoading(false);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4" style={{color:" rgb(153, 22, 22)"}}>Need a movie suggestion? Answer a few quick questions, and I’ll help you out! 🎬 </h1>
      
      <Form>
        <Form.Group controlId="genre" className="mb-3">
          <Form.Label style={{color:" rgb(153, 22, 22)"}}>Choose Genre:</Form.Label>
          <Form.Control
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="e.g., Comedy, Action, Horror"
          />
        </Form.Group>

        <Form.Group controlId="year" className="mb-3">
          <Form.Label style={{color:" rgb(153, 22, 22)"}}>Choose Year:</Form.Label>
          <Form.Control
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g., 2021, 1999"
          />
        </Form.Group>

        <Form.Group controlId="category" className="mb-3">
          <Form.Label style={{color:" rgb(153, 22, 22)"}}>Choose Category:</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Adventure, Sci-Fi"
          />
        </Form.Group>

        <Form.Group controlId="actor" className="mb-3">
          <Form.Label style={{color:" rgb(153, 22, 22)"}}>Choose Actor:</Form.Label>
          <Form.Control
            type="text"
            value={actor}
            onChange={(e) => setActor(e.target.value)}
            placeholder="e.g., Robert Downey Jr."
          />
        </Form.Group>

        <div className="text-center">
          <Button
            onClick={handleGetSuggestions}
            variant="primary"
            disabled={loading}
            style={{color:" rgb(243, 243, 243)", backgroundColor:"rgb(88, 19, 19)"}}
          >
            {loading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              "Get Suggestions"
            )}
          </Button>
        </div>
      </Form>

      {suggestions.length > 0 && (
        <div className="mt-5 ">
          <h2 style={{color:"rgb(88, 19, 19)"}}>Movie Suggestions:</h2>
          <ul className="list-group border">
            {suggestions.map((movie, index) => (
              <li key={index} className="list-group-item">
                {movie.title}
              </li>
            ))}
          </ul>
          
        </div>
      )}
    </Container>
  );
};




