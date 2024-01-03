export default function BindLeftSearchOptions(){
    return (
        <div className="job-listing-area pt-120 pb-120">
  <div className="container">
    <div className="row">
      {/* Left content */}
      <div className="col-xl-3 col-lg-3 col-md-4">
        <div className="row">
          <div className="col-12">
            <div className="small-section-tittle2 mb-45">
              <div className="ion">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20px"
                  height="12px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(27, 207, 107)"
                    d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                  />
                </svg>
              </div>
              <h4>Filter Jobs</h4>
            </div>
          </div>
        </div>
        {/* Job Category Listing start */}
        <div className="job-category-listing mb-50">
          {/* single one */}
          <div className="single-listing">
            <div className="small-section-tittle2">
              <h4>Job Category</h4>
            </div>
            {/* Select job items start */}
            <div className="select-job-items2">
              <select name="select">
                <option value="">All Category</option>
                <option value="">Category 1</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
                <option value="">Category 4</option>
              </select>
            </div>
            {/*  Select job items End*/}
            {/* select-Categories start */}
            <div className="select-Categories pt-80 pb-50">
              <div className="small-section-tittle2">
                <h4>Job Type</h4>
              </div>
              <label className="container">
                Full Time
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="container">
                Part Time
                <input type="checkbox" defaultChecked="checked active" />
                <span className="checkmark" />
              </label>
              <label className="container">
                Remote
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="container">
                Freelance
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
            {/* select-Categories End */}
          </div>
          {/* single two */}
          <div className="single-listing">
            <div className="small-section-tittle2">
              <h4>Job Location</h4>
            </div>
            {/* Select job items start */}
            <div className="select-job-items2">
              <select name="select">
                <option value="">Anywhere</option>
                <option value="">Category 1</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
                <option value="">Category 4</option>
              </select>
            </div>
            {/*  Select job items End*/}
            {/* select-Categories start */}
            <div className="select-Categories pt-80 pb-50">
              <div className="small-section-tittle2">
                <h4>Experience</h4>
              </div>
              <label className="container">
                1-2 Years
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="container">
                2-3 Years
                <input type="checkbox" defaultChecked="checked active" />
                <span className="checkmark" />
              </label>
              <label className="container">
                3-6 Years
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="container">
                6-more..
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
            {/* select-Categories End */}
          </div>
          {/* single three */}
          <div className="single-listing">
            {/* select-Categories start */}
            <div className="select-Categories pb-50">
              <div className="small-section-tittle2">
                <h4>Posted Within</h4>
              </div>
              <label className="container">
                Any
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="container">
                Today
                <input type="checkbox" defaultChecked="checked active" />
                <span className="checkmark" />
              </label>
              <label className="container">
                Last 2 days
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="container">
                Last 3 days
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="container">
                Last 5 days
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <label className="container">
                Last 10 days
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
            {/* select-Categories End */}
          </div>
          <div className="single-listing">
            {/* Range Slider Start */}
            <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
              <div className="small-section-tittle2">
                <h4>Filter Jobs</h4>
              </div>
              <div className="widgets_inner">
                <div className="range_item">
                  {/* <div id="slider-range"></div> */}
                  <input
                    type="text"
                    className="js-range-slider"
                    defaultValue=""
                  />
                  <div className="d-flex align-items-center">
                    <div className="price_text">
                      <p>Price :</p>
                    </div>
                    <div className="price_value d-flex justify-content-center">
                      <input
                        type="text"
                        className="js-input-from"
                        id="amount"
                        readOnly=""
                      />
                      <span>to</span>
                      <input
                        type="text"
                        className="js-input-to"
                        id="amount"
                        readOnly=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            {/* Range Slider End */}
          </div>
        </div>
        {/* Job Category Listing End */}
      </div>
    </div>
  </div>
</div>

    )
}