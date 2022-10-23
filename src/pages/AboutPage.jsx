import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1>About this Project</h1>
      <p>This is a React-based app to leave feedback about Chipotle customer experiences</p>
      <p>Version 1.a</p>

      <Link to='/'>Go To Main Page</Link>
    </Card>
  )
}

export default AboutPage