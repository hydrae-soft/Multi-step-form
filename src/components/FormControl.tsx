interface FormControlProps {
  onBackStep: () => void
  onNextStep: () => void
}
function FormControl({onBackStep, onNextStep}: FormControlProps) {
  return (
    <footer className='row-start-4 row-end-4 flex justify-between w-full p-5 bg-white'>
      <button onClick={onBackStep} className='p-2 rounded-md bg-transparent font-bold text-cool-gray'>Go Back</button>
      <button onClick={onNextStep} className='p-2 rounded-md bg-marine-blue font-bold text-white'>Next Step</button>
    </footer>
  )
}
export default FormControl
