import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TravelCard from './components/TravelCard'
import './App.css'

// Replace your code here
class App extends Component {
  state = {travelList: [], status: true}

  componentDidMount() {
    this.getTravelList()
  }

  getTravelList = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const formattedData = data.packages.map(each => ({
        id: each.id,
        imageUrl: each.image_url,
        name: each.name,
        description: each.description,
      }))
      console.log(formattedData)
      this.setState({travelList: formattedData, status: false})
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderList = () => {
    const {travelList} = this.state

    return (
      <ul className="travel-container">
        {travelList.map(each => (
          <TravelCard key={each.id} travelData={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {status} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">Travel Guide</h1>
        <div className="travel-items-container">
          {status === true ? this.renderLoader() : this.renderList()}
        </div>
      </div>
    )
  }
}

export default App
