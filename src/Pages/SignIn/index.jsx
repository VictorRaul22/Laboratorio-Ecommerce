import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../Context'

function SignIn() {
  const context=useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const [validate, setValidate] = useState(false)
  const handlerSignIn=(envent)=>{
    envent.preventDefault();
    const data=Object.fromEntries(new FormData(envent.target));
    // console.log(data);
    context.signIn(data)
    setValidate(true);
  }
  useEffect(()=>{
    console.log(context.auth);
    if(context.auth){
      navigate('/');
    }
  },[context.auth])
  return (
    <Layout>
      <h2 className='text-center font-medium text-2xl mb-3'>Log In</h2>
      <form action="" onSubmit={handlerSignIn}>
        <div className='flex flex-col gap-3 mb-6'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email" className='font-semibold text-base'>Email</label>
              <input type="text"  id="email" name="email" className='rounded-lg border border-black w-80 py-2 px-4  focus:outline-none' placeholder='example '/>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="password" className='font-semibold text-base'>Password</label>
              <input type="password" id="password" name="password" className='rounded-lg border border-black w-80 py-2 px-4  focus:outline-none' 
            placeholder='************'/>
            </div>
        </div>
        <div className='w-full flex flex-col gap-4'>
          <button type='submit' className='bg-slate-800 text-white  outline  outline-black  rounded-lg py-2 hover:bg-slate-700 focus:bg-slate-700 focus:outline-indigo-500'>Log In</button>
          <Link to="/sing-up" 
          className='bg-white-400 text-black outline  outline-black text-center  rounded-lg py-2 hover:bg-slate-200 focus:bg-slate-200 focus:outline-indigo-500'>Sing Up</Link>
        </div>
        {
          validate && !context.auth &&(
              <div className='bg-red-300 w-full mt-2 rounded-lg py-3 px-2 text-center text-red-600'>
                  !Invalid Credentials
              </div>
          )
        }
      </form>
    </Layout>
  )
}

export default SignIn