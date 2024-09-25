'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft, Check, Target } from 'lucide-react'

export default function Register() {
  const [stage, setStage] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    team: '',
    format: '',
    experience: ''
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setStage(4) 
      } else {
        throw new Error('Registration failed')
      }
    } catch (error) {
      setStage(4)
      console.error('Error:', error)
    }
  }

  const stages = [
    { title: 'Personal Information', fields: ['name', 'email', 'phone'] },
    { title: 'Team Details', fields: ['team name'] },   
    { title: 'Cricket Preferences', fields: ['format', 'experience'] }
  ]

  const handleNext = () => {
    const currentStage = stages[stage - 1]
    const isEmptyField = currentStage.fields.some(field => !formData[field])

    if (isEmptyField) {
      alert('Please fill out all fields before proceeding.')
    } else {
      setStage(stage + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b flex flex-col items-center justify-center p-4 from-gray-900 to-blue-900 text-white">
      <motion.div 
        className="p-8 rounded-lg shadow-lg max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center mb-6">
          <Target className="w-8 h-8 text-yellow-400 mr-2" />
          <h2 className="text-3xl font-bold text-yellow-400 text-center">Tournament Registration</h2>
        </div>
        
        {stage <= 3 && (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">{stages[stage - 1].title}</h3>
              {stages[stage - 1].fields.map((field) => (
                <div key={field} className="mb-4">
                  <label htmlFor={field} className="block text-sm font-medium text-yellow-400 mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'format' ? (
                    <select
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="w-full p-3 border text-yellow-400 rounded-md focus:outline-none focus:ring-2"
                      required
                      style={{ color: "black" }}
                    >
                      <option value="" style={{ color: "black" }}>Select Format</option>
                      <option value="T20" style={{ color: "black" }}>T20</option>
                      <option value="ODI" style={{ color: "black" }}>ODI</option>
                      <option value="Test" style={{ color: "black" }}>Test</option>
                    </select>
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="w-full p-3 border text-yellow-400 rounded-md focus:outline-none focus:ring-2"
                      required
                      style={{ color: "black" }}
                    />
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex justify-between">
              {stage > 1 && (
                <motion.button
                  type="button"
                  onClick={() => setStage(stage - 1)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="mr-2" />
                  Back
                </motion.button>
              )}
              
              <motion.button
                type="button"
                onClick={stage === 3 ? handleSubmit : handleNext}
                className="text-yellow-400 font-bold py-2 px-4 rounded-full inline-flex items-center ml-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ border: "2px solid yellow" }}
              >
                {stage === 3 ? 'Submit' : 'Next'}
                {stage < 3 && <ChevronRight className="ml-2" />}
              </motion.button>
            </div>
          </form>
        )}
        
        {stage === 4 && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Check className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Registration Successful!</h3>
            <p className="text-yellow-400">Welcome to the Cricket Champions League. Get ready for an exciting tournament!</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
