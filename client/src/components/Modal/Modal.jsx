import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import Form from "../Forma/Form";
import "./modalStyle.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../../store/selectors";
import { udateComent } from "../../store/actions";

const Modal = (props) => {
  const dispatch = useDispatch();
  const messageArray = useSelector(getMessage);
  const {
    _id,
    urlImage,
    url,
    country,
    name,
    nameArray,
    toggleIsOpenModal,
  } = props;
  
  setTimeout(
    () =>
      fetch(`http://localhost:5000/api/users/${_id}`)
        .then((res) => res.json())
        .then((result) => {
          dispatch(udateComent(result.[nameArray]));
        }),
    100
  );
  useEffect(() => {
    const polzun = document.getElementById('messages');
    polzun.scrollTop = polzun.scrollHeight;
  });

  return (
    <div className="modalOverlay" onClick={() => toggleIsOpenModal(_id)}>
      <div className="modalwindow" onClick={(e) => e.stopPropagation()}>
        <div className="modalwindow__container">
          <div>
            <img className="modalwindow__img" src={urlImage} alt="user" />
          </div>
          <div className="max-box">
            <div className="user-container">
              <div>
                <img src={url} alt="user" className="icon-c" />
              </div>
              <div>
                <h2>{name}</h2>
                <h3>{country}</h3>
              </div>
            </div>
            <div className="message-box" id="messages">
              {messageArray.map((item) => (
                <li className="message-container">
                  <div>
                    <Link
                      to={item.autor}
                      key={item.urlUser}
                      className="icon-cont"
                    >
                      <img
                        src={item.urlUser}
                        alt={item.autor}
                        className="icon-c"
                      />
                      <h2>{item.autor}</h2>
                    </Link>
                  </div>
                  <div>
                    <p className="text-c">{item.message}</p>
                  </div>
                </li>
              ))}
            </div>
            <div>
              <Form _id={_id} url={url} nameArray={nameArray} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
