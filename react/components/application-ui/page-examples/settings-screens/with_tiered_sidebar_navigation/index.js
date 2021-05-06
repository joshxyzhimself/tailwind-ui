import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div style={{minHeight: "64rem"}}>
    
  <div className="h-screen flex bg-blue-gray-50 overflow-hidden" data-todo-x-data="{ sidebarOpen: false }" data-todo-x-init="$watch('sidebarOpen', value => { if (value) { $nextTick(() => $refs.sidebar.focus()) } })" data-todo-at-keydown-window-escape="sidebarOpen = false">
    <div data-todo-x-show="sidebarOpen" className="lg:hidden" data-todo-x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state.">
      <div className="fixed inset-0 flex z-40">
        <div data-todo-at-click="sidebarOpen = false" data-todo-x-show="sidebarOpen" data-todo-x-description="Off-canvas menu overlay, show/hide based on off-canvas menu state." data-todo-x-transition-enter="transition-opacity ease-linear duration-300" data-todo-x-transition-enter-start="opacity-0" data-todo-x-transition-enter-end="opacity-100" data-todo-x-transition-leave="transition-opacity ease-linear duration-300" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" className="fixed inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-blue-gray-600 opacity-75"></div>
        </div>
        <div data-todo-x-show="sidebarOpen" data-todo-x-ref="sidebar" tabIndex={0} data-todo-x-description="Off-canvas menu, show/hide based on off-canvas menu state." data-todo-x-transition-enter="transition ease-in-out duration-300 transform" data-todo-x-transition-enter-start="-translate-x-full" data-todo-x-transition-enter-end="translate-x-0" data-todo-x-transition-leave="transition ease-in-out duration-300 transform" data-todo-x-transition-leave-start="translate-x-0" data-todo-x-transition-leave-end="-translate-x-full" className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
          <div className="absolute top-0 right-0 -mr-12 pt-4">
            <button type="button" data-todo-x-show="sidebarOpen" data-todo-at-click="sidebarOpen = false" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Close sidebar</span>
              <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
            </button>
          </div>
          <div className="pt-5 pb-4">
            <div className="flex-shrink-0 flex items-center px-4">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=blue&amp;shade=600" alt="Workflow">
            </div>
            <nav aria-label="Sidebar" className="mt-5">
              <div className="px-2 space-y-1">
                
                  <a href="/" className="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
                    <svg className="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>
                    Home
                  </a>
                
                  <a href="/" className="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
                    <svg className="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" data-todo-x-description="Heroicon name: outline/fire" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
</svg>
                    Trending
                  </a>
                
                  <a href="/" className="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
                    <svg className="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" data-todo-x-description="Heroicon name: outline/bookmark-alt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
                    Bookmarks
                  </a>
                
                  <a href="/" className="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
                    <svg className="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" data-todo-x-description="Heroicon name: outline/inbox" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
</svg>
                    Messages
                  </a>
                
                  <a href="/" className="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900">
                    <svg className="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500" data-todo-x-description="Heroicon name: outline/user" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
</svg>
                    Profile
                  </a>
                
              </div>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-blue-gray-200 p-4">
            <a href="/" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img className="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=256&amp;h=256&amp;q=80" alt="">
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-blue-gray-700 group-hover:text-blue-gray-900">
                    Lisa Marie
                  </p>
                  <p className="text-sm font-medium text-blue-gray-500 group-hover:text-blue-gray-700">
                    Account Settings
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </div>
    </div>

    {/* Static sidebar for desktop */}
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-20">
        <div className="flex flex-col h-0 flex-1 overflow-y-auto bg-blue-600">
          <div className="flex-1 flex flex-col">
            <div className="flex-shrink-0 bg-blue-700 py-4 flex items-center justify-center">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
            </div>
            <nav aria-label="Sidebar" className="py-6 flex flex-col items-center space-y-3">
              
                <a href="/" className="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>
                  <span className="sr-only">Home</span>
                </a>
              
                <a href="/" className="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/fire" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
