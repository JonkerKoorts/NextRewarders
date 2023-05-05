import Image from "next/image";
import Link from "next/link";
import React from "react";
import Stoffelberg from "../public/stoffelberg.png";
import Coffeecounter from "../public/coffeecounter.png"
import Moneyreward from "../public/Moneyreward.png"
import Rewardsready from "../public/rewardsready.png"
import Redeemed from "../public/redeemed.png"


const StoreTemplete = () => {
  return (
        <div className="bg-color-2">
      <div>
         <Image
            className="w-[20%] sm:w-[25%] rounded-full p-2 "
            src={Stoffelberg}
            alt="Company Logo"
         />
 
      </div>
       <h1 className="mb-4 text-xl font-bold flex text-center">Avalible</h1>
      <div className="flex items-center  " > 
        <div>
          <Image
            className="w-[35%] sm:w-[25%] rounded-full p-2"
            src={Coffeecounter}
            alt="The Coffee counter"
         />
     
          <p className="p-2">1/10 Coffee cups</p>
        </div> 
        <div>
          <Image
            className="w-[35%] sm:w-[25%] rounded-full p-2"
            src={Moneyreward}
            alt="Money reward"
         />
          <p className="p-2">R200/R500 </p>
        </div>
      </div>
      <h1 className="mb-4 text-xl font-bold flex text-center">Redeemable</h1>
      <div className="flex items-center" >
        <div>
          <Image
            className="w-[35%] sm:w-[25%] rounded-full p-2"
            src={Rewardsready}
            alt="Reward ready to claim"
         />
          <p className="p-2">1 Free Coffee</p>
        </div>
        <div>
          <Image
            className="w-[35%] sm:w-[25%] rounded-full p-2"
            src={Rewardsready}
            alt="Rewards ready to claim"
         />
          <p className="p-2">1 Free Reward</p>
        </div>
      </div>
      <h1 className="mb-4 text-xl font-bold flex text-center">Redeemed</h1>
      <div className="flex items-center">
        
        <div>
          <Image
            className="w-[35%] sm:w-[25%] rounded-full p-2"
            src={Redeemed}
            alt="Reward redeemed"
         />
          <p className="p-2">1 Coffee Redeemed</p>
        </div>
        <div >
          <Image
            className="w-[35%] sm:w-[25%] rounded-full p-2"
            src={Redeemed}
            alt="Reward redeemed"
         />
          <p className="p-2">1 Reward Redeemed</p>
        </div>
      </div>
      
      <Link href="/home">Back</Link>
    </div>
  )
}

export default StoreTemplete