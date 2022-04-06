import React from 'react'
import MeetUpForm from '../../components/meetups/NewMeetupForm'

function NewMeet() {
  
    const onSubmitHandler = (newmeetupData) => {
        console.log(newmeetupData);
    }

    return (
        <MeetUpForm onAddMeetup={onSubmitHandler}/>
  )
}

export default NewMeet