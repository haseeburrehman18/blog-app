import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { Button } from './ui/button'

function BCard() {
  return (
    <div>
        <div className="">
      <Card>
        <CardHeader>
          <CardTitle>Blog1</CardTitle>
          <CardDescription>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            velit assumenda eligendi, aliquam at minus nostrum? Natus minima
            eligendi maxime libero nemo corrupti ipsam.
          </CardDescription>
           
        </CardHeader>
        
        <CardFooter className=" my-0">
        <div>
    <Dialog>
        <DialogTrigger asChild>
          <div className='p-9'>
          <Button className={"bg-white py-2 px-5 text-black "} variant="outline">Edit</Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit blog?</DialogTitle>
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
                Update
              </button>
            {/* <Button className="flex justify-center item-center" type="Add"></Button> */}
            </div>
          </DialogFooter>
        </DialogContent>
      
    </Dialog>  
    </div>
          <Button onClick={()=>window.confirm("Are you sure you want to delete this?")} variant="destructive">Delete</Button>
        </CardFooter>
      </Card>
    </div>
    </div>
  )
}

export default BCard