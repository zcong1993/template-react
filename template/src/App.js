import { Component } from 'react'
import Title from './components/Title'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().getTime(),
      seconds: 0,
      timer: null
    }
  }

  componentDidMount() {
    this.state.timer = setInterval(() => {
      const elapsed = Math.round((new Date().getTime() - this.state.time) / 100)
      const seconds = (elapsed / 10) + (elapsed % 10 ? '' : '.0')
      this.setState({
        seconds
      })
    }, 50)
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  render() {
    return (
      <div>
        <Title />
        <p>React has been successfully running for <span style={{ color: 'red' }}>{this.state.seconds}</span> seconds.</p>
      </div>
    )
  }
}

export default App
