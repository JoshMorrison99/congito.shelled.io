"use client"

import React, { useState } from 'react'
import UserPool from '../UserPool'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'


export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  
    const onSubmit = (event) => {
      event.preventDefault();
  
      const user = new CognitoUser({
        Username: username,
        Pool: UserPool
      });

      const authDetails = new AuthenticationDetails({
        Username: username,
        Password: password
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
            console.log("onSuccess: ", data)
        },
        onFailure: (err) => {
            console.log("onFailure: ", err)
        }
      })
    }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="/shelled.png" alt="logo"/>
          Cognito Education    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                  <div>
                      <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                      <input onChange={(e) => setUsername(e.target.value)} type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create account here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
