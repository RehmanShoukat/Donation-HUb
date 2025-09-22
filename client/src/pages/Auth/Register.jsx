import { Button, Form, Input, Typography, message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const initialState = { fullName: "", email: "", password: "", confirmPassword: "" }

const Register = () => {
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleRegister = async (e) => {
    let { fullName, email, password, confirmPassword } = state
    const formData = { fullName, email, password, confirmPassword }
    setIsProcessing(true)

    await axios.post('http://localhost:8000/auth/register', formData)
      .then(({ status, data }) => {
        if (status === 201) {
          message.success(data.message)
          navigate("/dashboard/donor")
        }
      })
      .catch((error) => {
        message.error(error.response?.data?.message || "Something went wrong")
        console.error(error)
      })
      .finally(() => {
        setIsProcessing(false)
      })
  }

  const Title = Typography;

  return (
    <div className='bg-cover bg-center min-h-screen flex items-center justify-center'
      style={{ backgroundImage: "url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1753079907/pexels-catscoming-406152_ecfpac.jpg')" }}>
      <div className='bg-[rgba(255,255,255,0.8)] flex flex-col justify-center p-4 min-h-[200px] rounded-md shadow-md w-full max-w-[400px] '>
        <Title level={2} className="!text-3xl font-bold text-center mb-4 ">Register</Title>
        <Form layout='vertical' align="middle">
          <Form.Item name="fullName" label="FullName" rules={[{ required: true, type: 'string', message: 'Please enter your full name' }]} >
            <Input placeholder="Enter your FullName" name="fullName" value={state.fullName} onChange={handleChange} />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]} >
            <Input placeholder="Enter your Email" name="email" value={state.email} onChange={handleChange} />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please enter a valid password' }]}>
            <Input.Password name='password' placeholder='Enter Your Password' value={state.password} onChange={handleChange} />
          </Form.Item>
          <Form.Item name="confirmPassword" label="Confirm Password" rules={[{ required: true, message: 'Please confirm your password' }]}>
            <Input.Password name="confirmPassword" value={state.confirmPassword} placeholder='Confirm Password' onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' type='primary' loading={isProcessing}
              className="!bg-green-400 hover:!bg-green-300 duration-300 text-white w-[50%]"
              onClick={handleRegister}>
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            <div className='text-lg'>Already have an account <Link to="/auth/login" className='!underline !text-green-600'>Login</Link></div>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register
