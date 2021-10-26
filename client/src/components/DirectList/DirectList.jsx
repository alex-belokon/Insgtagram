import React from "react";
import "./directList.scss";
import Icon from "../Icon/Icon";
import DirectUser from "../DirectUser/DirectUser";

const DirectList = (props) => {
  const { cards } = props;
  console.log(cards);

  return (
    <div>
      <div className="directList">
        {cards.map((el) => (
          <DirectUser key={el._id} name={el.name}
           url={el.url} _id={el._id} />
        ))}
      </div>
    </div>
  );
};

export default DirectList;
