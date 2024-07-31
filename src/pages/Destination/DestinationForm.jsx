import React from 'react'
import Button from '../../components/ReUsable/Button'
import { FaSearchLocation } from 'react-icons/fa'

const DestinationForm = () => {
  return (
    <section className="p-4 py-5 bg-skyBlue">
      <form className="">
        <div className='space-y-4 mx-auto flex flex-col lg:flex-row lg:space-x-4'>
          <div className='flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mx-auto'>
            <div>
              <label htmlFor="destination" className="block text-sm font-bold ">
                Destination
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                className="mt-1 p-2 w-full border outline-blue rounded-md"
              />
            </div>
            <div>
              <label htmlFor="duration" className="block text-sm font-bold ">
                Duration
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                className="mt-1 p-2 w-full border outline-blue rounded-md"
                placeholder='number of days'
              />
            </div>
            <div>
              <label htmlFor="number" className="block text-sm font-bold ">
                Number of Guests
              </label>
              <input
                type="number"
                id="number"
                name="number"
                className="mt-1 p-2 w-full border outline-blue rounded-md"
              />
            </div>
            <div>
              <label htmlFor="price-range" className="block text-sm font-bold ">
                Price Range
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  id="min-price"
                  name="min-price"
                  placeholder="Min Price"
                  className="mt-1 p-2 w-full border outline-blue rounded-md"
                />
                <input
                  type="number"
                  id="max-price"
                  name="max-price"
                  placeholder="Max Price"
                  className="mt-1 p-2 w-full border outline-blue rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Button className="flex items-center">
            <FaSearchLocation className='mr-4' />
            Search
          </Button>
        </div>
      </form>
    </section>
  )
}

export default DestinationForm
