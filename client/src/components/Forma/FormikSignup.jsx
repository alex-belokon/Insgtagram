import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import Icon from "../Icon/Icon";
import "./style.scss";
import LogoUser from "../Header/07_yulia_akimenkooo.jpg";
import axios from "axios";


const FormikSignup = (props) => {
  const {nameArray} = props
  const [initialValues, setInitialValues] = useState("");


  const handleSubmitForm = (values) => {
 

  const valuesID = props._id

  const data = {
    "_id": valuesID,
    "photo": nameArray,
    "autor": "yulia_akimenkooo",
    "message": values.coment,
    "urlUser": LogoUser
  }
  //dispatch(udateComent(values.coment))

   setInitialValues(data)
   
      axios
        .put('http://localhost:5000/api/users', initialValues)
        .then((res) => {
          console.log("Приём данных", res)
        })
        .catch((e) => {
          console.log("Error in Message!");
        });

      console.log(initialValues);
    
      
      
  };

  return (
    <div className="container-coment">
      <Icon type="smile" className="smile-icon" />
      <Formik
        initialValues={{
          coment: "",
        }}
        onSubmit={handleSubmitForm}>
        {(formikProps) => {
          return (
            <Form>
              <div>
                <label>
                  <Field
                    className="input-enter"
                    placeholder="Оставьте сообщение..."
                    name="coment"
                    value={formikProps.values.coment}
                    type="textarea"
                  />
                </label>
              </div>
              <button type="submit">Опубликовать</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikSignup;
