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

       <section class="callto-action-area section-gap" id="join">
         <div class="container">
           <div class="row d-flex justify-content-center">
             <div class="menu-content col-lg-9">
               <div class="title text-center">
                 <h1 class="mb-10 text-white">
                   Join us today without any hesitation
                 </h1>
                 <p class="text-white">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                   do eiusmod tempor incididunt ut labore et dolore magna
                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                 </p>
                 <a class="primary-btn" href="#">
                   I am a Candidate
                 </a>
                 <a class="primary-btn" href="#">
                   Request Free Demo
                 </a>
               </div>
             </div>
           </div>
         </div>
       </section>

     </>
   );
}