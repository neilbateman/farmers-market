import React from 'react';
import PropTypes from 'prop-types';

function ProduceItem(props) {
return (
    <li>{props.name}</li> 
    )
}

ProduceItem.propTypes = {
    name: PropTypes.string
};
export default ProduceItem;

