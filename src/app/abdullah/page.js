"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Myslider from '@/components/myslider'
import BCard from '@/components/bogcard'


function Page() {
  return (
      <div className='bg-red-300 min-h-screen'>
        <div>
          
    <Dialog>
        <DialogTrigger asChild>
          <div className='p-9'>
          <Button className={"bg-black p-2 text-white "} variant="outline">Add Blog</Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add blog</DialogTitle>
            <DialogDescription>     
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Title</Label>
              <Input id="name-1" name="text"  defaultValue="" placeholder ="Enter Title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Description</Label>
              <Input id="username-1" name="Description" placeholder ="Enter Description" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              {/* <Button></Button> */}
            </DialogClose >
            <div className='flex justify-center items-center'>
              <button  className=' text-white mr-[10px] py-2 px-[160px] rounded-lg flex justify-center item-center bg-black'>
                Add
              </button>
            {/* <Button className="flex justify-center item-center" type="Add"></Button> */}
            </div>
          </DialogFooter>
        </DialogContent>
      
    </Dialog>  
    </div>
    <div className='grid grid-cols-3 gap-7 p-10'>
      <BCard/>
      <BCard/>
      <BCard/>
      <BCard/>
      <BCard/>
    </div>

        {/* <Button variant="outline">Button</Button>
<div>
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>



 <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
<div className="p-5 m-[40px] bg-amber-300 h-[400px] w-[300px]">
    <Myslider/>
</div> */}

</div>


  )
}

export default Page