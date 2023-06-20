interface StepSectionProps {
    title: string,
    description: string,
    children: React.ReactNode
}
function StepSection({title, description, children}: StepSectionProps) {
    return (
        <section className='flex flex-col gap-3 p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-white text-marine-blue'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-cool-gray'>{description}</p>
            {children}
        </section>
    )
}
export default StepSection
