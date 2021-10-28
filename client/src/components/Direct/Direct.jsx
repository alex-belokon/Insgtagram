import React from "react";
import "./direct.scss";
//import LogoUser from "../Header/07_yulia_akimenkooo.jpg";
import Icon from "../Icon/Icon";
import DirectList from "../DirectList/DirectList";
import noMessage from "../../usersImages/other/directNoImages.jpg";


const Direct = (props) => {
  const { cards } = props;
  return (
    <div className="background">
      <div className="direct-container">
        <div className="direct-container__left">
          <div className="header-boxes">
            <div className="header-boxes__box-1">
              <h3>yulia_akimenkooo</h3>
            </div>
            <div className="header-boxes__box-2">
              <Icon type="arrowLow" />
            </div>
            <div className="header-boxes__box-3">
              <Icon type="newMessage" />
            </div>
          </div>
          <div>
            <DirectList cards={cards} />
          </div>
        </div>
        <div className="direct-container__right">
          <img src={noMessage} className="images-noMessage" alt="directImg"/>
          <h3>Ваши сообщения</h3>
          <p>Отправляйте личные фото и сообщения другу или группе.</p>
          {/* <Button type="button" class="btn btn-primary">
            Primary
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Direct;
