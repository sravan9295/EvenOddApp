// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  generateRandomNumber = () => Math.floor(Math.random() * 101)

  increment = () => {
    this.setState({count: this.generateRandomNumber()})
  }

  getOddOrEven = count => (count % 2 === 0 ? 'Even' : 'Odd')

  render() {
    const {count} = this.state
    const text = this.getOddOrEven(count)
    return (
      <div className="bg-container">
        <h1 className="heading">{`count ${count}`}</h1>
        <p>{`count is ${text}`}</p>
        <button type="button" className="button" onClick={this.increment}>
          Increment
        </button>
        <p>
          <sup>*</sup>Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp
