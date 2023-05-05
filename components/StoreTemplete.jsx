import Image from "next/image";
import Link from "next/link";
import React from "react";
import Stoffelberg from "../public/stoffelberg.png";
import Coffeecounter from "../public/coffeecup.png";
import Moneyreward from "../public/moneypocket.png";
import Rewardsready from "../public/readyrewardstar.png";
import Redeemed from "../public/redeemdcircle.png";


const StoreTemplete = () => {
  return (
    <div>
      <div className="bg-color-2">
         <Image
          className="w-[20%] sm:w-[25%] p-2"
          src={Stoffelberg}
          alt="Company Logo"/>

        <h1 className="mb-4 text-3xl font-bold text-center mt-10 md:mt-20">
          Available
        </h1>
        <div className="flex items-center border-b border-gray-500 p-4">
           <div className="border-2 h-17 bg-slate-50 p-0.5 rounded-lg shadow-lg shadow-black m-2 ">
              <Image
              className="w-[42%] sm:w-[31%] p-2"
              src={Coffeecounter}
              alt="The Coffee counter"
              />
             <p className="p-2 font-medium">1/10 Coffee cups</p>
           </div>
           <div className="border-2 h-17 bg-slate-50 p-0.5 rounded-lg shadow-lg shadow-black m-2">
                <Image
              className="w-[42%] sm:w-[31%] p-2"
              src={Moneyreward}
              alt="Money reward"
            />
             <p className="p-2 font-medium">R200/R500 </p>
           </div>
          </div>
        <h1 className="mb-4 text-3xl font-bold text-center mt-10 md:mt-20">
          Redeemable
        </h1>
        <div className="flex items-center border-b border-gray-500 p-4 ">
           < div className="border-2 h-17 bg-slate-50 p-0.5 rounded-lg shadow-lg shadow-black m-2">
              <Image
                className="w-[35%] sm:w-[25%] p-2"
                src={Rewardsready}
                alt="Reward ready to claim"
             />
              <p className="p-2 font-medium">1 Free Coffee</p>
           </div>
           <div className="border-2 h-17 bg-slate-50 p-0.5 rounded-lg shadow-lg shadow-black m-2">
                <Image
             className="w-[35%] sm:w-[25%] p-2"
              src={Rewardsready}
              alt="Rewards ready to claim"
           />
               <p className="p-2 font-medium">1 Free Reward</p>
           </div>
              
        </div>
          <h1 className="mb-4 text-3xl font-bold text-center mt-10 md:mt-20">
          Redeemed
        </h1> 
        <div className="flex items-center border-b border-gray-500 p-4">
           <  div className="border-2 h-17 bg-slate-50 p-0.5 rounded-lg shadow-lg shadow-black m-2">
               <Image
              className="w-[35%] sm:w-[25%] p-2"
              src={Redeemed}
              alt="Reward redeemed"/>
              <p className="p-2 font-medium">Reward Redeemed</p>
        
           </div>
            <  div className="border-2 h-17 bg-slate-50 p-0.5 rounded-lg shadow-lg shadow-black m-2">
                <Image
              className="w-[35%] sm:w-[25%] p-2"
              src={Redeemed}
              alt="Reward redeemed"/>
              <p className="p-2 font-medium">Reward Redeemed</p>

        

            </div>
        </div>
         <Link href="/home">Back</Link>

      </div>
      
      </div>
  );
};

export default StoreTemplete;