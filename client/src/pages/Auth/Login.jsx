import { Button, Form, Input, Typography, message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const initialState = { email: "", password: "" }

const Login = () => {
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleLogin = () => {
    let { email, password } = state
    const formData = { email, password }
    setIsProcessing(true)

    axios.post('http://localhost:8000/auth/login', formData)
      .then(({ status, data }) => {
        if (status === 200) {
          message.success(data.message)
          localStorage.setItem("jwt", data.token)

          if (data.role === "donor") {
            navigate("/dashboard/donor")
          } else if (data.role === "ngo") {
            navigate("/dashboard/ngo")
          } else {
            navigate("/") 
          }
        }
      })
      .catch((error) => {
        message.error(error.response?.data?.message || "Login failed")
        console.log('error', error)
      })
      .finally(() => {
        setIsProcessing(false)
      })
  }

  const Title = Typography

  return (
    <div
      className='bg-cover bg-center min-h-screen flex items-center justify-center'
      style={{ backgroundImage: "url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1753079907/pexels-catscoming-406152_ecfpac.jpg')" }}
    >
      <div className='bg-[rgba(255,255,255,0.8)] flex flex-col justify-center p-12 min-h-[300px] rounded-md shadow-md w-full max-w-md'>
        <Title level={2} className="!text-3xl font-bold text-center mb-4 ">Login</Title>
        <Form layout='vertical' align="middle">
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]} >
            <Input placeholder="Enter your Email" name='email' value={state.email} onChange={handleChange} />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, type: "string", message: 'Please enter a valid password' }]}>
            <Input.Password name='password' value={state.password} onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              loading={isProcessing}
              onClick={handleLogin}
              className="!bg-green-400 hover:!bg-green-300 duration-300 text-white w-[50%]"
            >
              Login
            </Button>
          </Form.Item>
          <div className='text-xl'>
            Don't have an account <Link to="/auth/register" className='!underline !text-green-500'>Register</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
