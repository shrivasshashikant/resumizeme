import React from "react";


const Head = () => {
  return (
    <>
      <div className="account-head">
        <div className="ac-banner">
          <div className="ac-profile">
            <img src={'/suitcase.png'} alt="" />
          </div>
          <div className="account-content">
            <span>Premimum Account</span>
            <p>
            You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Head;
