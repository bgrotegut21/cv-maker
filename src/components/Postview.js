import React from 'react';
import emailIcon from '../icons/email.svg';
import locationIcon from '../icons/location.svg';
import phoneIcon from '../icons/phone.svg';
import '../styles/Postview.css';

import uniqid from 'uniqid';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2 className="emptyH2">An Empty H2 Tag</h2>
        <div className="head">
          <div className="names">
            <h2>Joe Webb</h2>
            <h3>Frontend Engineer</h3>
          </div>

          <div className="iconsHolder">
            <div className="resumeIcons">
              <div className="resumeIcon">
                <img src={phoneIcon} alt="phone icon" />
                <p>(801) 123 4567</p>
              </div>

              <div className="resumeIcon">
                <img src={emailIcon} alt="email icon" />
                <p>joewebb@gmail.com</p>
              </div>

              <div className="resumeIcon">
                <img src={locationIcon} alt="location icon" />
                <p>San Fransisco, CA</p>
              </div>
            </div>

            <h2>JOE SMITH</h2>
            <p>Frontend Engineer</p>
          </div>
        </div>

        <div className="description">
          <p className="descriptionText"></p>
        </div>

        <div className="line"></div>
      </div>
    );
  }
}

class Description extends React.Component {
  render() {
    const { dataInputObject, isEducation } = this.props;

    return (
      <div className="Descrpition">
        <div className="titleInfo">
          <p className="descriptionTitle">
            {isEducation
              ? dataInputObject.Degree.input
              : dataInputObject.Title.input}
          </p>
          <div className="descriptionInfo">
            <p>
              {isEducation
                ? dataInputObject.School_Name.input
                : dataInputObject.Company.input}
              {isEducation && `, ${dataInputObject.Location.input}`} |
            </p>

            <p className="times descriptionTitle">
              {`${dataInputObject.Start_Date.input} - ${dataInputObject.End_Date.input}`}
            </p>
          </div>
        </div>

        <p className="descriptionText">
          {isEducation
            ? dataInputObject.About_Your_Subject.input
            : dataInputObject.About_Your_Role.input}
        </p>
      </div>
    );

    // return (
    //   <div className="Descrpition">
    //     <div className="titleInfo">
    //       <p className="descriptionTitle">
    //         {isEducation
    //           ? dataInputObject.Degree.input
    //           : dataInputObject.Title.input}
    //       </p>
    //       <div className="descriptionInfo">
    //         <p>
    //           {dataInputObject.Company.input}
    //           {isEducation && `, ${dataInputObject.Location.input}`} |
    //         </p>

    //         <p className="times descriptionTitle">
    //           {`${dataInputObject.Start_Date.input} - ${dataInputObject.End_Date.input}`}
    //         </p>
    //       </div>
    //     </div>

    //     <p className="descriptionText">
    //       {dataInputObject.About_Your_Role.input}
    //     </p>
    //   </div>
    // );
  }
}

class Postview extends React.Component {
  render() {
    const sampleData = {
      Title: {
        input: 'Front End Engineer',
        isLarge: false,
        id: uniqid(),
      },
      Company: {
        input: 'Adobe',
        isLarge: false,
        id: uniqid(),
      },
      Start_Date: {
        input: '2018',
        isLarge: false,
        id: uniqid(),
      },
      End_Date: {
        input: 'Present',
        isLarge: false,
        id: uniqid(),
      },
      About_Your_Role: {
        input:
          'I help create the next future software for designs and illustration',
        isLarge: true,
        id: uniqid(),
      },
    };

    return (
      <div className="Postview">
        <div className="resume">
          <Header />
          <div className="resumeInfo">
            <Description dataInputObject={sampleData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Postview;
