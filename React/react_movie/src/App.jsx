import './App.css'
import {MovieCard} from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie = {{title : "John's Film", release_date : "2026"}} />
      <MovieCard movie = {{title : "Doe's Film", release_date : "2026"}} />
    </>
  )
}

export default App
