import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "../components/MovieList";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";


function Movie() {
    return (
        <div>

            <SearchBar />
            <br/>
            <MovieCard />
            <br/>
            <MovieList />
        </div>
    );
}

export default connect()(Movie);
