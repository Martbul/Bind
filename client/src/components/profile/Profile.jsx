import { useContext, useEffect, useState } from "react";
import ProfileContext from "../../contexts/profileContext";

import AuthContext from "../../contexts/authContext";
import * as profileService from "../../services/profileService";

export default function Profile() {
  const [change, setChange] = useState(false)
  
  const { username, email } = useContext(AuthContext);
  let {
    profileInfoHandler,
    userOrder,
    userFirstName,
    userLastName,
    userCountry,
    userCity,
    userPhoneNumber,
    userAboutMeText,
  } = useContext(ProfileContext);


  
  const [profileDetails, setProfileDetails] = useState({
    userUsername: username,
    userEmail: email,
    userOrder,
    userFirstName: userFirstName,
    userLastName,
    userCountry,
    userCity,
    userPhoneNumber,
    userAboutMeText,
  });


  useEffect(() => {
    profileInfoHandler(email);
  }, [email, username, change,]);


  const editGameSubmitHandler = async (e) => {
    e.preventDefault();

    console.log(profileDetails);
    //! add validations
    try {
      await profileService.edit(email, profileDetails);


      setChange(true)
      navigate("/profile");
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };

  const onChange = (e) => {
    // console.log(e.target.name);
    setProfileDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="main-content">
        {/* Header */}
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{ minHeight: 400 }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-white">Hello {username}</h1>
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can see the progress you've
                  made with your work and manage your projects or assigned tasks
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Page content */}
        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <img
                          src="./src/public/images/default-avatar-icon-of-social-media-user-vector.jpg"
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Binds</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Delivers</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      {username}
                      <span className="font-weight-light" />
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      <h4 placeholder="eerere"></h4>
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">My account</h3>
                    </div>
                    <div className="col-4 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        style={{ display: "inline" }}
                        onClick={editGameSubmitHandler}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="userUsername"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              id="userUsername"
                              name="userUsername"
                              className="form-control form-control-alternative"
                              onChange={onChange}
                              value={profileDetails.userUsername}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              htmlFor="userEmail"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              id="userEmail"
                              name="userEmail"
                              className="form-control form-control-alternative"
                              onChange={onChange}
                              value={profileDetails.userEmail}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="userFirstName"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              id="userFirstName"
                              name="userFirstName"
                              className="form-control form-control-alternative"
                              placeholder="John"
                              onChange={onChange}
                              value={profileDetails.userFirstName}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="userLastName"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              id="userLastName"
                              name="userLastName"
                              className="form-control form-control-alternative"
                              placeholder="Smith"
                              onChange={onChange}
                              value={profileDetails.userLastName}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* Order */}
                    <h6 className="heading-small text-muted mb-4">My Order</h6>
                    <div className="pl-lg-4">
                      <div className="form-group focused">
                        <textarea
                          rows={4}
                          className="form-control form-control-alternative"
                          placeholder="2kg tomatos, 5kg potatos and 1kg lemons"
                          name="userOrder"
                          onChange={onChange}
                          value={profileDetails.userOrder}
                        />
                      </div>
                    </div>
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="userCountry"
                            >
                              Country
                            </label>
                            <input
                              type="text"
                              id="userCountry"
                              name="userCountry"
                              className="form-control form-control-alternative"
                              placeholder="England"
                              onChange={onChange}
                              value={profileDetails.userCountry}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="userCity"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              id="userCity"
                              name="userCity"
                              className="form-control form-control-alternative"
                              placeholder="London"
                              onChange={onChange}
                              value={profileDetails.userCity}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              htmlFor="userPhoneNumber"
                            >
                              Phone
                            </label>
                            <input
                              id="userPhoneNumber"
                              name="userPhoneNumber"
                              className="form-control form-control-alternative"
                              placeholder="0888692894"
                              onChange={onChange}
                              value={profileDetails.userPhoneNumber}
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <div className="form-group focused">
                        <textarea
                          rows={4}
                          name="userAboutMeText"
                          className="form-control form-control-alternative"
                          placeholder="A few words about you ..."
                          onChange={onChange}
                          value={profileDetails.userAboutMeText}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer"></footer>
    </>
  );
}
