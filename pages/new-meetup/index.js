import React from 'react'
import MeetUpForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/head'

function NewMeet() {
  
    const onSubmitHandler = async (newmeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(newmeetupData),
            headers: {
                'Content-Type':'application/json'
            }
        })
        // const data = await response.json()
        console.log(response);
    }

    return (
        <>
        <Head>
        <title>Add your meetups here</title>
        <meta name='description' content='Add your upcoming meeetups here'/>
        </Head>
        <MeetUpForm onAddMeetup={onSubmitHandler}/>
        </>
  )
}

export default NewMeet