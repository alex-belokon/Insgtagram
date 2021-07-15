import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import Icon from '../Icon/Icon';
import "./style.scss"
// import { useDispatch, useSelector } from 'react-redux';
// import { udateComent, updateCardsStore } from '../../store/actions';
// import { getComent } from '../../store/selectors';
// import { useEffect } from 'react';


const FormikSignup = (props) => {
    
    // const {id, cards} = props
    // const dispatch = useDispatch()
    // const coment = useSelector(getComent)
    const [count, setCount] = useState("");

  
      const handleSubmitForm = (values) => {
          const {coment} = values
          setCount(coment)
          
          //dispatch(udateComent(coment))
        
    }




    // const addComent = (id, coment) => { 
    //     const val= coment
    //     console.log("111111", val);  
    //     const newAr=cards.map(el => {
    //       if(el.id === id) {
    //       el.values = `Имя пользователя:    ${val}`
          
    //       }
    //       return el
          
    //     })

    //     setCount(newAr)
    //   } 

    
    return (
        <div className="container-coment">
           
            <Icon type="smile" className="smile-icon" />
            <Formik
                initialValues={{
                    coment: '' 
                }}
                onSubmit={handleSubmitForm}         
            >
                {(formikProps) => {
                 return (
                    <Form >
                        <div>
                            <label >
                            <Field
                            className="input-enter" 
                            placeholder="Оставьте сообщение..."
                             name="coment"  
                             value={formikProps.values.coment} 
                             type="textarea" />
                            </label>
                        </div>
                        <button type="submit">Опубликовать</button>
                    </Form>
                    )
                }}
            </Formik>
            {count}

        </div>
    )
}

export default FormikSignup;