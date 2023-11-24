import { React, useState } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { useContext } from "react";

const searchFormKeys = {
Search:'search',
}

export default function Search() {
  //! NAPRAVI SEARCH
  const { formValues, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [signUpFormKeys.Search]: '',
 
});
  return (
    <form onSubmit={onSubmit}
      className="serach-form-area"
      style={{
        
        boxShadow:'10px 10px 10px lightblue',
        padding: "1%",
        marginTop: "4%",
        marginLeft: "18%",
        marginRight: "18%",
        marginBottom: "4%",
        
      }}
    >
      <div className="row justify-content-center form-wrap">
        <div className="col-lg-4 form-cols">
          <input
            type="text"
            className="form-control"
            name="search"
            onChange={onChange}
            values={formValues[searchFormKeys.Search]}
            placeholder="what are you looging for?"
          />
        </div>
        <div className="col-lg-3 form-cols">
          <div className="default-select" id="default-selects">
            <select>
              <option value={1}>Select city</option>
              <option value={2}>Dhaka</option>
              <option value={3}>Rajshahi</option>
              <option value={4}>Barishal</option>
              <option value={5}>Noakhali</option>
            </select>
          </div>
        </div>
        <div className="col-lg-3 form-cols">
          <div className="default-select" id="default-selects2">
            <select>
              <option value={1}>Select day</option>
              <option value={2}>Medical</option>
              <option value={3}>Technology</option>
              <option value={4}>Goverment</option>
              <option value={5}>Development</option>
            </select>
          </div>
        </div>
        <div className="col-lg-2 form-cols">
          <button type="button" className="btn btn-info">
            <span className="lnr lnr-magnifier" /> Search
          </button>
        </div>
      </div>
    </form>
  );
}
