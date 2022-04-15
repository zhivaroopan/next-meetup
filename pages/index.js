import React from 'react'
import MeetUpList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'
 
function HomePage(props) {
  return (
    <>
      <Head>
        <title>NEXT GEN</title>
        <meta name='description' content='Browse a list of Nexxt gen meetups'/>
      </Head>
      <MeetUpList meetups={props.meetups}/>
    </>
  )
}

export async function getStaticProps() {
  const client  = await MongoClient.connect('mongodb://127.0.0.1:27017/new-meetup')
  const db = client.db()
  const meetupCollection = db.collection('meetups')

  const meetupData = await meetupCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetupData.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1,
  }
}

export default HomePage