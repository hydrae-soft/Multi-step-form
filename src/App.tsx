import Cover from './components/Cover'
import FormControl from './components/FormControl'
import FormInput from './components/step-one/FormInput'
import AddOnOption from './components/step-three/AddOnOption'
import PlanOption from './components/step-two/PlanOption'
import SelectableBox from './components/SelectableBox'
import StepSection from './components/StepSection'
import Periods from './utils/Periods'
import { useState } from 'react'
import './index.css'
function App() {
  const [currentStep, setStep] = useState(0)
  const backStep = () => {
    if (currentStep > 0) setStep(currentStep - 1)
  }
  const nextStep = () => {
    if (currentStep < 4) setStep(currentStep + 1)
  }
  return (
    <>
      <Cover/>
      {currentStep == 0 && (
      <StepSection title='Personal info' description='Please, provide your name, email address and phone number.'>
        <form id='step1' className='flex flex-col set-gap'>
          <FormInput label='Name' input_type='text' id='name' placeholder='e.g. Stephen King'/>
          <FormInput label='Email Address' input_type='email' id='email' placeholder='e.g. stephenking@lorem.com'/>
          <FormInput label='Phone Number' input_type='tel' id='phone' placeholder='e.g. (123) 456-7890'/>
        </form>
      </StepSection>)}
      {currentStep == 1 && (
      <StepSection title='Select your plan' description='You have the option of monthly or yearly billing.'>
        <SelectableBox>
          <PlanOption name='Arcade' price={9} period={Periods.MONTHLY} imgSrc='/assets/images/icon-arcade.svg'/>
        </SelectableBox>
        <SelectableBox>
          <PlanOption name='Advanced' price={12} period={Periods.MONTHLY} imgSrc='/assets/images/icon-advanced.svg'/>
        </SelectableBox>
        <SelectableBox>
          <PlanOption name='Pro' price={15} period={Periods.MONTHLY} imgSrc='/assets/images/icon-pro.svg'/>
        </SelectableBox>
      </StepSection>)}
      {currentStep == 2 && (
      <StepSection title='Pick add-ons' description='Add-ons help enhace your gaming experience.'>
        <SelectableBox>
          <AddOnOption name='Online service' description='Access to multiplayer games' price={1} period={Periods.MONTHLY}/>
        </SelectableBox>
        <SelectableBox>
          <AddOnOption name='Larger storage' description='Extra 1TB of cloud save.' price={2} period={Periods.MONTHLY}/>
        </SelectableBox>
        <SelectableBox>
          <AddOnOption name='Customizable profile' description='Custom theme on your profile.' price={2} period={Periods.MONTHLY}/>
        </SelectableBox>
      </StepSection>)}
      <FormControl onBackStep={backStep} onNextStep={nextStep}/>
    </>
  )
}

export default App
