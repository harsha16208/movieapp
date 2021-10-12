import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import PageNotFound from "./components/PageNotFound"
import Footer from "./components/Footer/Footer"
import MovieDetails from './components/MovieDetails/MovieDetails';
import axios from "axios"
import {useState,useEffect} from "react"
import React from "react"

export const moviedata=React.createContext()
function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
      const fetchMovies=()=>{
          axios.get("https://api.tvmaze.com/search/shows?q=all")
          .then(dt=>{
              setData(dt.data)
              })
          .catch(err=>console.log(err))
      }

      fetchMovies()
    
  },[])

  
  return (
    <BrowserRouter>
    <div>
    <moviedata.Provider value={data}>
      <Header></Header>
      <Switch>
      <Route path="/" component={Content}  exact/>
      <Route path="/details/:id" component={MovieDetails} />
      <Route component={PageNotFound}/>
      </Switch>
      <Footer/>
    </moviedata.Provider >
    </div>
    </BrowserRouter>
  );
}


export default App;

