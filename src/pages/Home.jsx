import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import LoginForm from '@/components/LoginForm'

const Home = () => {
  return (
    <div className='flex justify-around items-center min-h-screen'>
      <div>
        <h2 className='font-semibold text-3xl'>Welcome.</h2>
      </div>
      <div className='bg-primary p-10 w-[30vw] rounded-lg'>
        <Tabs defaultValue="login" onChange={(e) => console.log(e)} className="">
          <TabsList>
            <TabsTrigger value="signup">SignUp</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            New here, please signup.
            <div className='flex flex-col gap-3 mt-3'>
              <Input placeholder="Name"/>
              <Input placeholder="Email"/>
              <Input placeholder="Password"/>
              <Button>SignUp</Button>
            </div>
          </TabsContent>
          <TabsContent value="login">
            Already a user, login here.
            <div className='flex flex-col gap-3 mt-3'>
              <Input placeholder="Email"/>
              <Input type="password" placeholder="Password"/>
              <Button>Login</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Home
