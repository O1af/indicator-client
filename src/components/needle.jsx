import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import getData from './api';
import { Link } from 'react-scroll';
import ReactSpeedometer from "react-d3-speedometer"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const needle = () => {
    const [jobData,setJobData] = useState()
    const [favor,setFavor] = useState('...')
    const [paramOne,setParamOne] = useState('2021')
    const [paramTwo,setParamTwo] = useState('05')
    const [loading, setloading] = useState(true)

    let year = []
    let d = new Date()
    let thisyear = d.getFullYear()
    for (let i = 2002; i <= thisyear; i++) {
        year.push(i)
    } 
    year.reverse()
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]

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
        }},[paramTwo])
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
    const handleClick = (e) => {
      console.log(e)
      setParamOne(e)
    }
    const handleSelect = (e) => {
      e = months.indexOf(e) +1
      if (parseInt(e) < 10) {
        let result = '0' + e
        setParamTwo(result)
      } else (setParamTwo(e))
    }

    return(
        <section id="hero" className="jumbotron">
      <Container>
        <h1 className="hero-title" >
            The Job Market Currently Favors:
           <span className={"text-color-"+ favor}>{favor}</span>
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
        <h3 className="hero-cta" >Select Year and Month(Up to May 2021):</h3>
        <DropdownButton className="hero-cta" size="lg" id="dropdown-basic" title={paramOne} onSelect={handleClick}> 
        {
            year.map(year => (
            <Dropdown.Item eventKey={year}>{year}</Dropdown.Item>
    ))}
        </DropdownButton>

        <DropdownButton className="hero-cta"size="lg"  id="dropdown-basic" title={paramTwo} onSelect={handleSelect}> 
        {
            months.map(month => (
            <Dropdown.Item eventKey={month}>{month}</Dropdown.Item>
    ))}
        </DropdownButton>

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