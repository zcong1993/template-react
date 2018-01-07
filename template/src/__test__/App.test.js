import ReactDOM from 'react-dom'
<%_ if (enzyme) { -%>
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
<%_ } -%>
import App from '../App'
<%_ if (enzyme) { -%>
import Title from '../components/Title'

configure({ adapter: new Adapter()})
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
