import React, { useContext } from 'react'
import { Context } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Result = () => {

  const { image, resultImage, loading } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className='mx-4 my-3 lg:max-44 mt-14 min-h-[75vh]'>

      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
        {/* ----------image container--------- */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          {/* --------left side---------- */}
          <div>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            {/* <img className='rounded-md border' src={assets.image_w_bg} alt="original-image" /> */}
            <img className='rounded-md border' src={image} alt="original-image" />
          </div>


          {/* -----------right side--------- */}
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>

              {loading ? (
                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                </div>
              ) : resultImage ? (
                <img src={resultImage} alt="bg-removed-image" />
              ) : (
                <p className="text-gray-500 flex items-center justify-center h-full">
                  No result available.
                </p>
              )}

            </div>
          </div>
        </div>

        {/* --------buttons ----------- */}

        {
          !loading && <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
            <button onClick={() => navigate("/")} className='px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700'>Try another image</button>
            {
              resultImage && (
                <a className='px-8 py-3 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700' href={resultImage} download>Download Image</a>
              )
            }
          </div>
        }

      </div>

    </div>
  )
}

export default Result