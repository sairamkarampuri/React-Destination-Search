// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)

    const {destinationsList} = this.props

    this.state = {
      searchInput: '',
      destinationsListItems: destinationsList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, destinationsListItems} = this.state
    const searchResults = destinationsListItems.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="destination-heading">Destination Search</h1>
        <div className="input-container">
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            className="search-img"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="destinations-container">
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} destination={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
