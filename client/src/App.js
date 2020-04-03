import './App.css';
import "react-datepicker/dist/react-datepicker.css"
import React, { Component } from 'react'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/InputForm.js'
import Display from './components/Display.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      bird: '',
      site: ['one', 'two'],
      date_observed: new Date(),
      mileage: '',
      travel: '',
      timeStart: '',
      timeEnd: '',
      totalTime: '',
      temperature: '',
      percipitation: '',
      cloudCover: '',
      windSpeed: '',
      observationSummary: [],
      incubation: '',
      young: '',
      youngAge: '',
      observation: '',
      comments: '',
      inputVisible: false,
      displayContent: []
    }
  }
  nameChange = (event) => {
    this.setState({ name: event.target.value })
  }
  emailChange = (event) => {
    this.setState({ name: event.target.value })
  }
  siteChange = (event) => {

    this.setState({ site: event.target.value })
  }
  birdChange = (event) => {
    this.setState({ bird: event.target.value })
  }
  dateChange = date => {

    this.setState({ date_observed: date })
  }
  mileageChange = (event) => {
    this.setState({ mileage: event.target.value })
  }
  travelChange = (event) => {
    this.setState({ travel: event.target.value })
  }
  timeStartChange = (event) => {
    this.setState({ timeStart: event.target.value })
  }
  timeEndChange = (event) => {
    this.setState({ timeEnd: event.target.value })
  }
  totalTimeChange = (event) => {
    this.setState({ totalTime: event.target.value })
  }
  temperatureChange = (event) => {
    this.setState({ temperature: event.target.value })
  }
  percipitationChange = (event) => {
    this.setState({ percipitation: event.target.value })
  }
  cloudCoverChange = (event) => {
    this.setState({ cloudCover: event.target.value })
  }
  windSpeedChange = (event) => {
    this.setState({ windSpeed: event.target.value })
  }
  observationSummaryChange = (event) => {
    this.setState({ observationSummary: event.target.value })
  }
  youngChange = (event) => {
    this.setState({ young: event.target.value })
  }
  incubationChange = (event) => {
    this.setState({ incubation: event.target.value })
  }
  youngAgeChange = (event) => {
    this.setState({ youngAge: event.target.value })
  }
  observationChange = (event) => {
    this.setState({ observation: event.target.value })
  }
  commentsChange = (event) => {
    this.setState({ comments: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let submission = {
      name: this.state.name,
      email: this.state.email,
      bird: this.state.bird,
      site: this.state.site,
      date_observed: new Date(),
      mileage: this.state.mileage,
      travel: this.state.travel,
      timeStart: this.state.timeStart,
      timeEnd: this.state.timeEnd,
      totalTime: this.state.totalTime,
      temperature: this.state.temperature,
      percipitation: this.state.percipitation,
      cloudCover: this.state.cloudCover,
      windSpeed: this.state.windSpeed,
      observationSummary: this.state.observationSummary,
      incubation: this.state.incubation,
      young: this.state.young,
      youngAge: this.state.youngAge,
      observation: this.state.observation,
      comments: this.state.comment,
    }
    fetch('/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submission)
    })
    this.setState({
      name: '',
      email: '',
      bird: '',
      site: ['one', 'two'],
      date_observed: new Date(),
      mileage: '',
      travel: '',
      timeStart: '',
      timeEnd: '',
      totalTime: '',
      temperature: '',
      percipitation: '',
      cloudCover: '',
      windSpeed: '',
      observationSummary: [],
      incubation: '',
      young: '',
      youngAge: '',
      observation: '',
      comments: '',
    })
  }
  toggleInput = () => {
    if (this.state.inputVisible) {
      fetch('/display').then(res =>{
        return res.json()
      }).then(jsonObj => {
        console.log(jsonObj)
        this.setState({ displayContent: jsonObj})
      })
    }

    this.state.inputVisible ?  this.setState({ inputVisible: false}) : this.setState({ inputVisible: true})
  }

  render() {
    let { name, email, bird, site,  date_observed, mileage, travel, timeStart,timeEnd, totalTime, temperature, percipitation, cloudCover, windSpeed, observationSummary, young, youngAge, incubation, observation, comments, displayContent} = this.state
    let { nameChange, emailChange, birdChange, siteChange, dateChange, mileageChange,travelChange, timeStartChange, timeEndChange, totalTimeChange, temperatureChange, percipitationChange,cloudCoverChange, windSpeedChange, observationChange,observationSummaryChange, youngChange, youngAgeChange, incubationChange, commentsChange, handleSubmit, toggleInput } = this
    return (
      <>
        <div id="wrapper">
            <button onClick={toggleInput}>See the Observations</button>
            {this.state.inputVisible ? <InputForm handleSubmit={handleSubmit}
              name={name} email={email} bird={bird} site={site} 
              date_observed={date_observed} mileage={mileage} travel={travel} timeStart={timeStart} timeEnd={timeEnd} totalTime={totalTime} temperature={temperature} percipitation={percipitation} 
              cloudCover={cloudCover} windSpeed={windSpeed} observationSummary={observationSummary} young={young} youngAge={youngAge} incubation={incubation} observation={observation} comments={comments}
              nameChange={nameChange} emailChange={emailChange} birdChange={birdChange} siteChange={siteChange} dateChange={dateChange} mileageChange={mileageChange} travelChange={travelChange}
               timeStartChange={timeStartChange} timeEndChange={timeEndChange} totalTimeChange={totalTimeChange} temperatureChange={temperatureChange} percipitationChange={percipitationChange} 
               cloudCoverChange={cloudCoverChange} windSpeedChange={windSpeedChange} observationChange={observationChange} observationSummaryChange={observationSummaryChange} 
               youngChange={youngChange} youngAgeChange={youngAgeChange} incubationChange={incubationChange} commentsChange={commentsChange} handleSubmit={handleSubmit} 
              /> :
              <Display displayContent={displayContent} />
           
        </div>
      </>
    )
  }
}

export default App