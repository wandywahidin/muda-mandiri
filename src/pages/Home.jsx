import React from 'react'
import Footer from '../component/Footer'
import Main from '../component/Main'
import Row from '../component/Row'

const Home = ({data}) => {
  return (
    <div>
        <Main/>
        <Row data={data}/>
        <Footer/>
    </div>
  )
}

export default Home