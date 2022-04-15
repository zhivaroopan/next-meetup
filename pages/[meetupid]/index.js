import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDeatils";
import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'

function Meetup(props) {
  return (
    <>
    <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content='Nexxt gen meetups'/>
      </Head>
    <MeetupDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      discription={props.meetupData.discription}
    />
    </>
  );
}

export async function getStaticPaths() {

const client  = await MongoClient.connect('mongodb+srv://zenoDB:zenoDB@zeddnext.5yops.mongodb.net/meetups?retryWrites=true&w=majority')
const db = client.db()
const meetupCollection = db.collection('meetups')
const meetupData = await meetupCollection.find({}, { _id:1 }).toArray()
await client.close()

  return {
    fallback: false,
    paths: meetupData.map((meetup) => ({ params : { meetupid: meetup._id.toString() }}))
  }
}

export async function getStaticProps(context) {

  const meetupid = context.params.meetupid

  const client  = await MongoClient.connect('mongodb+srv://zenoDB:zenoDB@zeddnext.5yops.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()
  const meetupCollection = db.collection('meetups')
  const meetupData = await meetupCollection.findOne({_id: ObjectId(meetupid)})
  await client.close()
  console.log(meetupData)
  console.log(meetupid);

  return {
    props: {
      meetupData: {
        title: meetupData.title,
        id: meetupData._id.toString(),
        image: meetupData.image,
        discription: meetupData.description,
        address: meetupData.address
      }
    }
  }
}

export default Meetup;
