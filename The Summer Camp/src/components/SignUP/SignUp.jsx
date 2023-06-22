import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { useForm } from "react-hook-form";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import Swal from 'sweetalert2'
import SocialLogin from "../Shared/SocialLogin";
const SignUp = () => {
  const Navigate=useNavigate()
  const [error,setError]=useState()
    const { createUser ,updateUserProfile,logOut} = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    createUser(data.email,data.password)
    
    .then(result =>{
      const loggedUser =result.user
      reset()
    
      console.log(loggedUser);
      updateUserProfile(data.name, data.PhotoUrl)
  
        reset()
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have signUp successfully',
          showConfirmButton: false,
          timer: 1500
        })
      
      logOut()
      .then(()=>{
        Navigate('/login')
      })
    })
    .catch(error=>{
      console.log(error.message);
      return setError(error.message)
    })
    
  };
  const [passwordEye, setPasswordEye] = useState(false);
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);
  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };
  const password = watch("password");
  return (
    <div className=" ">
      <Helmet>
        <title> The Summer Camp || signUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl mb-3 font-bold">SignUP now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  md:w-[350px] bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />

                {errors.name && (
                  <span className="text-red-500">name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  {...register("PhotoUrl", { required: true })}
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                />
                {errors.PhotoUrl && (
                  <span className="text-red-500">
                    PhotoUrl field is required
                  </span>
                )}
              </div>
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
                    minLength: {
                      value: 6,
                      message: "Password must be at lest 6 characters",
                    },
                    pattern: {
                      value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/,
                      message:
                        " At least one uppercase letter, one lowercase letter and one special character",
                    },
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
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={confirmPasswordEye === false ? "password" : "text"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm password is  required",
                    validate: (value) =>
                      value == password || "The password do not match",
                  })}
                  name="confirmPassword"
                  className="input input-bordered h-14 "
                />

                {errors?.confirmPassword && (
                  <span className="text-red-500">
                    {errors?.confirmPassword?.message}
                  </span>
                )}

                <div className="text-2xl absolute top-[53px] right-5">
                  {confirmPasswordEye === false ? (
                    <AiFillEyeInvisible
                      onClick={handleConfirmPasswordClick}
                    ></AiFillEyeInvisible>
                  ) : (
                    <AiFillEye onClick={handleConfirmPasswordClick}></AiFillEye>
                  )}
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary -mb-5">SignUP</button>
              </div>
            </form>

            <small className="hover:underline px-8 mb-4">
              Already have an account? <Link to="/login"> Login</Link>
            </small>
            <SocialLogin></SocialLogin>
              <small className="text-red-500">{error}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
