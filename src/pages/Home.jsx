import React from 'react'
import Main from '../component/Main'
import Row from '../component/Row'

const Home = ({data}) => {
  return (
    <div>
        <Main/>
        <Row data={data}/>
    </div>
  )
}

export default Home