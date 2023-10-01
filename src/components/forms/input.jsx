import React, { useState } from "react";
import { DropzoneArea } from 'material-ui-dropzone';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";


const Inputs = () => {

  // const [name, setName] = useState('');


  // const handlelocation = (event) => {
  //   setLocation(event.target.value);
  // };

  const Form1 = ({ onNext }) => {
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    return (
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-8">

          <label class="block text-neutral-200 text-sm font-bold mb-2" >
            Location
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location" onChange={(e) => setLocation(e.target.value)} value={location} placeholder="Enter your Location" />
        </div>

        <div class="flex flex-wrap -mx-3 mb-8">
          <label class="block text-neutral-200 text-sm font-bold mb-2" >
            Name
          </label>


          <input class="shadow appearance-none border rounded w-full py-2 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="To be appaear at start" />
        </div>

        <div class="flex flex-wrap -mx-3 mb-8">

          <label for="large-input" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Description Box</label>
          <input type="text" class="block w-full p-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500" id="desc" onChange={(e) => setDesc(e.target.value)} value={desc} placeholder="About your content" />
        </div>


        <div className="buttoncentre">
          <button type="button" onClick={() => onNext('form2')
          }

            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Next</button>
        </div>
      </form>
    );
  };


  const Form2 = ({ onNext }) => {

    return (
      <form className="w-full max-w-lg">

        <div class="flex flex-wrap -mx-4 -my-8 mb-6">
          <br />
          <label for="large-input" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Upload Video/Image</label>
          <DropzoneArea maxSize={52428800}
            onChange={(files) => console.log('Files:', files)}
          />
          <label class="block text-neutral-200 text-sm font-bold mb-4" for="username">

          </label>
        </div>
        <div class="flex flex-wrap -mx-3 mb-8">
          <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" />

        </div>
        <div className="buttoncentre">
          <button type="button" onClick={() => onNext('form3')
          }
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 mb-8 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Next</button>
        </div>
      </form>
    );
  };

  const Form3 = () => {
    const navigate = useNavigate();
    const [features, setFeatures] = useState('');
    const [reviews, setReviews] = useState('');

    const [loading, setLoading] = useState(false);

    const onSubmit = (e) => {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard')
      }, 4000);

      e.preventDefault();
      swal("Completed.", "successfully submitted");
    };

    return (
      <form className="w-full max-w-lg" >
        <div className="flex flex-wrap -mx-3 mb-4">
          <label class="block text-neutral-200 text-sm font-bold mb-4" for="username">
            Additional Info

          </label>


          <input class="shadow appearance-none border rounded w-full py-8 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="features" type="text" onChange={(e) => setFeatures(e.target.value)} value={features} placeholder="Features of your content" />

        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <input class="shadow appearance-none border rounded w-full py-8 px-4   text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="reviews" onChange={(e) => setReviews(e.target.value)} value={reviews} type="text" placeholder="Additional reviews of your content" />
        </div>

        <button type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={onSubmit}
        >
          {loading ? 'Loading...' : 'Click Me'}

        </button>
        {loading && <div className="loading-spinner">
          <div role="status" className="load">
            <div className="og">
              <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span class="sr-only">Loading...</span>
              <div className="loadp">LOADING...</div>
            </div>
          </div>
        </div>}



      </form>
    );
  };
  const [currentForm, setCurrentForm] = useState('form1');

  const handleNext = (nextForm) => {
    setCurrentForm(nextForm);
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();



  // };






  return (
    <div className="sideinputs">
      <div className="mt-10 flex items-center justify-center gap-x-6">
        {currentForm === 'form1' && <Form1 onNext={handleNext} />}
        {currentForm === 'form2' && <Form2 onNext={handleNext} />}
        {currentForm === 'form3' && <Form3 />}
      </div>



    </div>



  );
};

export default Inputs;