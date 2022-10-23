import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Amazing grilled steak!!',
    },
    {
      id: 2,
      rating: 7,
      text: 'Food was great, but expensive.',
    },
    {
      id: 3,
      rating: 3,
      text: 'Order was not ready when I was told to arrive.',
    },
  ])

  const [activeFeedback, setActiveFeedback] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this review?')) {
      setFeedback(feedback.filter((i) => i.id !== id))
    }
    console.log("app", id)
  }

  const editFeedback = (item) => {
    setActiveFeedback({
      item: item,
      edit: true,
    })
  }
  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }

  const updateFeedback = (id, updated) => {
    setFeedback(feedback.map((i) => i.id === id ? { ...i, ...updated } : i))
  }

  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    activeFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;