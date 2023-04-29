import React from 'react';
import emailIcon from '../icons/email.svg';
import locationIcon from '../icons/location.svg';
import phoneIcon from '../icons/phone.svg';
import '../styles/Postview.css';

import ReactToPrint from 'react-to-print';

class Header extends React.Component {
  render() {
    const { dataInputObject } = this.props;

    return (
      <div className="header">
        <div className="head">
          <div className="names">
            <h1 className="ResumeNameTitle">
              {dataInputObject.data.Name.input}
            </h1>

            <p className="aboutusDescription descriptionText">
              {dataInputObject.data.About_You.input}
            </p>
          </div>

          <div className="iconsHolder">
            <div className="resumeIcons">
              <div className="resumeIcon">
                <img className="resumeimg" src={phoneIcon} alt="phone icon" />
                <p className="resumeText">
                  {dataInputObject.data.Phone_Number.input}
                </p>
              </div>

              <div className="resumeIcon">
                <img className="resumeimg" src={emailIcon} alt="email icon" />
                <p className="resumeText">{dataInputObject.data.Email.input}</p>
              </div>

              <div className="resumeIcon">
                <img
                  className="resumeimg"
                  src={locationIcon}
                  alt="location icon"
                />
                <p className="resumeText">
                  {dataInputObject.data.Location.input}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Description extends React.Component {
  render() {
    const { dataInputObject, isEducation } = this.props;

    return (
      <div className="Description">
        <div className="titleInfo">
          <p className="descriptionTitle">
            {isEducation
              ? dataInputObject.data.Degree.input
              : dataInputObject.data.Title.input}
          </p>
          <div className="descriptionInfo">
            <p className="place descriptionLabel">
              {isEducation
                ? dataInputObject.data.School_Name.input
                : dataInputObject.data.Company.input}
              {isEducation && `, ${dataInputObject.data.Location.input}`} |
              &nbsp;
            </p>

            <p className="times descriptionLabel">
              {`${dataInputObject.data.Start_Date.input} - ${dataInputObject.data.End_Date.input}`}
            </p>
          </div>
        </div>

        <p className="descriptionText resumeInfoText">
          {isEducation
            ? dataInputObject.data.About_Your_Subject.input
            : dataInputObject.data.About_Your_Role.input}
        </p>
      </div>
    );
  }
}

class Postview extends React.Component {
  iterateData(isEducation, data) {
    let title = 'Work_Experience';
    if (isEducation) title = 'Education';

    return data[title].array.map((inputObject) => {
      return (
        <Description
          isEducation={isEducation}
          dataInputObject={inputObject}
          key={inputObject.postviewid}
        />
      );
    });
  }

  render() {
    const { data, lightmodeClassName } = this.props;

    return (
      <div className="Postview">
        <div className={`resumeHolder resumeHolder-${lightmodeClassName}`}>
          <div
            className="resume"
            ref={(element) => (this.componentRef = element)}
          >
            <br></br>
            <Header dataInputObject={data.Personal_Information.array[0]} />
            <div className="resumeInfo">
              <div className="workExperience">
                <h2 className="resumeInfoTitle">Experience</h2>
                <div className="WorkExperienceDivs experienceTitle">
                  {this.iterateData(false, data)}
                </div>
              </div>

              <div className="educationResumeInfo  experienceTitle">
                <h2 className="resumeInfoTitle">Education</h2>
                <div className="educationDivs">
                  {this.iterateData(true, data)}
                </div>
              </div>
            </div>
          </div>

          <div className="buttonHolder">
            <ReactToPrint
              trigger={() => (
                <button className=" printButton buttonStyle">Print</button>
              )}
              content={() => this.componentRef}
              documentTitle="resume"
              pageStyle="print"
              removeAfterPrint
            />

            {/* <button className=" printButton buttonStyle">Print</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Postview;
