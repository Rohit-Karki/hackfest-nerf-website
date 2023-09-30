
import React from "react";
import { motion } from "framer-motion"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Inputs from "../forms/input";


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 450,
  bgcolor: '#0F172A',
  borderRadius: 10,
  boxShadow: 24,
  opacity: 0.98,
  p: 4,
};



const Herocontainer = () => {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // const transition = { type: 'spring', duration: 0.8 }
  // const config = {
  //   initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  //   animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  //   exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
  // }

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // const ref = useRef(null);


  // const handleClick = ()=> {
  //     ref.current?.scrollIntoView({behavior: 'smooth'});
  // };
  return (
    <div className="hero-container">


      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      />


      <div className="overlay" >
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
              // onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>

              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-neutral-300">
                  {item.name}
                </a>
              ))}
            </div>

          </nav>

        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

            <div className="text-center">
              <motion.div
                key="title"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 5, stiffness: 40, restDelta: 0.001, duration: 0.3 }}>
                <h2 className="text-4xl font-bold tracking-tight text-neutral-200 sm:text-6xl">
                  Dive into Video with AI.
                </h2>
              </motion.div>
              <p className="mt-6 text-lg leading-8 text-neutral-200">
                Generate an absolute AI animated live throught for your content. Simple yet faster.
              </p>
              <div class="wrapper">
                <div class="static-txt">Video for</div>
                <ul class="dynamic-txts">
                  <li><span>Advertisement.</span></li>
                  <li><span>Tourism.</span></li>
                  <li><span>Products.</span></li>
                  <li><span>Sale.</span></li>
                </ul>
              </div>
              <div className="inputs">
                <div className="mt-10 flex items-center justify-center gap-x-6"
                  onClick={handleOpen}
                >
                  <motion.div
                    key="p"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      damping: 7,
                      stiffness: 30,
                      restDelta: 0.001,
                      duration: 0.6,
                      delay: 0.2,
                      delayChildren: 0.2
                    }}>
                    <button
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >


            <Box sx={style}>

              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h2>Enter the form.</h2>


                <Inputs />

              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>

              </Typography>

            </Box>

          </Modal>

          {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        </div>
      </div>
    </div>

  );
};

export default Herocontainer;