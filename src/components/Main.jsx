import React from 'react'
import dockerLogo from "./docker.svg"
// import graphqlLogo from "./graphql.svg"
// import mongoLogo from "./mongo.svg"
import psqlLogo from "./postgresql.svg"
import nodeLogo from "./node.svg"
import reactLogo from "./react.svg"
import redisLogo from "./redis.svg"
import awsLogo from "./aws.svg"
// import tensorFlowLogo from "./tensorflow.svg"
import tfPngLogo from "./tensorflow.png"

const Main = () => {
  return (
      <div id="main">
        <div className='container'>
          <img src={reactLogo} className="react-logo logos" alt="logo" />
          <img src={redisLogo} className="App-logo redis-logo logos" alt="logo" />
          <img src={nodeLogo} className="App-logo node-logo logos" alt="logo" />
          <img src={awsLogo} className="App-logo aws-logo node-logo logos" alt="logo" />
          {/* <img src={tensorFlowLogo} className="App-logo node-logo" alt="logo" /> */}
          <img src={tfPngLogo} className="App-logo tf-logo logos" alt="logo" />
          {/* <img src={graphqlLogo} className="graphql-logo" alt="logo" /> */}
          <img src={dockerLogo} className="App-logo docker-logo logos" alt="logo" />
          {/* <img src={mongoLogo} className="App-logo mongo-logo" alt="logo" /> */}
          <img src={psqlLogo} className="App-logo psql-logo logos" alt="logo" />
          <div className="type2">
            <p>Hi, I am Akshay</p>

          </div>
          <div className="line2 fadeIn">I am a Full Stack Developer</div>
          <div className="line3 fadeIn">I mainly use React, Express and NestJS</div>
          <div className="line4 ">Check out my Projects</div>
        </div>
      </div>
  )
}

export default Main