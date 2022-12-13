import Header from 'src/components/Header/Header'

type FrameLayoutProps = {
  children?: React.ReactNode
}

const FrameLayout = ({ children }: FrameLayoutProps) => {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        {children}
      </div>
    </>
  )
}

export default FrameLayout
