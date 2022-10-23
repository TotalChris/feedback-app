import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/header';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

  return (
  <FeedbackProvider>
  <Router>
    <Header text="Rate Your Experience"/>
    <div className='container'>
      <Routes>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/' element={
          <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </>
        }>
        </Route>
      </Routes>
      <AboutIconLink></AboutIconLink>
    </div>
  </Router>
  </FeedbackProvider>
  )
}

export default App;