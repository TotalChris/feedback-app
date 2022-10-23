import { useContext, useState, useEffect } from "react"
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText]= useState('');
  const [rating, setRating]= useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const {addFeedback, activeFeedback, updateFeedback} = useContext(FeedbackContext);

  useEffect(() => {
    if(activeFeedback.edit === true){
      setBtnDisabled(false);
      setText(activeFeedback.item.text);
      setRating(activeFeedback.item.rating);
    }
  }, [activeFeedback])

  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if(text !== '' && text.trim().length <= 10) {
      setMessage('Review must be greater than 10 characters');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10){
      const newFeedback = { text, rating }
      if(activeFeedback.edit === true){
        updateFeedback(activeFeedback.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your experience with Chipotle?</h2>
         <RatingSelect select={(rating) => {setRating(rating)}}></RatingSelect>
         <div className="input-group">
          <input type="text" name="Write A Review" value={text} placeholder="Write A Review" onChange={handleTextChange}/>
          <Button type="submit" version='secondary' isDisabled={btnDisabled}>Post</Button>
         </div>

         {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm