import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import { STATUS } from '../../../utils/constants';
import { Accolade, ucFirst } from '../../../utils/misc';
import Metrics from '../../misc/Metrics';

const WithSeparator = require("react-with-separator");

export default class Job extends Component {
    render() {
        var topBgImageStyle = {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: "105%",
            height: "105%",
            margin: "-5px",
            backgroundImage: `url(${this.props.job.headerUrl})`,
            backgroundPosition: this.props.job.headerPosition, // change me around to move up and down!
            backgroundSize: "cover",
            filter: "blur(4px)",
            zIndex: "1"
          };
        var bgImageContainer = {
            position:"relative", 
            height: "200px", 
            width: "100%", 
            overflow: "hidden", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center"
        }
        if(!this.props.job){
            return (
                <div className="wrapper">
                    <h2>Loading job...</h2>
                </div>
            )
        } else {
            return (

                <div>
                    <div style={bgImageContainer}>
                        <div style={ topBgImageStyle }></div>
                        <Grid style={{ position: "relative", zIndex: "5"}}>
                            <Row center="xs" middle="xs">
                                <Col style={{margin: "20px 0"}} xs={12} md={4}>
                                    { this.props.previousJob && (
                                        <Link to={`/work/${this.props.previousJob.title.split(" ").join("-").toLowerCase()}`} className="md-blue-btn">
                                            <i className="fas fa-chevron-left" />&#8239; Next job
                                        </Link>
                                    )}
                                </Col>
                                <Col style={{margin: "20px 0"}} xs={12} md={4}>
                                    <Link to="/work" className="md-blue-btn">
                                        <i className="fas fa-chevron-up" />&#8239; Back to all work
                                    </Link>
                                </Col>
                                <Col style={{margin: "20px 0"}} xs={12} md={4}>
                                    { this.props.nextJob && (
                                        <Link to={`/work/${this.props.nextJob.title.split(" ").join("-").toLowerCase()}`} className="md-blue-btn">
                                            Previous job &#8239;<i className="fas fa-chevron-right" />
                                        </Link>
                                    )}
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                    <div className="wrapper-w-img">
                        <Grid fluid>
                            <Row>
                                <Col md={12} lg={10}>
                                    <Row middle="xs">
                                        <Col xs={12} sm={8} className="sm-margin-t-b">
                                        <a href={this.props.job.link} rel="noopener noreferrer" target="_blank" className="text-hover-light-blue"><h1 className="no-margin">{this.props.job.title}</h1></a>
                                            <h3 className="roboto-bold sm-margin-t">{this.props.job.role}</h3>
                                        </Col>
                                        <Col xs={12} sm={4} className="sm-margin-t-b">
                                            <Row end="sm">
                                                <Col xs={12}>
                                                    <h3>
                                                        {this.props.job.period}
                                                    </h3>
                                                    <h4 className={`roboto-light md-text no-margin ${this.props.job.status === STATUS.COMPLETE ? 'green' : 'yellow'}`}>
                                                        {this.props.job.status === STATUS.COMPLETE ? 
                                                            <i className="fas fa-check"/> : 
                                                            <i className="fas fa-clock"/>
                                                        } 
                                                        &#8239;
                                                        {ucFirst(this.props.job.status)}
                                                    </h4>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    

                                    {/* DESCRIPTION */}
                                    <div className="description-div">
                                        {this.props.job.longDescription}
                                    </div>
                                    <Row center="xs">
                                        <Col xs={12} sm={6} className="sm-padding-t-b">
                                            <a href={this.props.job.link} rel="noopener noreferrer" target="_blank">
                                                <button className="md-blue-btn">
                                                    <i className="fas fa-globe-africa" /> Visit site
                                                </button>
                                            </a>  
                                        </Col>
                                        { this.props.job.githubLink && (
                                            <Col xs={12} sm={6} className="sm-padding-t-b">
                                                <a href={this.props.job.githubLink} rel="noopener noreferrer" target="_blank">
                                                    <button className="md-blue-btn">
                                                    <i className="fab fa-github" /> View source code
                                                    </button>
                                                </a>  
                                            </Col>
                                        )}
                                    </Row>
                                </Col>
                                {this.props.job.logoUrl && (
                                    <Col md={12} lg={2}>
                                        <Row center="xs">
                                            <a href={this.props.job.link} target="_blank" rel="noopener noreferrer">
                                                <Col>
                                                    <img className={`responsive ${this.props.job.logoSize} md-margin`} alt="job logo" src={this.props.job.logoUrl} />
                                                </Col>
                                            </a>
                                        </Row>
                                    </Col>
                                )}
                               
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <h2 className="sm-margin-t-b">Skills</h2>
                                    {this.props.job.skills.primary && (
                                        <>
                                        <h4>Primary:</h4>
                                        <Row>
                                            { 
                                                this.props.job.skills.primary.map((skill, i) => {
                                                    return (
                                                        <Accolade key={i} link={skill.link} name={skill.name} value={""} src={skill.src} />
                                                    )
                                                }) 
                                            }
                                        </Row>
                                        
                                        </>
                                    )}
                                    {this.props.job.skills.secondary && (
                                        <>
                                        <h4>Secondary:</h4>
                                        <Row>
                                            { 
                                                this.props.job.skills.secondary.map((skill, i) => {
                                                    return (
                                                        <Accolade key={i} link={skill.link} name={skill.name} value={""} src={skill.src} />
                                                    )
                                                }) 
                                            }
                                        </Row>
                                        </>
                                    )}
                                    {this.props.job.skills.other && (
                                        <div>
                                            <h4 className="display-inline">Other: </h4>
                                            <WithSeparator separator=", ">
                                                { 
                                                    this.props.job.skills.other.map((skill, i) => {
                                                        return (
                                                            <span key={i}>
                                                                {skill}
                                                            </span>
                                                        )
                                                    }) 
                                                }
                                            </WithSeparator>
                                        </div>
                                    )}
                                    {this.props.job.skills.courses && (
                                        <div>
                                            <h4 className="display-inline">Courses: </h4>
                                            <ul>
                                                { 
                                                    this.props.job.skills.courses.map((course, i) => {
                                                        return (
                                                            <li key={i}>
                                                                {course}
                                                            </li>
                                                        )
                                                    }) 
                                                }
                                            </ul>
                                        </div>
                                    )}
                                    
                                </Col>
                            </Row>
                        </Grid>
                        {this.props.job.metrics && (
                            <Metrics metrics={this.props.job.metrics} />
                        )}
                        <br/>
                        <div className="center-text">
                            <span className="green"><b>Job page last updated:</b> {this.props.job.lastUpdated}</span>
                        </div>
                    </div>
                    <div className="horiz-rule sm-margin-b" />
                    <div className="md-margin-b">
                        {this.props.job.extraContent}
                    </div>
                </div>
            )
        }
    }
}
