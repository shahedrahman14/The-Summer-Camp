import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
  const { signIn } = useAuth();
  const Navigate=useNavigate()
const location =useLocation()
const from=location.state?.from?.pathname || '/'
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [error,setError]=useState(null)
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signIn(email, password)
    .then((result)=>{
      const loggedUser=result.user
      console.log(loggedUser);
      reset()
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        } 
      })
      Toast.fire({
        icon: 'success',
        title: 'user login successfully'
      })
      Navigate(from,{replace: true})
    })
    .catch(error=>{
    return  setError(error.message)
    })
   
  };
  const [passwordEye, setPasswordEye] = useState(false);
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };
  return (
    <div className=" ">
      <Helmet>
        <title> The Summer Camp || Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl mb-3 font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  m bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email field is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={passwordEye === false ? "password" : "text"}
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  name="password"
                  className="input input-bordered h-14 "
                />

                {errors?.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}

                <div className="text-2xl absolute top-[53px] right-5">
                  {passwordEye === false ? (
                    <AiFillEyeInvisible
                      onClick={handlePasswordClick}
                    ></AiFillEyeInvisible>
                  ) : (
                    <AiFillEye onClick={handlePasswordClick}></AiFillEye>
                  )}
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary -mb-5">login</button>
              </div>
            </form>

            <small className="hover:underline px-8 mb-4">
              New to SummerCamp? <Link to="/signUp"> signUp</Link>
            </small>
            <SocialLogin></SocialLogin>
                <small className="text-red-500">{error}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
