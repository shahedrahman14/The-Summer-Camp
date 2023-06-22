import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mt-12">
        <div className='text-center grid justify-center mx-auto md:mb-80 '>
       
        <img className="w-full"  src="https://rb.gy/yaww2" alt="" />
        <h1 className='mt-8  text-4xl  mb-10'>Oops... Sorry !! The WebPage is not available Now</h1>
        <Link  to='/'><button className='bg-green-400 hover:bg-green-500 px-3 py-3 font-serif rounded-md  font-bold'>Go back to Homepage</button></Link>
    </div>
    </div>
    );
};

export default ErrorPage;