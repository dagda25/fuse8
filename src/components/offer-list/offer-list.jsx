import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import OfferItem from "../offer-item/offer-item";
import './offer-list.scss';

const OfferList = (props) => {
  const {data, filterString} = props;

  if (!data) {
    return <img className="loader" src="/img/loader.gif" />;
  }

  let filteredData = [...data];
  if (filterString && filterString.trim().length > 3) {
    filteredData = data.filter((item) => {
      return item.title.toLowerCase().includes(filterString.trim().toLowerCase());
    });
  }

  return (
    <section className="offer-section">
      <ul className="offer-section__offer-list">
        {
          filteredData.map((item) => {
            return (
              <OfferItem offerData={item} key={item.id}/>
            );
          })
        }
      </ul>
      <button className="offer-section__see-more-button" onClick={(evt) => {
        evt.preventDefault();
      }}>See more
        <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" strokeWidth="2" strokeLinecap="round"/>
        </svg>

      </button>
    </section>
  );
};

OfferList.propTypes = {
  data: PropTypes.array,
  filterString: PropTypes.string
};

const mapStateToProps = ({APP}) => ({
  data: APP.data,
  filterString: APP.filterString,
});


export default connect(mapStateToProps)(OfferList);
