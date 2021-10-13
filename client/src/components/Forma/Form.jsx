import axios from "axios";
import React from "react";
import { useState } from "react";
import LogoUser from "../Header/07_yulia_akimenkooo.jpg";
import Icon from "../Icon/Icon";

const Form = (props) => {
  const { _id, nameArray } = props;
  const [values, setValues] = useState({
    _id: _id,
    photo: nameArray,
    autor: "yulia_akimenkooo",
    message: "",
    urlUser: LogoUser,
  });

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/users", values)
      .then((res) => {})
      .catch((e) => {
        console.log("Error in Message!");
      });

    setValues({ ...values, message: "" });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="container-coment">
      <Icon type="smile" className="smile-icon" />
      <form onSubmit={submitForm}>
        <div>
          <label className="input-enter" placeholder="Оставьте сообщение...">
            <input
              placeholder="Оставьте сообщение..."
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <button type="submit">Опубликовать</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
