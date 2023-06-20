import Periods from "../../utils/Periods"
interface PlanOptionProps {
  name: string
  price: number
  period: Periods
  imgSrc: string
}
function PlanOption({name, price, period, imgSrc}: PlanOptionProps) {
  return (
    <>
      <img src={imgSrc} alt={`${name} plan icon`}/>
      <span>
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-cool-gray">${price}/{period}</p>
      </span>
    </>
  )
}
export default PlanOption
