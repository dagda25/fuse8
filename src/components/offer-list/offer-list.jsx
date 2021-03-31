import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";
import OfferItem from "../offer-item/offer-item";
import './offer-list.scss';

const OfferList = (props) => {
  const {data, filterString} = props;
 
  if (!data) {
  	return <img className="loader" src="/img/loader.gif" />
  }

  let filteredData = [...data];
  if (filterString && filterString.trim().length > 3) {
  	filteredData = data.filter((item) => {
  		return item.title.toLowerCase().includes(filterString.trim().toLowerCase());
  	})
  }

  return (
	  <section className="offer-section">
	  	<ul className="offer-section__offer-list">
	  	  {
		  	  filteredData.map((item) => {
		  	  	return (
		  	  		<OfferItem offerData={item} key={item.id}/>
		  	  	)
		  	  })
	  	  }
	  	</ul>
	  	<button className="offer-section__see-more-button">See more</button>
	  </section>
  );
};

OfferList.propTypes = {

};

const mapStateToProps = ({APP}) => ({
  data: APP.data,
  filterString: APP.filterString,
});


export default connect(mapStateToProps)(OfferList);
