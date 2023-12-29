import { React, useState } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import * as bindsService from "../../services/bindsService";
import BindsContext from "../../contexts/bindsContext";
import { Link } from "react-router-dom";

const searchFormKeys = {
  SearchProduct: "searchproduct",

};

export default function Search() {
  const { searchSubmitHandler } = useContext(BindsContext);

  const { formValues, onChange, onSubmit } = useForm(searchSubmitHandler, {
    [searchFormKeys.SearchProduct]: "",
  });

  return (
    <form
      method="POST"
      onSubmit={onSubmit}
      allig
      className="serach-form-area"
      style={{
        display: "flex",
        alignItems: "center",
        boxShadow: "10px 10px 10px 8px  lightblue",
        padding: "1%",
        marginTop: "4%",
        marginLeft: "18%",
        marginRight: "18%",
        marginBottom: "4%",
      }}
    >
      <div className="col-lg-4 ">
        <input
          style={{ textAlign: "center" }}
          type="text"
          className="form-control"
          name="searchproduct"
          onChange={onChange}
          values={formValues[searchFormKeys.SearchProduct]}
          //!make the placeholder and all login to search for CITY NOT TIME
          placeholder="Какво ще пазаруваш?"
        />
      </div>

      <div className="col-lg-2 " style={{ paddingLeft: "50%" }}>
        <button type="submit" className="btn btn-info">
          <span className="lnr lnr-magnifier" /> Търсене
        </button>
      </div>
    </form>
  );
}
