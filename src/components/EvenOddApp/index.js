// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  generateRandomNumber = () => {
    const RandomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: RandomNumber})
  }

  findEvenOrOdd = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Even'
    }
    return 'odd'
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="child-bg-container">
          <h1>Count {count} </h1>
          <p>Count is {this.findEvenOrOdd()} </p>
          <button type="button" onClick={this.generateRandomNumber}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
