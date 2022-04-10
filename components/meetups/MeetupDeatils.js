import classes from './MeetupDeatils.module.css'

function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
        <img src={props.image}/>
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.discription}</p>
    </section>
  )
}

export default MeetupDetails