import { List, Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({onClicks}) => {
    return (
        <List>
            <li><Button onClick={()=>onClicks('good')} id="good">Good</Button></li>
            <li><Button onClick={()=>onClicks('neutral')} id="neutral">Neutral</Button></li>
            <li><Button onClick={()=>onClicks('bad')} id="bad">Bad</Button></li>
        </List>  

    )
}

FeedbackOptions.propTypes = {
    onButtons: PropTypes.func,
}