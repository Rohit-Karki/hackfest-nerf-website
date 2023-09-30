// import React,{useState} from "react";
// import { motion } from 'framer-motion'




// // const SideInputs = () => {
// //   const transition = { type: 'spring', duration: 0.8 }
// //   const config = {
// //     initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
// //     animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
// //     exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
// //   }
// //     const Form1 = ({ onNext }) => (
// //       <motion.div
// //                   key="p"
// //                   initial={{ y: 100, opacity: 0 }}
// //                   animate={{ y: 0, opacity: 1 }}
// //                   transition={{
// //                     type: 'spring',
// //                     damping: 7,
// //                     stiffness: 30,
// //                     restDelta: 0.001,
// //                     duration: 0.6,
// //                     delay: 0.2,
// //                     delayChildren: 0.2
// //                   }}>
// //         <form>
// //           <button type="button" onClick={() => onNext('form2')}
// //           className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //           >Get Started</button>
// //         </form>
// //         </motion.div>
// //       );
      
// //       const Form2 = ({ onNext }) => (
// //         <form class="w-full max-w-lg">
// //             <div class="flex flex-wrap -mx-3 mb-8">
           
     
// //            <input class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Write a text for your video.."/>
// //     </div>
// //     <div className="buttoncentre">
// //           <button type="button" onClick={() => onNext('form3')
// //         }
        
// //         className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //         >Next</button>
// //         </div>
// //         </form>
// //       );
// //       const Form3 = ({ onNext }) => (
// //         <form className="w-full max-w-lg">
// //             <div class="flex flex-wrap -mx-3 mb-8">
// //            <div class="w-full md:w-1/2 px-3 mb-8 md:mb-0">
            
      

// //             <input class="block w-full text-sm text-gray-900 px-1 py-2 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
// //             </div>
      
          
// //           <button type="button" onClick={() => onNext('form4')
// //         }
// //         className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //         >Next</button>
// //         </div>
// //         </form>
// //       );
      
// //       const Form4 = () => (
// //         <form className="w-full max-w-lg">
// //         <div className="flex flex-wrap -mx-3 mb-4">
// //        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
 
// //   <input class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Write a text for your video.."/>
// //   </div>
// //           <button type="button"
// //           className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //           >Submit</button>
          
          
// //           </div>
          
// //         </form>
// //       );
// //     const [currentForm, setCurrentForm] = useState('form1');

// //   const handleNext = (nextForm) => {
// //     setCurrentForm(nextForm);
// //   };

// //     return (
// //       <div className="sideinputs">
        
        

// //          <div className="mt-10 flex items-center justify-center gap-x-6">
         
// //          {currentForm === 'form1' && <Form1 onNext={handleNext} />}
// //       {currentForm === 'form2' && <Form2 onNext={handleNext} />}
// //       {currentForm === 'form3' && <Form3 onNext={handleNext} />}
// //       {currentForm === 'form4' && <Form4 />}

      
// //       </div>
// //     </div>

      
    
// //     );
// // };

// export default SideInputs;