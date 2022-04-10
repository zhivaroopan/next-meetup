import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDeatils";

function Meetup(props) {
  return (
    <MeetupDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      discription={props.meetupData.discription}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: 'm1'
        }
      },
      {
        params: {
          meetupid: 'm2'
        }
      },
    ]
  }
}

export async function getStaticProps(context) {

  const meetupid = context.params.meetupid

  console.log(meetupid);

  return {
    props: {
      meetupData: {
        image:"https://finlinkpartners.io/news/wp-content/uploads/2020/01/cENTRALIZED-VS-DECENTRALIZED-BLOCKCHAIN.jpg",
        title: "First BlockChain meetup",
        address: "Sivakasi, TamilNadu",
        discription: "New meetup"
      }
    }
  }
}

export default Meetup;
