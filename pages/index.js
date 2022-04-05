import React from 'react'
import MeetUpList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
  {
    id:'m1',
    title:'Blockchain',
    image:'https://finlinkpartners.io/news/wp-content/uploads/2020/01/cENTRALIZED-VS-DECENTRALIZED-BLOCKCHAIN.jpg',
    discription:'First blockchain meetup',
    address:'15 Yemen street, Yemen'
  },
]

function HomePage() {
  return (
    <MeetUpList meetups={DUMMY_DATA}/>
  )
}

export default HomePage