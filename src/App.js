import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import { Provider } from "react-redux";
import store from "./redux/store";
import Form from "./pages/pallette/form"
import { DataProvider } from './DataContext';


import { useSelector } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Router>
        <DataProvider>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="form" element={<Form/>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
            </DataProvider>
        </Router>
    </div>
    </Provider>
  );
}

export default App;