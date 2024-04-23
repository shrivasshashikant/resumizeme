import React from "react";

const Form = () => {
  return (
    <section className="user-form">
      <h2>Personal Information</h2>
      <div className="form-main">
        <div className="personal">
        <form>
          <div className="form">       
              <div className="form-row">
                <div className="col-6">
                  <div className="form-input">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="form-input">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-input">
                    <label>City</label>
                    <input type="text" placeholder="City" />
                  </div>
                  <div className="form-input">
                    <label>Postal Code</label>
                    <input type="text" placeholder="Postal Code" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-input">
                    <label>Address</label>
                    <input type="text" placeholder="Address" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-input">
                    <label>Email</label>
                    <div className="input-img">
                      <input type="text" placeholder="Email" />
                      <img src={"/check.svg"} alt="check" className="icon" />
                    </div>
                  </div>
                  <div className="form-input">
                  <label>Password</label>
                    <input type="text" placeholder="Password"/>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-input">
                    <label>Phone</label>
                    <input type="text" placeholder="Phone" />
                  </div>
                </div>
              </div>
          </div>
          <div className="deatil">
            <h5>
              Use This email to log in to your <span>resumedone.io</span> {" "}
              account and received Information.
            </h5>
          </div>
          <div className="btn">
            <button type="submit">Save</button>
          </div>
          </form>
          <div className="botom">
            <div className="check">
              <input type="checkbox" />
            </div>
            <div className="p-3">
              <p>
                Show My Profile To serius employers <span>hirethesbext.io</span>  {" "}
                for me.
              </p>
            </div>
          </div>
        </div>
        <div className="user-profile">
          <img src={"/profile.png"} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Form;
