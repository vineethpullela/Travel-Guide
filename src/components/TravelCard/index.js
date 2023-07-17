import './index.css'

const TravelCard = props => {
  const {travelData} = props
  const {name, imageUrl, description} = travelData

  return (
    <li className="card-container">
      <img src={imageUrl} alt={name} className="image" />
      <div className="context">
        <h1 className="card-heading">{name}</h1>
        <p className="card-description">{description}</p>
      </div>
    </li>
  )
}

export default TravelCard
