import PropTypes from 'prop-types';
import { Notification } from "../Notification/Notification";
import { Title, Text } from "./Statistics.styled";

export const Statistics = ({clicksGood, clicksNeutral, clicksBad, sum, part}) => {
    return (
        <>
            <Title>Statistics</Title> 
            {(clicksGood !== 0 || clicksNeutral!== 0 || clicksBad !== 0) ? (<ul>
                <Text>Good: {clicksGood}</Text>
                <Text>Neutral: {clicksNeutral}</Text>
                <Text>Bad: {clicksBad }</Text>
                <Text>Total: { sum}</Text>
                <Text>Positive feedback: {part}%</Text>
            </ul>) : (<Notification message={"There is no feedback"} />)}
            
        </>  

    )
}

Statistics.propTypes = {
    clicksGood: PropTypes.number,
    clicksNeutral: PropTypes.number,
    clicksBad: PropTypes.number,
    sum: PropTypes.number,
    part: PropTypes.number,
}
