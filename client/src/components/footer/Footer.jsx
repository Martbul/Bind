export default function Footer() {
   return (
     <footer className="ftco-footer ftco-section  info_section img ">
       <div className="overlay"></div>
       <div className="container">
         <div className="row mb-5">
           <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
             <div className="ftco-footer-widget mb-4">
               <h2 className="ftco-heading-2">About Us</h2>
               <p>
                 Get your groceries every week without worrying or losing time.
               </p>
               <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                 <li className="ftco-animate">
                   <a href="#">
                     <span className="icon-twitter"></span>
                   </a>
                 </li>
                 <li className="ftco-animate">
                   <a href="#">
                     <span className="icon-facebook"></span>
                   </a>
                 </li>
                 <li className="ftco-animate">
                   <a href="#">
                     <span className="icon-instagram"></span>
                   </a>
                 </li>
               </ul>
             </div>
           </div>

           <div className="col-lg-2 col-md-6 mb-5 mb-md-5">
             <div className="ftco-footer-widget mb-4 ml-md-4">
               <h2 className="ftco-heading-2">Services</h2>
               <ul className="list-unstyled">
                 <li>
                   <a href="#" className="py-2 d-block">
                     Get weekly delivery
                   </a>
                 </li>
                 <li>
                   <a href="#" className="py-2 d-block">
                     Saving time
                   </a>
                 </li>
                 <li>
                   <a href="#" className="py-2 d-block">
                     Quality
                   </a>
                 </li>
               </ul>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
             <div className="ftco-footer-widget mb-4">
               <h2 className="ftco-heading-2">Have a Questions?</h2>
               <div className="block-23 mb-3">
                 <ul>
                   <li>
                     <span className="icon icon-map-marker"></span>
                     <span className="text">
                       St. Pobeda 203, Sofia, Bulgaria
                     </span>
                   </li>
                   <li>
                     <a href="#">
                       <span className="icon icon-phone"></span>
                       <span className="text">+359 888 5719 91</span>
                     </a>
                   </li>
                   <li>
                     <a href="#">
                       <span className="icon icon-envelope"></span>
                       <span className="text">martbul01@gmail.com</span>
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           <div className="col-md-3 col-lg-3 col-md-6 mb-5 mb-md-5">
             <div className="info_form ftco-footer-widget mb-4">
               <h2 className="ftco-heading-2">Newsletter</h2>
               <form>
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
         <div className="row">
           <div className="col-md-12 text-center">
             <p>
               {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
               Copyright &copy;
               <script>document.write(new Date().getFullYear());</script> All
               rights reserved | This template is made with
               <i className="icon-heart" aria-hidden="true"></i> by{" "}
               <a href="https://github.com/Martbul" target="_blank">
                 Martin Kovachki
               </a>
               {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
             </p>
           </div>
         </div>
       </div>
     </footer>
   );
}