interface SelectableBoxProps {
  children: React.ReactNode
}
function SelectableBox({children}: SelectableBoxProps) {
  return (
    <div className={`flex justify-start items-center gap-5 border border-cool-gray rounded-md w-full p-2 cursor-pointer`}>
      {children}
    </div>
  )
}
export default SelectableBox
