export default function About() {
   return (
     <>
       <div className="hero_area">
         {/* header section strats */}
         <div className="hero_bg_box">
           <div className="img-box">
             <img src="images/hero-bg.jpg" alt="" />
           </div>
         </div>
         <header className="header_section">
           <div className="header_top">
             <div className="container-fluid">
               <div className="contact_link-container">
                 <a href="" className="contact_link1">
                   <i className="fa fa-map-marker" aria-hidden="true" />
                   <span>Lorem ipsum dolor sit amet,</span>
                 </a>
                 <a href="" className="contact_link2">
                   <i className="fa fa-phone" aria-hidden="true" />
                   <span>Call : +01 1234567890</span>
                 </a>
                 <a href="" className="contact_link3">
                   <i className="fa fa-envelope" aria-hidden="true" />
                   <span>demo@gmail.com</span>
                 </a>
               </div>
             </div>
           </div>
           <div className="header_bottom">
             <div className="container-fluid">
               <nav className="navbar navbar-expand-lg custom_nav-container">
                 <a className="navbar-brand" href="index.html">
                   <span>Guarder</span>
                 </a>
                 <button
                   className="navbar-toggler"
                   type="button"
                   data-toggle="collapse"
                   data-target="#navbarSupportedContent"
                   aria-controls="navbarSupportedContent"
                   aria-expanded="false"
                   aria-label="Toggle navigation"
                 >
                   <span className="" />
                 </button>
                 <div
                   className="collapse navbar-collapse ml-auto"
                   id="navbarSupportedContent"
                 >
                   <ul className="navbar-nav  ">
                     <li className="nav-item ">
                       <a className="nav-link" href="index.html">
                         Home <span className="sr-only">(current)</span>
                       </a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="about.html">
                         {" "}
                         About
                       </a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="service.html">
                         {" "}
                         Services{" "}
                       </a>
                     </li>
                     <li className="nav-item active">
                       <a className="nav-link" href="guard.html">
                         {" "}
                         Guards{" "}
                       </a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="contact.html">
                         Contact us
                       </a>
                     </li>
                   </ul>
                 </div>
               </nav>
             </div>
           </div>
         </header>
         {/* end header section */}
       </div>
       {/* team section */}
       <section className="team_section layout_padding">
         <div className="container">
           <div className="heading_container heading_center">
             <h2>Our Guards</h2>
             <p>
               Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a
               euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget
               vitae malesuada, tortor tincidunt porta lorem lectus.
             </p>
           </div>
           <div className="row">
             <div className="col-md-4 col-sm-6 mx-auto ">
               <div className="box">
                 <div className="img-box">
                   <img src="images/t1.jpg" alt="" />
                 </div>
                 <div className="detail-box">
                   <h5>Martin Anderson</h5>
                   <h6 className="">supervisor</h6>
                 </div>
               </div>
             </div>
             <div className="col-md-4 col-sm-6 mx-auto ">
               <div className="box">
                 <div className="img-box">
                   <img src="images/t2.jpg" alt="" />
                 </div>
                 <div className="detail-box">
                   <h5>Denny Butler</h5>
                   <h6 className="">supervisor</h6>
                 </div>
               </div>
             </div>
             <div className="col-md-4 col-sm-6 mx-auto ">
               <div className="box">
                 <div className="img-box">
                   <img src="images/t3.jpg" alt="" />
                 </div>
                 <div className="detail-box">
                   <h5>Nathan Mcpherson</h5>
                   <h6 className="">supervisor</h6>
                 </div>
               </div>
             </div>
           </div>
           <div className="btn-box">
             <a href="">View All</a>
           </div>
         </div>
       </section>
       {/* end team section */}
       {/* info section */}
       <section className="info_section ">
         <div className="container">
           <div className="row">
             <div className="col-md-3">
               <div className="info_logo">
                 <a className="navbar-brand" href="index.html">
                   <span>Guarder</span>
                 </a>
                 <p>
                   dolor sit amet, consectetur magna aliqua. Ut enim ad minim
                   veniam, quisdotempor incididunt r
                 </p>
               </div>
             </div>
             <div className="col-md-3">
               <div className="info_links">
                 <h5>Useful Link</h5>
                 <ul>
                   <li>
                     <a href="">dolor sit amet, consectetur</a>
                   </li>
                   <li>
                     <a href="">magna aliqua. Ut enim ad</a>
                   </li>
                   <li>
                     <a href="">minim veniam,</a>
                   </li>
                   <li>
                     <a href="">quisdotempor incididunt r</a>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="col-md-3">
               <div className="info_info">
                 <h5>Contact Us</h5>
               </div>
               <div className="info_contact">
                 <a href="" className="">
                   <i className="fa fa-map-marker" aria-hidden="true" />
                   <span>Lorem ipsum dolor sit amet,</span>
                 </a>
                 <a href="" className="">
                   <i className="fa fa-phone" aria-hidden="true" />
                   <span>Call : +01 1234567890</span>
                 </a>
                 <a href="" className="">
                   <i className="fa fa-envelope" aria-hidden="true" />
                   <span>demo@gmail.com</span>
                 </a>
               </div>
             </div>
             <div className="col-md-3">
               <div className="info_form ">
                 <h5>Newsletter</h5>
                 <form action="#">
                   <input type="email" placeholder="Enter your email" />
                   <button>Subscribe</button>
                 </form>
                 <div className="social_box">
                   <a href="">
                     <i className="fa fa-facebook" aria-hidden="true" />
                   </a>
                   <a href="">
                     <i className="fa fa-twitter" aria-hidden="true" />
                   </a>
                   <a href="">
                     <i className="fa fa-youtube" aria-hidden="true" />
                   </a>
                   <a href="">
                     <i className="fa fa-instagram" aria-hidden="true" />
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     </>
   );
}