import Periods from '../../utils/Periods'
interface AddOnOptionProps {
  name: string
  description: string
  price: number
  period: Periods
}
function AddOnOption({name, description, price, period}: AddOnOptionProps) {
  return (
    <>
      <input type='checkbox' className=''/>
      <span>
        <h2 className='text-base font-bold'>{name}</h2>
        <p className='text-sm text-cool-gray'>{description}</p>
      </span>
      <span className='text-purplish-blue'>+${price}/{period}</span>
    </>
  )
}
export default AddOnOption
