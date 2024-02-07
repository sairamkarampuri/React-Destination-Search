// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {name, imgUrl} = destination
  return (
    <li className="destination-container">
      <img className="destination-image" src={imgUrl} alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
