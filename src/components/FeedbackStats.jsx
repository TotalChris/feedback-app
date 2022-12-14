import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext);
  //calculate avg
  let avg = feedback.reduce((a, c) => {
    return a + (c.rating)
  }, 0) / feedback.length;
  avg = avg.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avg) ? "None" : avg}</h4>
    </div>
  )
}

export default FeedbackStats