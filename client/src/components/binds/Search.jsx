import { React, useState } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import * as bindsService from "../../services/bindsService";
import BindsContext from "../../contexts/bindsContext";

const searchFormKeys = {
  SearchOrder: "searchorder",
  SearchCity: "searchcity",
  SearchDay: "searchday",
};

export default function Search() {
  const { searchSubmitHandler } = useContext(BindsContext);

  const { formValues, onChange, onSubmit } = useForm(searchSubmitHandler, {
    [searchFormKeys.SearchOrder]: "",
    [searchFormKeys.SearchCity]: "",
    [searchFormKeys.SearchDay]: "",
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
          name="searchcity"
          onChange={onChange}
          values={formValues[searchFormKeys.SearchCity]}
          //!make the placeholder and all login to search for CITY NOT TIME
          placeholder="Какво ще пазаруваш?"
        />
      </div>
      <div style={{ marginLeft: "50%" }} className="col-lg-2 ">
        <button type="submit" className="btn btn-info">
          <span className="lnr lnr-magnifier" /> Търсене
        </button>
      </div>
      <div style={{ marginRight: "0%" }} className="col-lg-2 ">
        <button type="submit" className="btn btn-info">
          <span className="lnr lnr-magnifier" /> Специялам поръчка
        </button>
      </div>
      <div style={{ marginRight: "0%" }} className="col-lg-2 ">
        <button type="submit" className="btn btn-info">
          <span className="lnr lnr-magnifier" /> Добави продукт за еднократна поръчка
        </button>
      </div>
    </form>
  );
}
