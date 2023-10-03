import React from 'react'
// import a from 'next/a'
// import Image from 'next/image'
import logo from '../public/logo.png'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    return (
        <nav className="bg-black sticky top-0 z-50 ">
            {/* <nav className="bg-black backdrop-filter backdrop-blur-lg bg-opacity-80 sticky top-0 z-50 "> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-14"
                                src={logo}
                                alt="Workflow"
                                width={60}
                                height={45}
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a
                                    href="/home" className=" hover:bg-lime-600 hover:text-white text-lime-300 px-3 py-2 rounded-md text-sm font-medium">

                                    Home
                                </a>

                                {/* <a className="text-lime-300 hover:bg-lime-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/create-item">
                                    Add To Marketplace
                                </a> */}

                                <a className="text-lime-300 hover:bg-lime-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/my-assets">
                                    My Digital Assets
                                </a>

                                {/* <a className="text-lime-300 hover:bg-lime-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/creatordashboard">
                                    Creator Dashboard
                                </a> */}

                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center rounded-md border-indigo-500 px-4 py-1 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-lime-100">
                                            Open
                                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-indigo-500 ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (

                                                        <a className={classNames(
                                                            active ? 'bg-lime-100 text-lime-900' : 'text-lime-600',
                                                            'block px-4 py-2 text-sm'
                                                        )} href="/govschemee">
                                                            Govscheme

                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (

                                                        <a className={classNames(
                                                            active ? 'bg-lime-100 text-lime-900' : 'text-lime-600',
                                                            'block px-4 py-2 text-sm'
                                                        )} href="http://51.20.104.47:3000/">

                                                            Weather
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a className={classNames(
                                                            active ? 'bg-lime-100 text-lime-900' : 'text-lime-600',
                                                            'block px-4 py-2 text-sm'
                                                        )} href="/Dasboard">

                                                            market
                                                        </a>

                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a className={classNames(
                                                            active ? 'bg-lime-100 text-lime-900' : 'text-lime-600',
                                                            'block px-4 py-2 text-sm'
                                                        )} href="https://rice-disease.herokuapp.com/">

                                                            Disease Prediction
                                                        </a>

                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a className={classNames(
                                                            active ? 'bg-lime-100 text-lime-900' : 'text-lime-600',
                                                            'block px-4 py-2 text-sm'
                                                        )} href="/chat">

                                                            chat
                                                        </a>

                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a className={classNames(
                                                            active ? 'bg-lime-100 text-lime-900' : 'text-lime-600',
                                                            'block px-4 py-2 text-sm'
                                                        )} href="/">

                                                            Logout
                                                        </a>


                                                    )}
                                                </Menu.Item>

                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>


                                <a className="text-lime-300 hover:bg-lime-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/newss">
                                    News
                                </a>

                                {/* <a href="/login">
                                    <a

                                        className="text-lime-300 hover:bg-lime-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Login
                                    </a>
                                </a>
                                <a href="https://radiant-mesa-29894.herokuapp.com/">
                                        <a

                                            className="text-lime-300 hover:bg-lime-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Predict Quality of Crops
                                        </a>
                                    </a>
                                    <a href="https://rice-disease.herokuapp.com/">
                                        <a

                                            className="text-lime-300 hover:bg-lime-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Disease Prediction
                                        </a>
                                    </a> */}




                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            className="bg-lime-800 inline-flex items-center justify-center p-2 rounded-md text-lime-400 hover:text-white hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-lime-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>

                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a className="hover:bg-lime-600 text-white block px-3 py-2 rounded-md text-base font-medium" href="/">

                        Dashboard

                    </a>

                    <a className="text-lime-300 hover:bg-lime-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/create-item">
                        Team
                    </a>

                    <a className="text-lime-300 hover:bg-lime-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/my-assets">
                        Projects
                    </a>

                    <a className="text-lime-300 hover:bg-lime-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/creatordashboard">
                        Calendar
                    </a>

                    <a className="text-lime-300 hover:bg-lime-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/newss">
                        Reports
                    </a>
                    <a className="text-lime-300 hover:bg-lime-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/login">
                        Reports
                    </a>
                    <a className="text-lime-300 hover:bg-lime-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="https://radiant-mesa-29894.herokuapp.com/">
                        Reports
                    </a>
                    <a className="text-lime-300 hover:bg-lime-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="https://rice-disease.herokuapp.com/">
                        Reports
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar