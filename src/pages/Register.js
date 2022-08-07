import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className='bg-info bg-opacity-10 py-5'>
                <div style={{ maxWidth: "750px" }} className='bg-light p-5 mx-auto rounded'>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='fs-3 text-center fw-bold py-2 my-3'>Please Register</h2>

                        {/* name input field */}
                        <label className='fs-5 text-primary fs-bold' htmlFor="name">Your Name</label>
                        <input
                            className="my-2 py-2 px-3 border rounded"
                            type='text'
                            id='name'
                            placeholder='Enter your name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                }
                            })} />
                        {errors.name?.type === "required" && <p className='fs-6 text-danger'>{errors.name.message}</p>}

                        {/* email input field */}
                        <label className='fs-5 text-primary fs-bold' htmlFor="email">Your Email</label>
                        <input
                            className="my-2 py-2 px-3 border rounded"
                            type='email'
                            id='email'
                            placeholder='Enter your email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                },
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Please enter a valid email address."
                                }
                            })} />
                        {errors.email?.type === "required" && <p className='fs-6 text-danger'>{errors.email.message}</p>}
                        {errors.email?.type === "pattern" && <p className='fs-6 text-danger'>{errors.email.message}</p>}

                        {/* password input field */}
                        <label className='fs-5 text-primary fs-bold' htmlFor="password">Enter Your Password</label>
                        <input
                            className="my-2 py-2 px-3 border rounded"
                            type='password'
                            id='password'
                            placeholder='Enter your password'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters."
                                }
                            })} />
                        {errors.password?.type === "required" && <p className='fs-6 text-danger'>{errors.password.message}</p>}
                        {errors.password?.type === "minLength" && <p className='fs-6 text-danger'>{errors.password.message}</p>}

                        <input className='text-light bg-success py-2 px-4 my-2 rounded border-0' type="submit" value="Sign Up" />
                        <p className='mt-3'>Are you registered? <Link className='text-blue-500' to='/log-in'>Log In here</Link> </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;