</svg>
                  <span className="sr-only">Trending</span>
                </a>
              
                <a href="/" className="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/bookmark-alt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
                  <span className="sr-only">Bookmarks</span>
                </a>
              
                <a href="/" className="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/inbox" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
</svg>
                  <span className="sr-only">Messages</span>
                </a>
              
                <a href="/" className="flex items-center p-4 rounded-lg text-blue-200 hover:bg-blue-700">
                  <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/user" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
</svg>
                  <span className="sr-only">Profile</span>
                </a>
              
            </nav>
          </div>
          <div className="flex-shrink-0 flex pb-5">
            <a href="/" className="flex-shrink-0 w-full">
              <img className="block mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=256&amp;h=256&amp;q=80" alt="">
              <div className="sr-only">
                <p>
                  Lisa Marie
                </p>
                <p>
                  Account settings
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
      {/* Mobile top navigation */}
      <div className="lg:hidden">
        <div className="bg-blue-600 py-2 px-4 flex items-center justify-between sm:px-6">
          <div>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
          </div>
          <div>
            <button type="button" data-todo-at-click-stop="sidebarOpen = true" className="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-blue-600 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open sidebar</span>
              <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="bg-white border-b border-blue-gray-200 xl:hidden">
            <div className="max-w-3xl mx-auto py-3 px-4 flex items-start sm:px-6 lg:px-8">
              <a href="/" className="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-blue-gray-900">
                <svg className="h-5 w-5 text-blue-gray-400" data-todo-x-description="Heroicon name: solid/chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
                <span>Settings</span>
              </a>
            </div>
          </nav>

          <div className="flex-1 flex xl:overflow-hidden">
            {/* Secondary sidebar */}
            <nav aria-label="Sections" className="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col">
              <div className="flex-shrink-0 h-16 px-6 border-b border-blue-gray-200 flex items-center">
                <p className="text-lg font-medium text-blue-gray-900">Settings</p>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto">
                
                  
                    {/* Current: "bg-blue-50 bg-opacity-50", Default: "hover:bg-gray-50 hover:bg-opacity-50" */}
                    <a href="/" className="flex p-6 bg-blue-50 bg-opacity-50 border-b border-blue-gray-200" aria-current="page">
                      <svg className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" data-todo-x-description="Heroicon name: outline/cog" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>
                      <div className="ml-3 text-sm">
                        <p className="font-medium text-blue-gray-900">Account</p>
                        <p className="mt-1 text-blue-gray-500">Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit.</p>
                      </div>
                    </a>
                  
                  
                    <a href="/" className="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
                      <svg className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" data-todo-x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
                      <div className="ml-3 text-sm">
                        <p className="font-medium text-blue-gray-900">Notifications</p>
                        <p className="mt-1 text-blue-gray-500">Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus.</p>
                      </div>
                    </a>
                  
                  
                    <a href="/" className="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
                      <svg className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" data-todo-x-description="Heroicon name: outline/key" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
</svg>
                      <div className="ml-3 text-sm">
                        <p className="font-medium text-blue-gray-900">Security</p>
                        <p className="mt-1 text-blue-gray-500">Semper accumsan massa vel volutpat massa. Non turpis ut nulla aliquet turpis.</p>
                      </div>
                    </a>
                  
                  
                    <a href="/" className="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
                      <svg className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" data-todo-x-description="Heroicon name: outline/photograph" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
                      <div className="ml-3 text-sm">
                        <p className="font-medium text-blue-gray-900">Appearance</p>
                        <p className="mt-1 text-blue-gray-500">Magna nulla id sed ornare ipsum eget. Massa eget porttitor suscipit consequat.</p>
                      </div>
                    </a>
                  
                  
                    <a href="/" className="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
                      <svg className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" data-todo-x-description="Heroicon name: outline/cash" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
</svg>
                      <div className="ml-3 text-sm">
                        <p className="font-medium text-blue-gray-900">Billing</p>
                        <p className="mt-1 text-blue-gray-500">Orci aliquam arcu egestas turpis cursus. Lectus faucibus netus dui auctor mauris.</p>
                      </div>
                    </a>
                  
                  
                    <a href="/" className="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
                      <svg className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" data-todo-x-description="Heroicon name: outline/view-grid-add" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
