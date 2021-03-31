import React from "react";
import PropTypes from "prop-types";
import './offer-item.scss';

const OfferItem = (props) => {
  const {offerData} = props;

  return (

    <li className="offer">
      <a href={`/details/` + offerData.id}>
        <div className="offer__image-container">
          <span className={offerData.type === `IndependentLiving` ? `offer__label offer__label--independent` : `offer__label offer__label--support`}>{offerData.type}</span>
          <img className="offer__image" width="377" height="227" src={`https://picsum.photos/377/227?random=` + offerData.id}/>
        </div>
        <div className="offer__description-container">
          <h3 className="offer__title">{offerData.title}</h3>
          <p className="offer__address">{offerData.address}</p>
          <p className="offer__price">New Properties for Sale from <b>&#163;{offerData.price}</b></p>
          <p className="offer__details">Shared Ownership Available</p>
        </div>
      </a>
    </li>

  );
};

OfferItem.propTypes = {

};

export default OfferItem;
