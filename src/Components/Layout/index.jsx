const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center mt-24 md:mt-20'>
      {children}
    </div>
  )
}

export default Layout