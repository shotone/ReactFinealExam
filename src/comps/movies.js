import { useEffect, useState } from "react";
import walpaper from '../img/walpaper.jpg'




const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day?'
const KEY = 'api_key=cc6ee35910514ca0be06cec0f3330408'


function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {


      const request = await fetch(BASE_URL + KEY)

      const data = await request.json()
      
      setTrendingMovies(data.results)
    }

    getMovies()
  }, [])

  return (
    <div>

      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundImage:"url("+ walpaper + ")", justifyContent: 'center', gap: '5px' }}>
        { trendingMovies.length === 0 ? (<p>Fetching Movies...</p>) : (
            trendingMovies.map((movie) => (
              <div style={{
                padding: '40px',
                background: 'rgb(0, 76, 153)'
              }}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' style={{
                  width: '300px',
                  height: '200px',
                  objectFit: 'cover'
                }} />
                <p style={{
                  maxWidth: '300px',
                  maxHeight: '50px',
                  textAlign: 'center',
                  fontSize: '24px',
                }}>{movie.name || movie.title}</p>
                <hr />
                <p style={{
                  maxWidth: '300px',
                  maxHeight: '100px;',
                  textAlign: 'center',
                  overflow: 'auto',
                  fontSize: '12px;',
                }}>{movie.overview}</p>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
}

export default Movies;
