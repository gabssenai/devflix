import "./App.css"

import { useEffect } from "react";
import { useState } from "react";

import logo from "../assets/devflix.png"
import searchIcon from "../assets/search.svg"

import MovieCard from "../components/movieCard/movieCard";
import Footer from "../components/footer/footer";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [movies, setMovies] = useState([]);

    const apiKey = "5f5b2216";
    const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`

    useEffect(() => {
        searchMovies("Batman")
    }, []);

    const searchMovies = async (tittle) => {
        const response = await fetch(`${apiUrl}&s=${tittle}`);
        const data = await response.json();

        console.log(data);
        setMovies(data.Search)
    };

    const handleKeyPress = (e) => {
        e.key === "Enter" && searchMovies(searchTerm)
        searchMovies(searchTerm)
    }

    return (
        <div id="app">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Pesquise por filmes"
                />
                <img src={searchIcon} alt="Icone de pesquisa" onClick={() => searchMovies(searchTerm)} />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (<MovieCard key={movie.imdbID} movies={movie} />))}
                </div>
            ) : (
                <div className="empty">
                    <h2>Nnehum filme encontrado 🦈</h2>
                </div>
            )}
            <Footer link={"https:github.com.br"}>GabsAlcaide</Footer>
        </div>
    )

}

export default App;