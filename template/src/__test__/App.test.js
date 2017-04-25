import ReactDOM from 'react-dom'
<%_ if (enzyme) { -%>
import { shallow } from 'enzyme'
<%_ } -%>
import App from '../App'
<%_ if (enzyme) { -%>
import Title from '../components/Title'
<%_ } -%>

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
<%_ if (enzyme) { -%>

it('contains component <Title />', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Title)).toBeTruthy()
})
<%_ } -%>
