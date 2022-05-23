import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>National Mobility Supervisor</title>
        <meta property="og:title" content="National Mobility Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
