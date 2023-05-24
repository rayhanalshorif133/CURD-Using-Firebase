import {
 Button,
 Checkbox,
 Dialog,
 DialogBody,
 DialogFooter,
 DialogHeader,
 Input,
 Typography
} from "@material-tailwind/react";
import React, { Fragment, useState } from 'react';
export default function AddNewUser() {
 const [open, setOpen] = useState(false);

 const handleOpen = () => setOpen(!open);
 return (
  <>
   <div className="m-3 justify-center">
    <Button size="sm" onClick={handleOpen} variant="gradient" color="green">Add New</Button>
   </div>
   <Fragment>
    <Dialog open={open} handler={handleOpen}>
     <DialogHeader>Add New User</DialogHeader>
     <DialogBody divider>
      <form className="w-80 max-w-screen-lg sm:w-96">
       <div className="mb-4 flex flex-col gap-6">
        <Input size="lg" label="Name" />
        <Input size="lg" label="Email" />
        <Input type="password" size="lg" label="Password" />
       </div>
       <Checkbox
        label={
         (
          <Typography
           variant="small"
           color="gray"
           className="flex items-center font-normal"
          >
           I agree the
           <a
            href="#"
            className="font-medium transition-colors hover:text-blue-500"
           >
            &nbsp;Terms and Conditions
           </a>
          </Typography>
         )
        }
        containerProps={{ className: "-ml-2.5" }}
       />
       <Button className="mt-6" fullWidth>
        Register
       </Button>
       <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{" "}
        <a
         href="#"
         className="font-medium text-blue-500 transition-colors hover:text-blue-700"
        >
         Sign In
        </a>
       </Typography>
      </form>
     </DialogBody>
     <DialogFooter>
      <Button
       variant="text"
       color="red"
       onClick={handleOpen}
       className="mr-1"
      >
       <span>Cancel</span>
      </Button>
      <Button variant="gradient" color="green" onClick={handleOpen}>
       <span>Confirm</span>
      </Button>
     </DialogFooter>
    </Dialog>
   </Fragment>
  </>
 )
}
