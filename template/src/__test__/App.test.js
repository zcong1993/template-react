import ReactDOM from 'react-dom'
// import { shallow } from 'enzyme'
import App from '../App'
// import Title from '../components/Title'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
