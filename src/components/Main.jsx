import React from 'react'
import dockerLogo from "./docker.svg"
import graphqlLogo from "./graphql.svg"
import mongoLogo from "./mongo.svg"
import psqlLogo from "./postgresql.svg"
import nodeLogo from "./node.svg"
import reactLogo from "./react.svg"
import redisLogo from "./redis.svg"
import { Box } from '@chakra-ui/react'

const Main = () => {
  return (
      <div id="main">
        <div className='container'>
          <img src={reactLogo} className="react-logo" alt="logo" />
          <img src={redisLogo} className="App-logo redis-logo" alt="logo" />
          <img src={nodeLogo} className="App-logo node-logo" alt="logo" />
          <img src={graphqlLogo} className="graphql-logo" alt="logo" />
          <img src={dockerLogo} className="App-logo docker-logo" alt="logo" />
          <img src={mongoLogo} className="App-logo mongo-logo" alt="logo" />
          <img src={psqlLogo} className="App-logo psql-logo" alt="logo" />
          <div className="line anim-typewriter">Hi, I am Akshay</div>
          <div className="line2 fadeIn">I am a Full Stack Developer</div>
          <div className="line3 fadeIn">I mainly use React, NodeJS and Django</div>
          <div className="line4 ">Check out my Projects</div>
        </div>
      </div>
  )
}

export default Main