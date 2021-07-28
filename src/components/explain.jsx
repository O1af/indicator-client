import React, {useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';

const Explain = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
    }, []);

  return (
    <section id="explain">
      <Container>
        <Title title="Concepts" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <h1 className="about-wrapper__info-text">
                    What is the Job Market?
                </h1>
                <p className="about-wrapper__info-text">
                  The Job Market(or Labor Market) is the market where Employers look for Employees to fill open
                  positions and Employees look for jobs
                </p>
                <h1 className="about-wrapper__info-text">
                    What happens if the Job Market favors Employees?
                </h1>
                <p className="about-wrapper__info-text">
                  When the Job Market is in their favor, employees have 
                  more leverage which allows them to negotiate higher pay,
                  better working conditions, and more benefits. Employee markets 
                  often correlate with economic growth and expansion. Employee markets
                  are also one of the best times to apply for new jobs.
                </p>
                
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="about-wrapper__info">
            <h1 className="about-wrapper__info-text">
              What Factors Determine who the Job Market Favors?
            </h1>
            <p className="about-wrapper__info-text">
              The formula we use to calculate market leaning takes into account
              the job openings rate,unemployment rate, and the quit rate.
            </p>
            <h1 className="about-wrapper__info-text">
                What happens if the Job Market favors Employers?
                </h1>
                <p className="about-wrapper__info-text">
                  When the market favors them, Employers have an easier time
                  finding workers to fill open positions. Employers can also get away 
                  with paying employees less as workers often have limited employment
                  opportunities. Employer markets often correlate with recessions and
                  economic downturns

                </p>
            </div>
          </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Explain;
