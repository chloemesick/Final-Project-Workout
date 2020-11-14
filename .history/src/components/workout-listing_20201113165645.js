import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { moviesCollection } from "../data/firebase";
import Movie from "./movie";
import "./movie-listing.css";

function MovieListing() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");