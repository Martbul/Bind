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
       
         {/* end header section */}
       </div>
       {/* about section */}
       <section className="about_section layout_padding">
         <div className="container">
           <div className="row">
             <div className="col-md-6 px-0">
               <div className="img_container">
                 <div className="img-box">
                   <img src="images/about-img.jpg" alt="" />
                 </div>
               </div>
             </div>
             <div className="col-md-6 px-0">
               <div className="detail-box">
                 <div className="heading_container ">
                   <h2>Who Are We?</h2>
                 </div>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                   do eiusmod tempor incididunt ut labore et dolore magna
                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                   ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                   aute irure dolor in reprehenderit in voluptate velit
                 </p>
                 <div className="btn-box">
                   <a href="">Read More</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* end about section */}
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