</svg>
                      <div className="ml-3 text-sm">
                        <p className="font-medium text-blue-gray-900">Integrations</p>
                        <p className="mt-1 text-blue-gray-500">Nisi, elit volutpat odio urna quis arcu faucibus dui. Mauris adipiscing pellentesque.</p>
                      </div>
                    </a>
                  
                  
                    <a href="/" className="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
                      <svg className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400" data-todo-x-description="Heroicon name: outline/search-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                      <div className="ml-3 text-sm">
                        <p className="font-medium text-blue-gray-900">Additional Resources</p>
                        <p className="mt-1 text-blue-gray-500">Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et.</p>
                      </div>
                    </a>
                  
              </div>
            </nav>

            {/* Main content */}
            <div className="flex-1 max-h-screen xl:overflow-y-auto">
              <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                <h1 className="text-3xl font-extrabold text-blue-gray-900">Account</h1>

                <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
                  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                    <div className="sm:col-span-6">
                      <h2 className="text-xl font-medium text-blue-gray-900">Profile</h2>
                      <p className="mt-1 text-sm text-blue-gray-500">This information will be displayed publicly so be careful what you share.</p>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="first_name" className="block text-sm font-medium text-blue-gray-900">
                        First name
                      </label>
                      <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="last_name" className="block text-sm font-medium text-blue-gray-900">
                        Last name
                      </label>
                      <input type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="username" className="block text-sm font-medium text-blue-gray-900">
                        Username
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-gray-300 bg-blue-gray-50 text-blue-gray-500 sm:text-sm">
                          workcation.com/
                        </span>
                        <input type="text" name="username" id="username" autocomplete="username" value="lisamarie" className="flex-1 block w-full min-w-0 border-blue-gray-300 rounded-none rounded-r-md text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="photo" className="block text-sm font-medium text-blue-gray-900">
                        Photo
                      </label>
                      <div className="mt-1 flex items-center">
                        <img className="inline-block h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=256&amp;h=256&amp;q=80" alt="">
                        <div className="ml-4 flex">

                          <div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
                            <label htmlFor="user_photo" className="relative text-sm font-medium text-blue-gray-900 pointer-events-none">
                              <span>Change</span>
                              <span className="sr-only"> user photo</span>
                            </label>
                            <input id="user_photo" name="user_photo" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md">
                          </div>
                          <button type="button" className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="description" className="block text-sm font-medium text-blue-gray-900">
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea id="description" name="description" rows="4" className="block w-full border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                      </div>
                      <p className="mt-3 text-sm text-blue-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="url" className="block text-sm font-medium text-blue-gray-900">
                        URL
                      </label>
                      <input type="text" name="url" id="url" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
                    </div>
                  </div>

                  <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                    <div className="sm:col-span-6">
                      <h2 className="text-xl font-medium text-blue-gray-900">Personal Information</h2>
                      <p className="mt-1 text-sm text-blue-gray-500">This information will be displayed publicly so be careful what you share.</p>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="email_address" className="block text-sm font-medium text-blue-gray-900">
                        Email address
                      </label>
                      <input type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="phone_number" className="block text-sm font-medium text-blue-gray-900">
                        Phone number
                      </label>
                      <input type="text" name="phone_number" id="phone_number" autocomplete="tel" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-blue-gray-900">
                        Country
                      </label>
                      <input type="text" name="country" id="country" autocomplete="country" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="language" className="block text-sm font-medium text-blue-gray-900">
                        Language
                      </label>
                      <input type="text" name="language" id="language" className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <p className="text-sm text-blue-gray-500 sm:col-span-6">This account was created on <time dateTime="2017-01-05T20:35:40">January 5, 2017, 8:35:40 PM</time>.</p>
                  </div>

                  <div className="pt-8 flex justify-end">
                    <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Cancel
                    </button>
                    <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
