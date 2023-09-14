import { useContext } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { useNavigate } from 'react-router-dom'

function MyAccount() {
  const context=useContext(ShoppingCartContext)
  const navigate=useNavigate();
  const handlerLogOut=()=>{
    if(context.auth){
      context.signOut()
      navigate('/')
    }
  }
  return (
    <Layout>
        <h2 className='text-center font-medium text-2xl mb-3'>My Account</h2>
        <div>
          <div>
            <p className="rounded-lg w-80 py-2 px-1 flex justify-between items-center "><span>Name:</span> <span>{context?.account.name}</span></p>
            <p className="rounded-lg w-80 py-2 px-1 flex justify-between items-center "><span>Email:</span><span>{context?.account.email}</span> </p>
            <p className="rounded-lg w-80 py-2 px-1 flex justify-between items-center "><span>Password:</span><span>{context?.account.password}</span> </p>
          </div>
          <button onClick={handlerLogOut} className='bg-slate-800 text-white w-full rounded-lg py-2 hover:bg-slate-700 focus:bg-slate-700 focus:outline-indigo-500'>
              Log Out
          </button>
        </div>
    </Layout>
  )
}

export default MyAccount