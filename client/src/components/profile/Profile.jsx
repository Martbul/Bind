import { useContext, useEffect, useState } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

import * as bindsService from "../../services/bindsService";

const profileFormKeys = {
  Username: "username",
  Email: "email",
  FirstName: "firstname",
  LastName: "lasttname",
  MyOrder: "myorder",
  Country: "country",
  City: "city",
  PhoneNumber: "phoneNumber",
  AboutMe: "aboutme",
  OrdersMade: "ordersmade",
  BindsDeliverd: "bindsdeliverd",
  Rating: "rating",
};

export default function Profile() {

  const {username, email } = useContext(AuthContext)
const [userOrder, setUserOrder] = useState()

//! logica za namirane na porychka na usera
//  let userOrder = ''

  // useEffect(() => {
  //   bindsService.getUserOrder(email).then((result) => userOrder = result);
  // }, [email]);




  const logger = (formValues) => {
    console.log(formValues);
  };
  const { formValues, onChange, onSubmit } = useForm(logger, {
    [profileFormKeys.Username]: username,
    [profileFormKeys.Email]: email,
    [profileFormKeys.FirstName]: "",
    [profileFormKeys.LastName]: "",
    [profileFormKeys.Country]: "",
    [profileFormKeys.City]: "",
    [profileFormKeys.Address]: "",
    [profileFormKeys.AboutMe]: "",
    [profileFormKeys.OrdersMade]: "",
    [profileFormKeys.BindsDeliverd]: "",
    [profileFormKeys.Rating]: "",
  });

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
                   made with your work and manage your projects or assigned
                   tasks
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
                     <div>
                       <i className="ni education_hat mr-2" />
                       University of Computer Science
                     </div>
                     <hr className="my-4" />
                     <p>
                       Ryan — the name taken by Melbourne-raised, Brooklyn-based
                       Nick Murphy — writes, performs and records all of his own
                       music.
                     </p>
                     <a href="#">Show more</a>
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
                       <a
                         href="/editProfile"
                         className="btn btn-sm btn-primary"
                         style={{ display: "inline" }}
                       >
                         Edit
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="card-body">
                   <form>
                     <h6 className="heading-small text-muted mb-4">
                       User information
                     </h6>
                     <div className="pl-lg-4">
                       <div className="row">
                         <div className="col-lg-6">
                           <div className="form-group focused">
                             <label
                               className="form-control-label"
                               htmlFor="username"
                             >
                               Username
                             </label>
                             <input
                               type="text"
                               id="username"
                               className="form-control form-control-alternative"
                               onChange={onChange}
                               value={formValues[profileFormKeys.Username]}
                             />
                           </div>
                         </div>
                         <div className="col-lg-6">
                           <div className="form-group">
                             <label
                               className="form-control-label"
                               htmlFor="email"
                             >
                               Email address
                             </label>
                             <input
                               type="email"
                               id="email"
                               className="form-control form-control-alternative"
                               onChange={onChange}
                               value={formValues[profileFormKeys.Email]}
                             />
                           </div>
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-lg-6">
                           <div className="form-group focused">
                             <label
                               className="form-control-label"
                               htmlFor="firstname"
                             >
                               First name
                             </label>
                             <input
                               type="text"
                               id="firstname"
                               className="form-control form-control-alternative"
                               placeholder="First name"
                               onChange={onChange}
                               values={formValues[profileFormKeys.FirstName]}
                             />
                           </div>
                         </div>
                         <div className="col-lg-6">
                           <div className="form-group focused">
                             <label
                               className="form-control-label"
                               htmlFor="lastname"
                             >
                               Last name
                             </label>
                             <input
                               type="text"
                               id="lastname"
                               className="form-control form-control-alternative"
                               placeholder="Last name"
                               onChange={onChange}
                               values={formValues[profileFormKeys.LastName]}
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
                         <label>Order: {}</label>
                         <textarea
                           rows={4}
                           className="form-control form-control-alternative"
                           placeholder="A few words about you ..."
                           onChange={onChange}
                           values={formValues[profileFormKeys.MyOrder]}
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
                               htmlFor="country"
                             >
                               Country
                             </label>
                             <input
                               type="text"
                               id="country"
                               className="form-control form-control-alternative"
                               placeholder="Country"
                               onChange={onChange}
                               values={formValues[profileFormKeys.Country]}
                             />
                           </div>
                         </div>
                         <div className="col-lg-4">
                           <div className="form-group focused">
                             <label
                               className="form-control-label"
                               htmlFor="city"
                             >
                               City
                             </label>
                             <input
                               type="text"
                               id="city"
                               className="form-control form-control-alternative"
                               placeholder="City"
                               onChange={onChange}
                               values={formValues[profileFormKeys.City]}
                             />
                           </div>
                         </div>
                         <div className="col-lg-4">
                           <div className="form-group">
                             <label
                               className="form-control-label"
                               htmlFor="phoneNumber"
                             >
                               Phone number
                             </label>
                             <input
                               id="phoneNumber"
                               className="form-control form-control-alternative"
                               onChange={onChange}
                               values={formValues[profileFormKeys.Address]}
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
                           className="form-control form-control-alternative"
                           placeholder="A few words about you ..."
                           defaultValue={
                             "A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
                           }
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