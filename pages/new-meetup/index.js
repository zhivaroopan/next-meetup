import React from 'react'
import MeetUpForm from '../../components/meetups/NewMeetupForm'

function NewMeet() {
  
    const onSubmitHandler = async (newmeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(newmeetupData),
        })
        const data = response.json()
        console.log(data);
    }

    return (
        <MeetUpForm onAddMeetup={onSubmitHandler}/>
  )
}

export default NewMeet