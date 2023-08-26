import { List, Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({onGoodClick,onNeutralClick,onBadClick}) => {
    return (
        <List>
            <li><Button onClick={onGoodClick} id="good">Good</Button></li>
            <li><Button onClick={onNeutralClick} id="neutral">Neutral</Button></li>
            <li><Button onClick={onBadClick} id="bad">Bad</Button></li>
        </List>  

    )
}

FeedbackOptions.propTypes = {
    onButtons: PropTypes.func,
}