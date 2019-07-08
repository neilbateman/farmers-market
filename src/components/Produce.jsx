import React from 'react';
import PropTypes from 'prop-types';
import ProduceItem from './ProduceItem';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Produce(props){

  const classes = useStyles();
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{props.month}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ul>
          {props.selection.map((item, index)=>
            <ProduceItem name={item}
              key={index}
            />
          )}

        </ul>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,

};
export default Produce;
