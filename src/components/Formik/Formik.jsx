import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import MyInput1 from "./MyInput";
import Button from "../Button/Index";
import './style.scss'
import { getValues } from "../../store/selectors";
import { dataAge, dataDelivery, dataMobil, dataName, dataSurname } from "../../store/actions";


const validationFormSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required')
        .min(2, 'Too Short Name!'),
    surname: Yup.string()
        .required('Required')
        .min(2, 'Too Short Surname!'),
    age: Yup.number()
        .required('Required')
        .min(18, 'You can pay after 18 age!'),
    delivery: Yup.string()
        .required('Required')
        .min(5, 'Too Short delivery!'),
    mobil: Yup.number()
        .required('Required')
        .min(8, 'Too Short mobil!'),

})

const Formik1 = (props) => {
    const { cards } = props
    const medicCart = cards.filter(el => el.added).map(el => el.title)

    const dispatch = useDispatch()
    const values = useSelector(getValues)

    const submitForm = (values) => {
        const { name } = values
        dispatch(dataName(name))
        localStorage.removeItem('added')
        console.log(`Имя пользователя: ${name}`)
   
    };

    return (
        <div className="container-form">
            <h1>Форма заказа</h1>
            <Formik
                initialValues={values}
                onSubmit={submitForm}
                validationSchema={validationFormSchema}
            >
                {(formikProps) => {
                    return (
                        <div >
                            <Form>
                                <Field component={MyInput1} name="name" type="textarea" label="Добавьте комментарий..." />
                                <div>
                                    <Button type="submit" text="Send form" />
                                </div>
                            </Form>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Formik1;