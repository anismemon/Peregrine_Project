import React from 'react';
import { Form, Col, Accordion, Card } from 'react-bootstrap';
import ReportModal from './ReportModal'

export default function Display(props) {
    let bird
    if (props.bird === 'Bald Eagle') {
        bird = 'Bald Eagle'

    } else if (props.bird === "Peregrine Falcon") {
        bird = 'Peregrine Falcon'

    }
    else {
        bird = ''
    }

    
    return (



        <div className="container" >
            <div className="audubonvt" ></div>
            <div>
                <Form>
                    {/* -----------------------Bird Observed Radio -------------------*/}
                    <Form.Group as={Col}>
                        <Form.Label as="legend" column sm={10}>
                            Please select a bird:
					</Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Bald Eagle"
                                value="Bald Eagle"
                                name="birds"
                                id="formHorizontalRadios1"
                                onChange={props.birdChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Peregrine Falcon"
                                value="Peregrine Falcon"
                                name="birds"
                                id="formHorizontalRadios2"
                                onChange={props.birdChange}
                            />
                        </Col>
                    </Form.Group>
                    {/*------------------------- Location Site Name ------------------------*/}
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Please select a nesting site:</Form.Label>
                        <Form.Control as="select" custom value={props.site} onChange={props.siteChange}>
                            <option></option>
                            <option>Arrowhead Mountain (Milton)</option>
                            <option>Bald Mountain (West Haven)</option>
                            <option>Ball Mountain (Jamaica)</option>
                            <option>Barnet Roadcut (Barnet)</option>
                            <option>Bethel Quarry (Bethel)</option>
                            <option>Bolton Notch - Upper Upper West (Bolton)</option>
                            <option>Bone Mt (Bolton)</option>
                            <option>Bradford Cliff (Bradford)</option>
                            <option>Bristol Cliff (Bristol)</option>
                            <option>Brousseau Mountain (Averill)</option>
                            <option>Camels Hump (Duxbury)</option>
                            <option>Checkerberry Ledge (Bakersfield)</option>
                            <option>Crystal Lake (Barton)</option>
                            <option>Deer Leap (Bristol)</option>
                            <option>Eagle Ledge (Vershire)</option>
                            <option>Eagle Mountain (Milton)</option>
                            <option>Elephant Mountain (Bristol)</option>
                            <option>Fairlee Palisades (Fairlee)</option>
                            <option>Hawk Rock (Newark)</option>
                            <option>Hawks Mountain (Weathersfield)</option>
                            <option>Hawkins Pond (Calais)</option>
                            <option>Haystack Mountain (Pawlet)</option>
                            <option>Hazen's Notch (Lowell)</option>
                            <option>Highgate Cliffs (Highgate Springs)</option>
                            <option>Jobs Mountain(Westmore)</option>
                            <option>Lamoille River (Milton)</option>
                            <option>Lone Rock Point (Burlingotn)</option>
                            <option>Mallet's Bay (Colchester)</option>
                            <option>Marshfield Mountain (Marshfield)</option>
                            <option>Mount Equinox (Manchester)</option>
                            <option>Mount Horrid (Brandon)</option>
                            <option>Mount Pisgah (Westmore)</option>
                            <option>Mount Norris (Lowell)</option>
                            <option>Nebraska Notch (Underhill)</option>
                            <option>Nichols Ledge (Woodbury)</option>
                            <option>Pond MOuntain (Wells)</option>
                            <option>Prospect Rock (Johnson)</option>
                            <option>Quarry Hill (Pownal)</option>
                            <option>Rattlesnake Point (Salisbury)</option>
                            <option>Rattlesnake Ridge (Benson)</option>
                            <option>Red Rock (Hinesburg)</option>
                            <option>Red Rocks Park (South Burlington)</option>
                            <option>Rock of Ages QUarry (Barre)</option>
                            <option>Ryegate Quarry (Ryegate)</option>
                            <option>Sawyer Mountain (Fairlee)</option>
                            <option>Skitchewaug Mountain (Springfield)</option>
                            <option>Smuggler's Notch (Cambridge)</option>
                            <option>Snake Mountain (Addison)</option>
                            <option>Sutherland Quarry/Proctor (Proctor)</option>
                            <option>Swanton Quarry (Swanton)</option>
                            <option>Vermont Yankee (Vernon)</option>
                            <option>Vulture Mountain (Springfield)</option>
                            <option>Wallace Ledge (Castleton)</option>
                            <option>Whitcomb Quarry (Colchester)</option>
                            <option>White Rocks (Wallingford)</option>
                        </Form.Control>
                    </Form.Group>
                    {/*------------------------- Location Site Name ------------------------*/}
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Please select a season(year):</Form.Label>
                        <Form.Control as="select" custom value={props.season} onChange={props.seasonChange}>
                            <option></option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                        </Form.Control>

                    </Form.Group>
                    <input type="submit" value="Search" className="btn btn-primary" onClick={props.searchDataBase} />
                </Form>
            </div>
            <div><strong>{bird} Monitor Observation report(s)</strong></div>
            <table className="table table-striped">
                <thead>
                    <tr> {/* //table headers */}
                        <th scope="col">Season</th>
                        <th scope="col">Location</th>
                        <th scope="col">Date Observed</th>
                        <th scope="col">See Full Report</th>
                    </tr>
                </thead>
                <tbody>
                    {/* //ternary operator that will iterate through each entry using a key */}
                    {props.displayContent ? props.displayContent.map(data => (

                        <tr key={data._id}>
                            <th scope="column" >{data.season}</th>
                            <td >{data.location}</td>
                            <td >{data.date_visited}</td>
                            <td><button className="btn btn-primary" value={JSON.stringify(data)} onClick={props.displayFullReport} style={{ cursor: 'pointer' }}>click here</button></td>
                            
                        </tr>


                    )) : <em>Loading...</em>}

                </tbody>

            </table>
            {/* {props.report ? <ReportModal/>: null} */}

        </div >
    )
}



{/* <ul >
            {props.displayContent ? props.displayContent.map(e =>
                <div key={e._id} className='display-item-container'>

                    <li>season: {e.season}</li>
                    <li>email: {e.email}</li>
                    <li>location:  {e.location}</li>
                    <li>wind speed: {e.wind_speed}</li>
                    <li>precipitation: {e.precipitation}</li>
                    <li>Date observed: {e.date_visited}</li>
                    <li>observations: {e.observations}</li>

                </div>) : "Loading..."}


        </ul> */}

