import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import getData from './api';
import { Link } from 'react-scroll';
import ReactSpeedometer from "react-d3-speedometer"

const needle = () => {
    const [jobData,setJobData] = useState()
    const [favor,setFavor] = useState('...')
    const [paramOne,setParamOne] = useState('2021')
    const [paramTwo,setParamTwo] = useState('01')
    const [loading, setloading] = useState(true)

    useEffect(()=> {
      let mounted = true
      let res = getData({'year':paramOne,'month':paramTwo})
      res.then((result) => {
        setJobData(result)
        console.log('res:'+ result)
        console.log( 'JobData:'+ jobData)
        if (mounted) {
          setloading(false)
      }})
        return function cleanup() {
            mounted = false
        }},[paramOne])
    useEffect(()=> {
      let mounted = true

      if (jobData < 5) {
        setFavor('Employees')
      } else if (jobData > 5) {
        setFavor('Employers')
      } else {setFavor('Nobody')}
      console.log(favor)
      return function cleanup() {
        mounted = false}
    },[jobData])

    return(
        <section id="hero" className="jumbotron">
      <Container>
        <h1 className="hero-title" >
            The Job Market Currently Favors:
           <span className="text-color-main">{favor}</span>
        </h1>

        <ReactSpeedometer 
        maxSegmentLabels={3}
        segments={2000}
        minValue={0}
        maxValue={10}
        value={jobData}
        startColor='#29ffc6'
        endColor='#5433FF'
        forceRender={true}
        />
        <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="explain" smooth duration={1000}>
                What does this Mean?
              </Link>
            </span>
          </p>
      </Container>
    </section>
    )
}

export default needle