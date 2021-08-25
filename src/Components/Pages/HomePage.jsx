import React from 'react'
import Navbar from "../Heads/Navbar"
import Row from "../General/Row"
import request from "../axios/request"
import Banner from "../Heads/Banner"
const HomePage = () => {
    return (
        <div>
        <Navbar/>
      <Banner/>
      <Row title="Attention Original" fetchUrl={request.fetchNetflixOriginal} isLargeRow />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Romantic Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Comendy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentariesMovies} />
       <Row title="Upcoming Movies" fetchUrl={request.fecthUpcomingMovies} />
        </div>
    )
}

export default HomePage
