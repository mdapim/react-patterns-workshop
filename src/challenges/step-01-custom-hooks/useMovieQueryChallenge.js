import { DEFAULT_YEAR } from '../../constants'
import { useState, useEffect } from 'react'

export const useMovieQueryChallenge = ({ year }) => {
  const [movies, setMovies] = useState(undefined)
  const fetchMovieData = async () => {
    setMovies(undefined)
    const response = await fetch(`/api/movies?year=${year}`)
    const movieJsonData = await response.json()
    setMovies(movieJsonData.results)
  }

  useEffect(() => {
    fetchMovieData()
  }, [year])

  return {
    data: movies,
    isLoading: movies ? true : false
  }
}
