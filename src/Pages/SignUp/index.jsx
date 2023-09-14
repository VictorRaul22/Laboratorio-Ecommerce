import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function SignUp() {
  const context=useContext(ShoppingCartContext)
  const navigate = useNavigate();
  const handlerSignUp=(event)=>{
    event.preventDefault();
    const data= Object.fromEntries(new FormData(event.target))
    context.signUp(data);
    navigate('/sing-in');
  }
  return (
    <Layout>
      <h2 className='text-center font-medium text-2xl mb-3'>Sign Up</h2>
      <form onSubmit={handlerSignUp} method='POST'>
        <div className='flex flex-col gap-3 mb-4'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='font-semibold text-base'>Name</label>
              <input type="text"  id="name" name="name"className='rounded-lg border border-black w-80 py-2 px-4  focus:outline-none' placeholder='example '/>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email" className='font-semibold text-base'>Email</label>
              <input type="email"  id="email" name="email" className='rounded-lg border border-black w-80 py-2 px-4  focus:outline-none' placeholder='example '/>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="password" className='font-semibold text-base'>Password</label>
              <input type="password" id="password" name="password" className='rounded-lg border border-black w-80 py-2 px-4  focus:outline-none' 
            placeholder='************'/>
            </div>
        </div>
        <div className='mb-2'>
          <button type='submit' className='bg-slate-800 text-white w-full rounded-lg py-2 hover:bg-slate-700 focus:bg-slate-700 focus:outline-indigo-500'
          >Sign Up</button>
        </div>
        <Link to="/sing-in" className='text-blue-600 underline'>You already have an account, log in here</Link>
      </form>
    </Layout>
  )
}

export default SignUp