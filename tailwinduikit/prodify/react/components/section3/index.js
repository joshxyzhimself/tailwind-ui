import React from "react";
function IndexPage() {
    return (
        <>
            <div className="bg-linear-pink">
                <div className="px-4 xl:px-0">
                    <div className="container mx-auto">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:pb-10">
                            <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg mt-10 xl:-mt-20">
                                <h1 className="text-3xl font-bold w-1/2">Download the app</h1>
                                <div className="flex justify-end w-full items-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                                        <path
                                            d="M26 26.0001V37.1701L29.656 33.5141L32.486 36.3441L24 44.8281L15.514 36.3441L18.344 33.5141L22 37.1701V26.0001H26ZM24 4.00012C27.434 4.00029 30.7482 5.26235 33.3124 7.54636C35.8767 9.83037 37.5122 12.977 37.908 16.3881C40.3966 17.0668 42.5675 18.5983 44.0414 20.7152C45.5152 22.832 46.1983 25.3995 45.9713 27.9689C45.7442 30.5383 44.6214 32.9462 42.7992 34.7718C40.9769 36.5973 38.571 37.7244 36.002 37.9561L36 34.0001C36.0032 30.8544 34.771 27.8332 32.5687 25.587C30.3665 23.3408 27.3702 22.0492 24.2251 21.9902C21.0799 21.9312 18.0374 23.1096 15.7524 25.2716C13.4675 27.4337 12.1228 30.4065 12.008 33.5501L12 34.0001V37.9561C9.43093 37.7248 7.02484 36.5979 5.2023 34.7725C3.37976 32.9471 2.25669 30.5392 2.02938 27.9698C1.80207 25.4003 2.48499 22.8327 3.95877 20.7157C5.43255 18.5987 7.60345 17.0669 10.092 16.3881C10.4874 12.9769 12.1228 9.82994 14.6872 7.54585C17.2515 5.26176 20.5659 3.99985 24 4.00012Z"
                                            fill="url(#paint0_linear)"
                                        />
                                        <defs>
                                            <linearGradient id="paint0_linear" x1="24.0003" y1="4.00012" x2="24.0003" y2="44.8281" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F56565" />
                                                <stop offset={1} stopColor="#D53F8C" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg xl:-mt-20">
                                <h1 className="text-3xl font-bold w-1/2">Effortless onboarding</h1>
                                <div className="flex justify-end w-full items-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                                        <path
                                            d="M40 40C40 40.5304 39.7893 41.0391 39.4142 41.4142C39.0391 41.7892 38.5304 42 38 42H10C9.46957 42 8.96086 41.7892 8.58579 41.4142C8.21071 41.0391 8 40.5304 8 40V22H2L22.654 3.22396C23.0222 2.88892 23.5022 2.70325 24 2.70325C24.4978 2.70325 24.9778 2.88892 25.346 3.22396L46 22H40V40ZM15 26C15 28.3869 15.9482 30.6761 17.636 32.3639C19.3239 34.0518 21.6131 35 24 35C26.3869 35 28.6761 34.0518 30.364 32.3639C32.0518 30.6761 33 28.3869 33 26H29C29 27.326 28.4732 28.5978 27.5355 29.5355C26.5979 30.4732 25.3261 31 24 31C22.6739 31 21.4021 30.4732 20.4645 29.5355C19.5268 28.5978 19 27.326 19 26H15Z"
                                            fill="url(#paint0_linear)"
                                        />
                                        <defs>
                                            <linearGradient id="paint0_linear" x1={24} y1="2.70325" x2={24} y2={42} gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F56565" />
                                                <stop offset={1} stopColor="#D53F8C" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg xl:-mt-20">
                                <h1 className="text-3xl font-bold w-10/12">Access from anywhere</h1>
                                <div className="flex justify-end w-full items-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                                        <path
                                            d="M38 12H22C21.4696 12 20.9609 12.2107 20.5858 12.5858C20.2107 12.9609 20 13.4696 20 14V40H8C7.46957 40 6.96086 39.7893 6.58579 39.4142C6.21071 39.0391 6 38.5304 6 38V6C6 5.46957 6.21071 4.96086 6.58579 4.58579C6.96086 4.21071 7.46957 4 8 4H36C36.5304 4 37.0391 4.21071 37.4142 4.58579C37.7893 4.96086 38 5.46957 38 6V12ZM26 16H42C42.5304 16 43.0391 16.2107 43.4142 16.5858C43.7893 16.9609 44 17.4696 44 18V42C44 42.5304 43.7893 43.0391 43.4142 43.4142C43.0391 43.7893 42.5304 44 42 44H26C25.4696 44 24.9609 43.7893 24.5858 43.4142C24.2107 43.0391 24 42.5304 24 42V18C24 17.4696 24.2107 16.9609 24.5858 16.5858C24.9609 16.2107 25.4696 16 26 16Z"
                                            fill="url(#paint0_linear)"
                                        />
                                        <defs>
                                            <linearGradient id="paint0_linear" x1={25} y1={4} x2={25} y2={44} gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F56565" />
                                                <stop offset={1} stopColor="#D53F8C" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg xl:-mt-20">
                                <h1 className="text-3xl font-bold w-9/12">Build &amp; ship rapidly</h1>
                                <div className="flex justify-end w-full items-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                                        <path d="M12.91 38L4 45V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V36C44 36.5304 43.7893 37.0391 43.4142 37.4142C43.0391 37.7893 42.5304 38 42 38H12.91ZM22.586 24.242L17.636 19.292L14.808 22.122L22.586 29.9L33.9 18.586L31.072 15.758L22.586 24.242Z" fill="url(#paint0_linear)" />
                                        <defs>
                                            <linearGradient id="paint0_linear" x1={24} y1={6} x2={24} y2={45} gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F56565" />
                                                <stop offset={1} stopColor="#D53F8C" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="pt-10 lg:pt-40">
                            <div className="container mx-auto">
                                <div className="flex flex-wrap items-center">
                                    <div className="lg:w-2/3 w-full xl:pr-20">
                                        <div className="py-2 text-color">
                                            <h1 className=" text-2xl lg:text-6xl lg:leading-snug tracking-tighter f-f-l font-black">Boost adoption of product and services</h1>
                                            <h2 className="text-lg lg:text-3xl leading-7 lg:leading-10 f-f-r py-4 lg:py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                            <div className="flex items-center cursor-pointer">
                                                <h3 className="f-f-r text-2xl font-semibold underline text-color-pink ">Lets Get Started</h3>
                                                <div className="pl-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 w-full relative min-height-images flex items-end justify-center ">
                                        <img className="absolute w-full h-full inset-0 object-cover object-center rounded-xl" src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png" alt />
                                        <div className="relative z-10  bg-white rounded shadow p-6 w-10/12 -mb-20">
                                            <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                                <div className="flex items-center">
                                                    <div className="p-4 bg-yellow-200 rounded-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <line x1={9} y1={15} x2={15} y2={9} />
                                                            <circle cx="9.5" cy="9.5" r=".5" />
                                                            <circle cx="14.5" cy="14.5" r=".5" />
                                                            <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                                                        </svg>
                                                    </div>
                                                    <div className="ml-6">
                                                        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">2,330</h3>
                                                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Avg Sales</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center pl-3 text-green-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="3 17 9 11 13 15 21 7" />
                                                            <polyline points="14 7 21 7 21 14" />
                                                        </svg>
                                                        <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2%</p>
                                                    </div>
                                                    <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">Increase</p>
                                                </div>
                                            </div>
                                            <div className="relative mb-3">
                                                <hr className="h-1 rounded-sm bg-gray-200" />
                                                <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                                            </div>
                                            <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">Yearly Goal</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-28  lg:py-28">
                            <div className>
                                <div className="flex flex-wrap items-center">
                                    <div className="lg:w-1/3 w-full relative min-height-images flex items-end justify-center ">
                                        <img className="absolute w-full h-full inset-0 object-cover object-center rounded-xl" src="https://cdn.tuk.dev/assets/templates/prodify/stayUpdated.png" alt />
                                        <div className="relative z-10  bg-white rounded shadow p-6 w-10/12 -mb-20">
                                            <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                                <div className="flex items-center">
                                                    <div className="p-4 bg-yellow-200 rounded-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <line x1={9} y1={15} x2={15} y2={9} />
                                                            <circle cx="9.5" cy="9.5" r=".5" />
                                                            <circle cx="14.5" cy="14.5" r=".5" />
                                                            <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                                                        </svg>
                                                    </div>
                                                    <div className="ml-6">
                                                        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">2,330</h3>
                                                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Avg Sales</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center pl-3 text-green-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="3 17 9 11 13 15 21 7" />
                                                            <polyline points="14 7 21 7 21 14" />
                                                        </svg>
                                                        <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2%</p>
                                                    </div>
                                                    <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">Increase</p>
                                                </div>
                                            </div>
                                            <div className="relative mb-3">
                                                <hr className="h-1 rounded-sm bg-gray-200" />
                                                <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                                            </div>
                                            <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">Yearly Goal</h4>
                                        </div>
                                    </div>
                                    <div className="lg:w-2/3 py-24 lg:py-0 w-full lg:pl-20">
                                        <div className="py-2 text-color">
                                            <h1 className=" text-2xl lg:text-3xl lg:text-6xl tracking-tighter lg:leading-snug f-f-l font-black">Stay up to date with how you’re performing</h1>
                                            <h2 className="text-lg lg:text-3xl leading-7 lg:leading-10 f-f-r py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                            <div className="flex items-center cursor-pointer">
                                                <h3 className="f-f-r text-2xl font-semibold underline text-color-pink ">Lets Get Started</h3>
                                                <div className="pl-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-32">
                            <div className="mx-auto">
                                <div className="flex flex-wrap items-center">
                                    <div className="lg:w-2/3 w-full lg:pr-20">
                                        <div className="py-2 text-color">
                                            <h1 className="text-2xl lg:text-6xl tracking-tighter lg:leading-snug f-f-l font-black">Easily manage sales through our invoicing system</h1>
                                            <h2 className="text-lg lg:text-3xl leading-10 f-f-r py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                            <div className="flex items-center cursor-pointer">
                                                <h3 className="f-f-r text-2xl font-semibold underline text-color-pink ">Lets Get Started</h3>
                                                <div className="pl-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 w-full relative min-height-images flex items-end justify-center ">
                                        <img className="absolute w-full h-full inset-0 object-cover object-center rounded-xl" src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png" alt />
                                        <div className="relative z-10 p-4 bg-white shadow-lg rounded mx-auto w-9/12 -mb-20">
                                            <h4 className="text-gray-800 font-normal text-lg leading-4 tracking-normal mb-2">Invoice # 35RD87</h4>
                                            <p className="text-gray-600 text-xs leading-3 font-normal">Assigned to: Josh Rollins</p>
                                            <div className="mt-4 flex items-center">
                                                <span className="text-gray-600">
                                                    <svg className="feather feather-user" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx={12} cy={7} r={4} />
                                                    </svg>
                                                </span>
                                                <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">Specter Consultancy</p>
                                            </div>
                                            <div className="mt-3 flex items-center">
                                                <span className="text-gray-600">
                                                    <svg className="feather feather-dollar-sign" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1={12} y1={1} x2={12} y2={23} />
                                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                                    </svg>
                                                </span>
                                                <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">2,354 USD</p>
                                            </div>
                                            <button className="relative focus:outline-none mt-4 py-2 pr-10 bg-linear-button-home text-white tracking-normal text-xs pl-3 cursor-pointer">
                                                View Invoice
                                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={13} y1={18} x2={19} y2={12} />
                                                    <line x1={13} y1={6} x2={19} y2={12} />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-20 flex flex-col items-center justify-center pb-5 lg:pb-40">
                            <div className="w-full lg:w-9/12 h-0.5 background-brands" />
                            <div className="lg:flex items-center justify-between pt-16 border-brands w-9/12 f-f-l">
                                <div className="pb-4 lg:pb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={143} height={47} viewBox="0 0 143 47" fill="none">
                                        <path d="M61.2515 24.3188C61.2515 30.9312 56.0054 35.8037 49.5672 35.8037C43.129 35.8037 37.8828 30.9312 37.8828 24.3188C37.8828 17.6599 43.129 12.834 49.5672 12.834C56.0054 12.834 61.2515 17.6599 61.2515 24.3188ZM56.1366 24.3188C56.1366 20.1868 53.0961 17.3596 49.5672 17.3596C46.0382 17.3596 42.9977 20.1868 42.9977 24.3188C42.9977 28.4095 46.0382 31.2781 49.5672 31.2781C53.0961 31.2781 56.1366 28.4043 56.1366 24.3188Z" fill="#EA4335" />
                                        <path d="M86.4576 24.3188C86.4576 30.9312 81.2114 35.8037 74.7732 35.8037C68.335 35.8037 63.0889 30.9312 63.0889 24.3188C63.0889 17.6651 68.335 12.834 74.7732 12.834C81.2114 12.834 86.4576 17.6599 86.4576 24.3188ZM81.3427 24.3188C81.3427 20.1868 78.3022 17.3596 74.7732 17.3596C71.2443 17.3596 68.2037 20.1868 68.2037 24.3188C68.2037 28.4095 71.2443 31.2781 74.7732 31.2781C78.3022 31.2781 81.3427 28.4043 81.3427 24.3188Z" fill="#FBBC05" />
                                        <path
                                            d="M110.614 13.5278V34.1463C110.614 42.6278 105.541 46.0918 99.5437 46.0918C93.8984 46.0918 90.5008 42.3689 89.2194 39.3242L93.6726 37.4964C94.4656 39.3657 96.4086 41.5715 99.5384 41.5715C103.377 41.5715 105.756 39.2362 105.756 34.8402V33.1884H105.578C104.433 34.5813 102.227 35.7981 99.4439 35.7981C93.6201 35.7981 88.2847 30.7962 88.2847 24.36C88.2847 17.8773 93.6201 12.834 99.4439 12.834C102.222 12.834 104.427 14.0508 105.578 15.4022H105.756V13.533H110.614V13.5278ZM106.118 24.36C106.118 20.3161 103.382 17.3595 99.9008 17.3595C96.3718 17.3595 93.4153 20.3161 93.4153 24.36C93.4153 28.3626 96.3718 31.2778 99.9008 31.2778C103.382 31.2778 106.118 28.3626 106.118 24.36Z"
                                            fill="#4285F4"
                                        />
                                        <path d="M118.622 1.44336V35.1001H113.634V1.44336H118.622Z" fill="#34A853" />
                                        <path d="M138.064 28.0965L142.034 30.7061C140.753 32.5753 137.665 35.7959 132.33 35.7959C125.713 35.7959 120.771 30.7527 120.771 24.3115C120.771 17.482 125.755 12.8271 131.757 12.8271C137.802 12.8271 140.758 17.57 141.724 20.133L142.255 21.4378L126.684 27.7962C127.876 30.1003 129.73 31.2757 132.33 31.2757C134.934 31.2757 136.741 30.0123 138.064 28.0965ZM125.844 23.9646L136.252 19.7033C135.68 18.269 133.957 17.2697 131.93 17.2697C129.331 17.2697 125.713 19.5324 125.844 23.9646Z" fill="#EA4335" />
                                        <path
                                            d="M18.9986 21.3304V16.4581H35.6508C35.8136 17.3073 35.8976 18.3118 35.8976 19.3991C35.8976 23.0547 34.8841 27.5749 31.6177 30.7956C28.4406 34.0576 24.3813 35.7974 19.0039 35.7974C9.03674 35.7974 0.655518 27.7924 0.655518 17.9648C0.655518 8.13728 9.03674 0.132324 19.0039 0.132324C24.5179 0.132324 28.4459 2.2656 31.3972 5.0461L27.9103 8.4842C25.7939 6.52697 22.9267 5.00468 18.9986 5.00468C11.7202 5.00468 6.0277 10.7883 6.0277 17.9648C6.0277 25.1413 11.7202 30.925 18.9986 30.925C23.7196 30.925 26.4084 29.0558 28.1308 27.3575C29.5277 25.9802 30.4467 24.0126 30.809 21.3253L18.9986 21.3304Z"
                                            fill="#4285F4"
                                        />
                                    </svg>
                                </div>
                                <div className="py-4 lg:py-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={143} height={46} viewBox="0 0 143 46" fill="none">
                                        <path
                                            d="M41.1345 32.0058C40.9114 31.4582 40.7022 30.8825 40.479 30.3911L39.4469 28.0463L39.4051 28.0042C36.3368 21.2646 33.0593 14.4128 29.5865 7.67322L29.447 7.3924C29.0984 6.73249 28.7497 6.00237 28.3871 5.32842C27.9408 4.5281 27.5084 3.67161 26.7971 2.85725C26.1038 2.00517 25.2312 1.31865 24.2423 0.847261C23.2535 0.375867 22.173 0.131348 21.0789 0.131348C19.9848 0.131348 18.9043 0.375867 17.9154 0.847261C16.9266 1.31865 16.054 2.00517 15.3607 2.85725C14.7052 3.67161 14.217 4.5281 13.7707 5.32842C13.4221 6.05853 13.0734 6.77461 12.7108 7.43452L12.5713 7.71534C9.15432 14.4549 5.82101 21.3067 2.7527 28.0463L2.66902 28.1305C2.36219 28.8607 1.99957 29.6188 1.6509 30.4332C1.42775 30.9246 1.2046 31.4582 0.981446 32.0479C0.378986 33.5921 0.186602 35.2676 0.423253 36.9095C0.659904 38.5513 1.31742 40.1027 2.33101 41.4108C3.34459 42.7189 4.67926 43.7386 6.20347 44.3692C7.72768 44.9999 9.38883 45.2199 11.0232 45.0075C12.5901 44.7998 14.0989 44.2744 15.4583 43.463C17.2714 42.438 19.0148 40.9497 20.9673 38.8015C22.9199 40.9497 24.7051 42.438 26.4763 43.477C28.1797 44.4835 30.1086 45.0391 32.083 45.0917C34.3694 45.1013 36.582 44.2778 38.3123 42.7732C40.0427 41.2686 41.1739 39.1846 41.4971 36.906C41.8707 35.2685 41.7443 33.5557 41.1345 31.9917V32.0058ZM21.1068 34.3365C18.7079 31.2476 17.1459 28.4113 16.6159 25.9823C16.3963 25.0822 16.349 24.1482 16.4764 23.2303C16.5741 22.5142 16.839 21.8824 17.2017 21.3489C18.0385 20.1273 19.5029 19.3691 21.1068 19.3691C21.8685 19.3457 22.624 19.513 23.3056 19.8561C23.9872 20.1992 24.5735 20.7073 25.0119 21.3348C25.3745 21.8965 25.6395 22.5142 25.7232 23.2303C25.8627 24.0447 25.8069 24.9854 25.5837 25.9823C25.0538 28.3692 23.4917 31.2335 21.1068 34.3365ZM38.8751 36.4146C38.7167 37.5714 38.2598 38.6663 37.5502 39.5901C36.8406 40.5139 35.9029 41.2344 34.8305 41.6798C33.7706 42.1291 32.599 42.2555 31.4554 42.1291C30.3396 41.9887 29.2239 41.6237 28.0802 40.9497C26.1814 39.7682 24.4739 38.3002 23.0175 36.5971C25.9464 32.9465 27.7176 29.6189 28.3871 26.6563C28.7078 25.2522 28.7497 23.9885 28.6102 22.8231C28.4361 21.7185 28.0269 20.6649 27.4108 19.7342C26.7073 18.725 25.7683 17.9053 24.6764 17.3471C23.5845 16.7889 22.373 16.5093 21.1486 16.5329C18.5685 16.5329 16.2672 17.7404 14.8725 19.7201C14.2447 20.6485 13.8389 21.7105 13.6871 22.8231C13.5057 24.0026 13.5476 25.3084 13.9102 26.6563C14.5797 29.6189 16.3927 32.9886 19.2798 36.6252C17.8481 38.3608 16.1366 39.8417 14.217 41.0059C13.0594 41.6798 11.9576 42.0308 10.8419 42.1712C9.10674 42.395 7.35398 41.9202 5.96461 40.8502C4.57524 39.7801 3.66155 38.2012 3.42215 36.4567C3.28268 35.3334 3.38031 34.2102 3.82661 32.9465C3.96608 32.4972 4.17528 32.0479 4.39843 31.5143C4.70526 30.7842 5.06788 30.026 5.41655 29.2678L5.47234 29.1695C8.48487 22.4721 11.7763 15.6343 15.1933 8.93688L15.3328 8.65607C15.6815 7.98211 16.0301 7.26604 16.3927 6.59208C16.7554 5.87601 17.1459 5.18801 17.648 4.62638C18.0826 4.1041 18.6256 3.68407 19.2389 3.39588C19.8521 3.10768 20.5207 2.95833 21.1974 2.95833C21.8742 2.95833 22.5428 3.10768 23.156 3.39588C23.7693 3.68407 24.3123 4.1041 24.7469 4.62638C25.2351 5.18801 25.6395 5.87601 26.0021 6.59208C26.3508 7.26604 26.6995 7.99615 27.0621 8.65607L27.2016 8.93688C30.6046 15.6343 33.8961 22.4721 36.9644 29.1695L37.0062 29.2117C37.3689 29.9418 37.6757 30.7561 38.0244 31.4582C38.2475 32.0058 38.4707 32.441 38.6101 32.9044C38.8751 34.168 39.0146 35.2913 38.8751 36.4146ZM58.2892 34.0276C57.2382 34.0431 56.1973 33.8202 55.2436 33.3754C54.2899 32.9306 53.4479 32.2753 52.7802 31.4582C51.2796 29.7171 50.4832 27.4721 50.5487 25.1679C50.5257 22.8136 51.3478 20.5301 52.8638 18.7373C53.5651 17.9098 54.438 17.2471 55.4211 16.7959C56.4043 16.3446 57.4737 16.1159 58.5542 16.1257C59.5708 16.0977 60.5778 16.3304 61.4805 16.802C62.3832 17.2736 63.152 17.9686 63.7145 18.8215L63.854 16.6172H67.9265V33.5783H63.84L63.7006 31.1072C63.1206 32.0179 62.319 32.7643 61.3719 33.2755C60.4248 33.7866 59.3636 34.0455 58.2892 34.0276ZM59.3491 29.9839C60.1581 29.9839 60.8693 29.7593 61.5388 29.3521C62.1525 28.9028 62.6545 28.3131 63.0451 27.597C63.3937 26.8809 63.575 26.0244 63.575 25.0697C63.6294 24.2404 63.4691 23.4111 63.1097 22.663C62.7503 21.9148 62.2043 21.2733 61.5248 20.8013C60.872 20.3918 60.1183 20.1748 59.3491 20.1748C58.58 20.1748 57.8262 20.3918 57.1734 20.8013C56.5598 21.2506 56.0577 21.8403 55.6672 22.5564C55.2983 23.3461 55.1169 24.2113 55.1372 25.0837C55.0828 25.9129 55.2431 26.7422 55.6025 27.4904C55.9619 28.2386 56.508 28.88 57.1874 29.3521C57.8429 29.7593 58.5542 29.9839 59.3491 29.9839ZM74.8999 12.0399C74.8999 12.5313 74.8162 12.9806 74.5931 13.3457C74.3699 13.6967 74.0631 14.0196 73.6586 14.2443C73.2542 14.4689 72.8218 14.5532 72.3755 14.5532C71.9292 14.5532 71.4829 14.4689 71.0785 14.2443C70.6959 14.0299 70.3743 13.7205 70.144 13.3457C69.928 12.9457 69.8221 12.4949 69.8372 12.0399C69.8372 11.5344 69.9348 11.0851 70.144 10.7341C70.3672 10.3129 70.6879 10.0601 71.0785 9.83549C71.4829 9.61084 71.9153 9.51255 72.3755 9.51255C72.8195 9.50225 73.2585 9.6081 73.6496 9.81975C74.0407 10.0314 74.3706 10.3416 74.607 10.7201C74.81 11.1294 74.9105 11.5825 74.8999 12.0399ZM70.158 33.5222V16.5891H74.5931V33.5503H70.144L70.158 33.5222ZM86.4479 21.0259V21.0821C86.2387 20.9838 85.9598 20.9417 85.7506 20.8996C85.4716 20.8434 85.2485 20.8434 84.9835 20.8434C83.7422 20.8434 82.8078 21.2085 82.1941 21.9667C81.5247 22.7389 81.2178 23.82 81.2178 25.2101V33.5362H76.7688V16.575H80.8552L80.9947 19.1445C81.441 18.2459 81.971 17.5719 82.7241 17.0665C83.4732 16.5753 84.3552 16.3301 85.2485 16.3644C85.5693 16.3644 85.8761 16.3925 86.1411 16.4487C86.2806 16.4908 86.3642 16.4908 86.4479 16.5329V21.0259ZM88.2331 33.5222V9.62488H92.6682V18.7513C93.2958 17.937 94.0071 17.3051 94.8997 16.8137C96.3128 16.1162 97.9181 15.9184 99.4566 16.2521C100.995 16.5858 102.377 17.4316 103.379 18.6531C104.883 20.3978 105.68 22.6483 105.611 24.9573C105.634 27.3117 104.812 29.5952 103.296 31.388C102.595 32.2155 101.722 32.8782 100.738 33.3294C99.7553 33.7806 98.6859 34.0094 97.6054 33.9996C96.5888 34.0276 95.5818 33.7948 94.6791 33.3233C93.7764 32.8517 93.0076 32.1567 92.4451 31.3037L92.3056 33.5081L88.2331 33.5503V33.5222ZM96.8105 29.9839C97.6054 29.9839 98.3167 29.7593 98.9862 29.3521C99.5998 28.9028 100.102 28.3131 100.492 27.597C100.855 26.8809 101.022 26.0244 101.022 25.0697C101.022 24.1289 100.855 23.2724 100.492 22.5564C100.126 21.8659 99.6116 21.2663 98.9862 20.8013C98.3334 20.3918 97.5796 20.1748 96.8105 20.1748C96.0413 20.1748 95.2876 20.3918 94.6347 20.8013C94.0071 21.2506 93.519 21.8403 93.1145 22.5564C92.7457 23.3461 92.5643 24.2113 92.5845 25.0837C92.5302 25.9129 92.6905 26.7422 93.0499 27.4904C93.4092 28.2386 93.9553 28.88 94.6347 29.3521C95.2902 29.7593 96.0015 29.9839 96.8105 29.9839ZM107.285 33.5362V16.575H111.371L111.51 18.7794C112.024 17.9344 112.752 17.2429 113.62 16.7764C114.488 16.3098 115.465 16.0852 116.448 16.1257C117.572 16.1062 118.677 16.4207 119.625 17.0301C120.572 17.6394 121.32 18.5165 121.775 19.5517C122.264 20.6188 122.528 21.9386 122.528 23.4129V33.5783H118.079V24.0026C118.079 22.8231 117.814 21.8965 117.284 21.2085C116.754 20.5345 116.029 20.1695 115.109 20.1695C114.439 20.1695 113.854 20.3099 113.338 20.6188C112.849 20.9417 112.445 21.3489 112.138 21.9245C111.828 22.5064 111.674 23.1599 111.692 23.82V33.5362H107.285ZM124.746 33.5362V9.61084H129.195V18.7373C129.798 17.9184 130.582 17.2522 131.485 16.7915C132.388 16.3309 133.385 16.0885 134.397 16.0836C135.448 16.0681 136.489 16.2911 137.443 16.7359C138.397 17.1807 139.239 17.8359 139.906 18.6531C141.399 20.3976 142.191 22.6414 142.124 24.9433C142.148 27.2978 141.326 29.5818 139.809 31.3739C139.107 32.2015 138.234 32.8642 137.251 33.3154C136.268 33.7666 135.199 33.9953 134.118 33.9855C133.102 34.0135 132.095 33.7808 131.192 33.3092C130.289 32.8376 129.521 32.1427 128.958 31.2897L128.832 33.4941L124.746 33.5362ZM133.365 29.9839C134.174 29.9839 134.885 29.7593 135.541 29.3521C136.169 28.9028 136.657 28.3131 137.061 27.597C137.41 26.8809 137.591 26.0244 137.591 25.0697C137.646 24.2404 137.485 23.4111 137.126 22.663C136.766 21.9148 136.22 21.2733 135.541 20.8013C134.888 20.3918 134.134 20.1748 133.365 20.1748C132.596 20.1748 131.842 20.3918 131.19 20.8013C130.576 21.2506 130.074 21.8403 129.683 22.5564C129.294 23.339 129.111 24.2094 129.153 25.0837C129.099 25.9129 129.259 26.7422 129.619 27.4904C129.978 28.2386 130.524 28.88 131.203 29.3521C131.859 29.7593 132.528 29.9839 133.365 29.9839Z"
                                            fill="#FF385C"
                                        />
                                    </svg>
                                </div>
                                <div className="py-4 lg:py-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={162} height={46} viewBox="0 0 162 46" fill="none">
                                        <path d="M18.3993 7.60742V20.5667H6.59745V7.60742H0.994385V38.5425H6.59745V26.004H18.3993V38.5425H24.0024V7.60742H18.3993Z" fill="#33475B" />
                                        <path d="M41.9342 28.5431C41.9342 29.7829 41.4458 30.9719 40.5765 31.8485C39.7072 32.7252 38.5282 33.2177 37.2988 33.2177C36.0694 33.2177 34.8904 32.7252 34.0211 31.8485C33.1518 30.9719 32.6635 29.7829 32.6635 28.5431V15.293H27.3486V28.5431C27.3486 31.2018 28.3959 33.7517 30.2602 35.6317C32.1244 37.5117 34.6528 38.5679 37.2892 38.5679C39.9256 38.5679 42.454 37.5117 44.3183 35.6317C46.1825 33.7517 47.2298 31.2018 47.2298 28.5431V15.293H41.9342V28.5431Z" fill="#33475B" />
                                        <path d="M81.3125 16.6582C81.3125 13.9423 83.0942 13.0813 85.046 13.0813C86.6191 13.0813 88.6972 14.2883 90.0561 15.7529L93.5371 11.6167C91.7994 9.24687 88.2745 7.60791 85.3892 7.60791C79.6242 7.60791 75.4542 11.0132 75.4542 16.6582C75.4542 27.1315 88.1482 23.8093 88.1482 29.6702C88.1482 31.478 86.4077 33.0755 84.4146 33.0755C81.2713 33.0755 80.2529 31.5251 78.8089 29.8861L74.9463 33.9365C77.417 36.9957 80.4642 38.5488 84.1154 38.5488C89.5922 38.5488 93.9983 35.102 93.9983 29.7145C93.9983 18.0867 81.3043 21.6997 81.3043 16.6582" fill="#33475B" />
                                        <path d="M159.843 33.6016C156.703 33.6016 155.81 32.2312 155.81 30.1327V20.8444H160.691V16.138H155.81V9.92822L150.421 12.3673V31.2872C150.421 36.1265 153.732 38.5656 158.273 38.5656C158.985 38.5786 159.697 38.5212 160.398 38.3939L161.713 33.5131C161.12 33.5546 160.439 33.5961 159.843 33.5961" fill="#33475B" />
                                        <path
                                            d="M62.1642 15.4483C59.5315 15.4483 57.6949 16.218 55.9187 17.976V7.79346H50.5957V26.6663C50.5957 33.7315 55.6607 38.5708 61.3516 38.5708C67.6657 38.5708 73.2193 33.6456 73.2193 27.0123C73.2193 20.4621 68.1076 15.4511 62.1642 15.4511V15.4483ZM62.1312 33.1695C60.9367 33.1695 59.769 32.8123 58.7758 32.143C57.7826 31.4738 57.0085 30.5225 56.5514 29.4096C56.0943 28.2967 55.9747 27.072 56.2077 25.8905C56.4408 24.7091 57.016 23.6238 57.8606 22.772C58.7053 21.9202 59.7814 21.3401 60.953 21.1051C62.1245 20.8701 63.3389 20.9907 64.4425 21.4517C65.5461 21.9127 66.4893 22.6934 67.1529 23.695C67.8166 24.6966 68.1708 25.8742 68.1708 27.0788C68.1708 28.6941 67.5345 30.2433 66.4018 31.3855C65.2692 32.5278 63.733 33.1695 62.1312 33.1695Z"
                                            fill="#33475B"
                                        />
                                        <path
                                            d="M119.963 26.7307C119.963 20.0864 114.42 15.1724 108.095 15.1724C102.404 15.1724 97.3391 20.0116 97.3391 27.0768V45.9604H102.662V35.7642C104.436 37.5194 106.275 38.2918 108.905 38.2918C114.848 38.2918 119.96 33.2837 119.96 26.7307H119.963ZM114.922 26.6643C114.922 27.8689 114.568 29.0464 113.905 30.048C113.241 31.0496 112.298 31.8303 111.194 32.2913C110.091 32.7522 108.876 32.8729 107.705 32.6378C106.533 32.4028 105.457 31.8228 104.612 30.971C103.768 30.1192 103.192 29.0339 102.959 27.8525C102.726 26.671 102.846 25.4464 103.303 24.3335C103.76 23.2206 104.534 22.2693 105.527 21.6001C106.521 20.9308 107.688 20.5736 108.883 20.5736C110.485 20.5736 112.021 21.2153 113.153 22.3575C114.286 23.4998 114.922 25.0489 114.922 26.6643Z"
                                            fill="#33475B"
                                        />
                                        <path
                                            d="M137.159 14.911V9.51799C137.866 9.18499 138.464 8.65639 138.885 7.99375C139.305 7.33111 139.53 6.56168 139.534 5.77503V5.65044C139.534 4.54908 139.1 3.49282 138.328 2.71404C137.555 1.93526 136.508 1.49774 135.416 1.49774H135.292C134.2 1.49774 133.153 1.93526 132.381 2.71404C131.608 3.49282 131.174 4.54908 131.174 5.65044V5.77503C131.178 6.56168 131.403 7.33111 131.824 7.99375C132.244 8.65639 132.842 9.18499 133.549 9.51799V14.911C131.518 15.2243 129.605 16.0734 128.004 17.3721L113.339 5.85254C113.442 5.47267 113.498 5.08101 113.503 4.68702C113.505 3.76154 113.234 2.85636 112.726 2.08598C112.217 1.3156 111.494 0.714623 110.646 0.359067C109.799 0.00351053 108.866 -0.0906519 107.966 0.0884899C107.065 0.267632 106.238 0.71203 105.588 1.36547C104.938 2.01892 104.495 2.85205 104.315 3.75949C104.134 4.66693 104.225 5.60792 104.575 6.46342C104.925 7.31892 105.519 8.05051 106.281 8.56565C107.044 9.08078 107.941 9.35633 108.858 9.35742C109.661 9.35381 110.448 9.13808 111.142 8.73175L125.585 20.0631C124.287 22.0397 123.61 24.3648 123.642 26.7352C123.674 29.1056 124.413 31.4113 125.764 33.3517L121.371 37.7813C121.016 37.6669 120.646 37.6063 120.273 37.6013C119.52 37.6019 118.783 37.8277 118.157 38.2501C117.531 38.6725 117.043 39.2727 116.755 39.9747C116.467 40.6768 116.392 41.4492 116.539 42.1943C116.686 42.9395 117.049 43.6239 117.581 44.1611C118.114 44.6984 118.793 45.0643 119.532 45.2126C120.271 45.361 121.037 45.2851 121.733 44.9946C122.429 44.7041 123.024 44.2121 123.443 43.5806C123.862 42.9491 124.086 42.2065 124.086 41.4468C124.082 41.0707 124.021 40.6975 123.908 40.3394L128.254 35.9569C129.671 37.0566 131.318 37.8146 133.071 38.1729C134.823 38.5312 136.634 38.4803 138.364 38.0241C140.093 37.5679 141.697 36.7185 143.051 35.5409C144.405 34.3633 145.474 32.8888 146.176 31.2303C146.877 29.5718 147.194 27.7734 147.1 25.9727C147.006 24.172 146.505 22.4168 145.634 20.8417C144.764 19.2665 143.548 17.9131 142.079 16.8851C140.61 15.8571 138.927 15.1818 137.159 14.911ZM135.358 32.6458C134.17 32.6447 133.008 32.2882 132.02 31.6215C131.032 30.9548 130.262 30.0076 129.808 28.8998C129.354 27.792 129.235 26.5733 129.468 25.3976C129.7 24.222 130.273 23.1422 131.114 22.2947C131.954 21.4472 133.025 20.8701 134.191 20.6363C135.357 20.4025 136.566 20.5225 137.664 20.9811C138.762 21.4398 139.701 22.2164 140.362 23.213C141.022 24.2096 141.375 25.3813 141.376 26.5801C141.376 28.1881 140.742 29.7302 139.615 30.8672C138.487 32.0042 136.958 32.643 135.364 32.643"
                                            fill="#FF7A59"
                                        />
                                    </svg>
                                </div>
                                <div className="py-4 lg:py-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={211} height={45} viewBox="0 0 211 45" fill="none">
                                        <path
                                            d="M74.6726 25.8897L73.4224 29.4258H73.3183C73.1099 28.6284 72.7279 27.415 72.1029 25.959L65.4008 9.14502H58.8376V35.9434H63.1784V19.4067C63.1784 18.3667 63.1784 17.188 63.1436 15.7319C63.1089 15.0039 63.0395 14.4492 63.0047 14.0332H63.1089C63.3173 15.0732 63.5603 15.8359 63.734 16.3213L71.7903 35.874H74.8462L82.8331 16.1479C83.0067 15.6973 83.1803 14.7959 83.354 14.0332H83.4582C83.354 16.0093 83.2845 17.7773 83.2498 18.8521V35.8394H87.8683V9.07568H81.5482L74.6726 25.8897ZM92.2438 16.6333H96.7581V35.8394H92.2438V16.6333ZM94.5356 8.521C93.7717 8.521 93.1466 8.79834 92.6257 9.28369C92.1049 9.76904 91.827 10.3931 91.827 11.1558C91.827 11.8838 92.1049 12.5078 92.6257 12.9932C93.1466 13.4785 93.7717 13.7212 94.5356 13.7212C95.2996 13.7212 95.9594 13.4438 96.4456 12.9932C96.9664 12.5078 97.2443 11.8838 97.2443 11.1558C97.2443 10.4277 96.9664 9.80371 96.4456 9.28369C95.9941 8.79834 95.3343 8.521 94.5356 8.521ZM112.767 16.46C111.933 16.2866 111.065 16.1826 110.232 16.1826C108.183 16.1826 106.308 16.6333 104.745 17.5347C103.182 18.436 101.932 19.6841 101.134 21.2441C100.3 22.8389 99.8834 24.6763 99.8834 26.791C99.8834 28.6284 100.3 30.2578 101.099 31.7485C101.897 33.2046 103.009 34.3833 104.502 35.1807C105.926 35.978 107.593 36.394 109.468 36.394C111.621 36.394 113.461 35.9434 114.92 35.1113L114.954 35.0767V30.9165L114.781 31.0552C114.121 31.5405 113.357 31.9565 112.593 32.1992C111.794 32.4766 111.065 32.6152 110.44 32.6152C108.634 32.6152 107.211 32.0952 106.203 30.9512C105.162 29.8418 104.641 28.3164 104.641 26.4097C104.641 24.4336 105.162 22.8735 106.238 21.7295C107.315 20.5854 108.738 19.9961 110.475 19.9961C111.933 19.9961 113.426 20.4814 114.781 21.4521L114.954 21.5908V17.188L114.92 17.1533C114.329 16.9106 113.67 16.6333 112.767 16.46ZM127.664 16.3213C126.553 16.3213 125.511 16.668 124.608 17.396C123.844 18.02 123.323 18.9214 122.872 19.9961H122.837V16.6333H118.323V35.8394H122.837V26.0283C122.837 24.3643 123.184 22.9775 123.948 21.9722C124.712 20.9321 125.685 20.4121 126.865 20.4121C127.282 20.4121 127.699 20.5161 128.22 20.5855C128.706 20.7241 129.053 20.8628 129.296 21.0361L129.47 21.1748V16.668L129.366 16.6333C129.053 16.4253 128.428 16.3213 127.664 16.3213ZM139.957 16.2173C136.797 16.2173 134.262 17.1533 132.491 18.9907C130.685 20.8281 129.817 23.3589 129.817 26.5483C129.817 29.5298 130.72 31.9565 132.456 33.7246C134.192 35.458 136.554 36.3594 139.505 36.3594C142.596 36.3594 145.062 35.4233 146.833 33.5513C148.638 31.6792 149.506 29.1831 149.506 26.0977C149.506 23.0469 148.673 20.6201 146.971 18.8521C145.339 17.084 142.943 16.2173 139.957 16.2173ZM143.568 30.9858C142.735 32.0605 141.415 32.5806 139.783 32.5806C138.151 32.5806 136.832 32.0605 135.894 30.9165C134.956 29.8418 134.505 28.2817 134.505 26.3057C134.505 24.2603 134.991 22.7002 135.894 21.5908C136.832 20.4814 138.116 19.9268 139.748 19.9268C141.346 19.9268 142.596 20.4468 143.499 21.5215C144.402 22.5962 144.888 24.1562 144.888 26.2017C144.818 28.2817 144.436 29.9111 143.568 30.9858ZM159.577 24.6069C158.153 24.0176 157.25 23.5669 156.834 23.1855C156.486 22.8389 156.313 22.3535 156.313 21.7295C156.313 21.2095 156.521 20.6895 157.042 20.3428C157.563 19.9961 158.153 19.8228 159.021 19.8228C159.785 19.8228 160.584 19.9614 161.348 20.1694C162.112 20.3774 162.806 20.6895 163.362 21.1055L163.536 21.2441V17.0146L163.431 16.98C162.911 16.772 162.216 16.564 161.383 16.3906C160.549 16.252 159.785 16.1826 159.16 16.1826C157.007 16.1826 155.236 16.7026 153.847 17.8467C152.458 18.9214 151.798 20.3774 151.798 22.0762C151.798 22.9775 151.937 23.7749 152.25 24.4336C152.562 25.0923 153.014 25.7163 153.639 26.2363C154.264 26.7217 155.167 27.2764 156.417 27.7964C157.459 28.2471 158.257 28.5938 158.743 28.8711C159.23 29.1484 159.542 29.4605 159.785 29.7031C159.959 29.9805 160.063 30.3272 160.063 30.7778C160.063 32.0605 159.091 32.6846 157.111 32.6846C156.347 32.6846 155.549 32.5459 154.611 32.2339C153.673 31.9219 152.805 31.4712 152.076 30.9512L151.902 30.8125V35.2153L152.007 35.25C152.666 35.562 153.465 35.77 154.437 36.0127C155.41 36.186 156.278 36.3247 157.042 36.3247C159.369 36.3247 161.278 35.8047 162.633 34.6606C164.022 33.5513 164.751 32.1299 164.751 30.2925C164.751 29.0098 164.404 27.8657 163.64 26.999C162.633 26.167 161.383 25.3003 159.577 24.6069ZM176.662 16.2173C173.502 16.2173 170.967 17.1533 169.196 18.9907C167.425 20.8281 166.522 23.3589 166.522 26.5483C166.522 29.5298 167.425 31.9565 169.161 33.7246C170.897 35.458 173.259 36.3594 176.21 36.3594C179.301 36.3594 181.767 35.4233 183.538 33.5513C185.343 31.6792 186.211 29.1831 186.211 26.0977C186.211 23.0469 185.378 20.6201 183.676 18.8521C182.044 17.084 179.648 16.2173 176.662 16.2173ZM180.239 30.9858C179.405 32.0605 178.086 32.5806 176.454 32.5806C174.787 32.5806 173.502 32.0605 172.564 30.9165C171.627 29.8418 171.175 28.2817 171.175 26.3057C171.175 24.2603 171.661 22.7002 172.564 21.5908C173.502 20.4814 174.787 19.9268 176.419 19.9268C177.981 19.9268 179.266 20.4468 180.169 21.5215C181.072 22.5962 181.558 24.1562 181.558 26.2017C181.558 28.2817 181.107 29.9111 180.239 30.9858ZM210.346 20.3428V16.6333H205.797V10.9478L205.658 10.9824L201.352 12.2651L201.248 12.2998V16.6333H194.441V14.2065C194.441 13.0972 194.719 12.2305 195.205 11.6758C195.692 11.1211 196.421 10.8437 197.324 10.8437C197.949 10.8437 198.609 10.9824 199.338 11.2944L199.511 11.3984V7.48096L199.407 7.44629C198.782 7.23828 197.949 7.09961 196.872 7.09961C195.518 7.09961 194.337 7.41162 193.261 7.93164C192.184 8.521 191.386 9.31836 190.795 10.3931C190.205 11.4331 189.892 12.6118 189.892 13.9639V16.6333H186.732V20.3081H189.892V35.8394H194.441V20.3428H201.248V30.2231C201.248 34.2793 203.158 36.3247 206.977 36.3247C207.602 36.3247 208.262 36.2207 208.887 36.1167C209.547 35.978 210.033 35.8047 210.311 35.666L210.346 35.6313V31.9219L210.172 32.0605C209.894 32.2339 209.651 32.3726 209.235 32.4766C208.887 32.5806 208.575 32.6152 208.332 32.6152C207.429 32.6152 206.804 32.4072 206.352 31.8872C205.936 31.4019 205.727 30.6045 205.727 29.4258V20.3428H210.346Z"
                                            fill="#737373"
                                        />
                                        <path d="M0.637451 0.131348H21.9243V21.3828H0.637451V0.131348Z" fill="#F25022" />
                                        <path d="M24.1465 0.131348H45.4333V21.3828H24.1465V0.131348Z" fill="#7FBA00" />
                                        <path d="M0.637451 23.6016H21.9243V44.8535H0.637451V23.6016Z" fill="#00A4EF" />
                                        <path d="M24.1465 23.6016H45.4333V44.8535H24.1465V23.6016Z" fill="#FFB900" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
