// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={`cardDetails ${className}`}>
      <div className="card_container">
        <h1 className="heading">{headerText}</h1>
        <p className="desc ">{description}</p>
        <button className="btnDetails" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
