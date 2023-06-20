import StepIndicator from "./StepIndicator"
function Cover() {
  return (
    <header className='flex flex-col justify-around items-center bg-[url("./assets/images/bg-sidebar-mobile.svg")] bg-cover bg-no-repeat bg-center h-32'>
      <StepIndicator/>
    </header>
  )
}
export default Cover