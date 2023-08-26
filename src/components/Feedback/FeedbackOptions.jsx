import { List, Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({onButtons}) => {
    return (
        <List>
            <li><Button onClick={() => onButtons('good')} id="good">Good</Button></li>
            <li><Button onClick={() => onButtons('neutral')} id="neutral">Neutral</Button></li>
            <li><Button onClick={() => onButtons('bad')} id="bad">Bad</Button></li>
        </List>  

    )
}

FeedbackOptions.propTypes = {
    onButtons: PropTypes.func,
}