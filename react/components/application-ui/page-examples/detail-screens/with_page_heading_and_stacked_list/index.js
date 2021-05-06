import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div style={{minHeight: "64rem"}}>
    
  <div className="relative min-h-screen bg-white">
    {/* Navbar */}
    <nav data-todo-x-data="{ open: false }" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-16 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=violet&amp;shade=500" alt="Workflow">
            </div>

            {/* Links section */}
            <div className="hidden lg:block lg:ml-10">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-100", Default: "hover: text-gray-700" */}
                
                  <a href="/" className="bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-900">Dashboard</a>
                
                  <a href="/" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900">Jobs</a>
                
                  <a href="/" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900">Applicants</a>
                
                  <a href="/" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900">Company</a>
                
              </div>
            </div>
          </div>

          <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
            {/* Search section */}
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative text-gray-400 focus-within:text-gray-500">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
</svg>
                </div>
                <input id="search" className="block w-full bg-white py-2 pl-10 pr-3 border border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 focus:placeholder-gray-500 sm:text-sm" placeholder="Search" type="search" name="search">
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            {/* Mobile menu button */}
            <button type="button" className="bg-gray-50 p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500" aria-controls="mobile-menu" data-todo-at-click="open = !open" aria-expanded="false" data-todo-x-bind-aria-expanded="open.toString()">
              <span className="sr-only">Open main menu</span>
              <svg data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" className="block h-6 w-6" data-todo-colon-className="{ 'hidden': open, 'block': !(open) }" data-todo-x-description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
              <svg data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" className="hidden h-6 w-6" data-todo-colon-className="{ 'block': open, 'hidden': !(open) }" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
            </button>
          </div>

          {/* Actions section */}
          <div className="hidden lg:block lg:ml-4">
            <div className="flex items-center">
              <button className="bg-gray-50 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
              </button>

              {/* Profile dropdown */}
              <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-3 relative flex-shrink-0">
                <div>
                  <button type="button" className="bg-gray-50 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500" id="user-menu" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                    <span className="sr-only">Open user menu</span>
                    <img className="rounded-full h-8 w-8" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80" alt="">
                  </button>
                </div>
                
                  <div data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-show="open" data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    
                      <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Your profile
                        </a>
                    
                      <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Settings
                        </a>
                    
                      <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Logout
                        </a>
                    
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-todo-x-description="Mobile menu, show/hide based on menu state." className="bg-gray-50 border-b border-gray-200 lg:hidden" id="mobile-menu" data-todo-x-show="open">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Current: "bg-gray-100", Default: "hover:bg-gray-100" */}
          
            <a href="/" className="bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900">Dashboard</a>
          
            <a href="/" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900">Jobs</a>
          
            <a href="/" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900">Applicants</a>
          
            <a href="/" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900">Company</a>
          
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="px-5 flex items-center">
            <div className="flex-shrink-0">
              <img className="rounded-full h-10 w-10" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Whitney Francis</div>
              <div className="text-sm font-medium text-gray-500">whitneyfrancis@example.com</div>
            </div>
            <button className="ml-auto bg-gray-50 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
            </button>
          </div>
          <div className="mt-3 px-2 space-y-1">
            
              <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">Your Profile</a>
            
              <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">Settings</a>
            
              <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">Sign out</a>
            
          </div>
        </div>
      </div>
    </nav>

    {/* Page heading */}
    <header className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
        <div className="flex-1 min-w-0">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4" role="list">
              <li>
                <div>
                  <a href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">Jobs</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
                  <a href="/" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Engineering</a>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Back End Developer
          </h1>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-8">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/briefcase" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
</svg>
              Full-time
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/location-marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
</svg>
              Remote
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/currency-dollar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
</svg>
              $120k – $140k
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
</svg>
              Closing on January 9, 2020
            </div>
          </div>
        </div>
        <div className="mt-5 flex xl:mt-0 xl:ml-4">
          <span className="hidden sm:block">
            <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">
              <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/pencil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
</svg>
              Edit
            </button>
          </span>

          <span className="hidden sm:block ml-3">
            <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">
              <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
</svg>
              View
            </button>
          </span>

          <span className="sm:ml-3 relative z-0 inline-flex shadow-sm rounded-md divide-x divide-purple-600">
            <!--
  Custom select controls like this require a considerable amount of JS to implement from scratch. We're planning
  to build some low-level libraries to make this easier with popular frameworks like React, Vue, and even Alpine.js
  in the near future, but in the mean time we recommend these reference guides when building your implementation:

  https://www.w3.org/TR/wai-aria-practices/#Listbox
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
--><div data-todo-x-data="Components.listbox({ modelName: 'selected', open: false, selectedIndex: 0, activeIndex: 0, items: [{&quot;title&quot;:&quot;Published&quot;,&quot;description&quot;:&quot;This job posting can be viewed by anyone who has the link.&quot;,&quot;current&quot;:true},{&quot;title&quot;:&quot;Draft&quot;,&quot;description&quot;:&quot;This job posting will no longer be publicly accessible.&quot;,&quot;current&quot;:false}] })" data-todo-x-init="init()">
              <label id="listbox-label" className="sr-only" data-todo-at-click="$refs.button.focus()">
                Change published status
              </label>
              <div className="relative">
                <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-purple-600">
                  <div className="relative inline-flex items-center bg-purple-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                    <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
                    <p data-todo-x-text="selected.title" className="ml-2.5 text-sm font-medium">
                      Published
                    </p>
                  </div>
                  <button type="button" className="relative inline-flex items-center bg-purple-500 p-2 rounded-r-md text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500" data-todo-x-ref="button" data-todo-at-keydown-arrow-up-stop-prevent="onButtonClick()" data-todo-at-keydown-arrow-down-stop-prevent="onButtonClick()" data-todo-at-click="onButtonClick()" aria-haspopup="listbox" data-todo-colon-aria-expanded="open" aria-expanded="true" aria-labelledby="listbox-label">
                    <span className="sr-only">Change published status</span>
                    <svg className="h-5 w-5 text-white" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
                  </button>
                </div>

                
                  <ul data-todo-x-show="open" data-todo-x-transition-leave="transition ease-in duration-100" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" className="origin-top-right absolute left-0 mt-2 -mr-1 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none sm:left-auto sm:right-0" data-todo-x-max="1" data-todo-at-click-away="open = false" data-todo-x-description="Select popover, show/hide based on select state." data-todo-at-keydown-enter-stop-prevent="onOptionSelect()" data-todo-at-keydown-space-stop-prevent="onOptionSelect()" data-todo-at-keydown-escape="onEscape()" data-todo-at-keydown-arrow-up-prevent="onArrowUp()" data-todo-at-keydown-arrow-down-prevent="onArrowDown()" data-todo-x-ref="listbox" tabIndex={-1} role="listbox" aria-labelledby="listbox-label" data-todo-colon-aria-activedescendant="activeDescendant" aria-activedescendant="listbox-option-0">
                    
                      <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative p-4 text-sm" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-0" role="option" data-todo-at-click="choose(0)" data-todo-at-mouseenter="activeIndex = 0" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-purple-500': activeIndex === 0, 'text-gray-900': !(activeIndex === 0) }">
                        <div className="flex flex-col">
                          <div className="flex justify-between">
                            <p data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal" data-todo-colon-className="{ 'font-semibold': selectedIndex === 0, 'font-normal': !(selectedIndex === 0) }">
                              Published
                            </p>
                            <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-purple-500" data-todo-colon-className="{ 'text-white': activeIndex === 0, 'text-purple-500': !(activeIndex === 0) }" data-todo-x-show="selectedIndex === 0">
                              <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
                            </span>
                          </div>
                          <p data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-500 mt-2" data-todo-colon-className="{ 'text-purple-200': activeIndex === 0, 'text-gray-500': !(activeIndex === 0) }">
                            This job posting can be viewed by anyone who has the link.
                          </p>
                        </div>
                      </li>
                    
                      <li data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-900 cursor-default select-none relative p-4 text-sm" data-todo-x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation." id="listbox-option-1" role="option" data-todo-at-click="choose(1)" data-todo-at-mouseenter="activeIndex = 1" data-todo-at-mouseleave="activeIndex = null" data-todo-colon-className="{ 'text-white bg-purple-500': activeIndex === 1, 'text-gray-900': !(activeIndex === 1) }">
                        <div className="flex flex-col">
                          <div className="flex justify-between">
                            <p data-todo-x-state-on="Selected" data-todo-x-state-off="Not Selected" className="font-normal" data-todo-colon-className="{ 'font-semibold': selectedIndex === 1, 'font-normal': !(selectedIndex === 1) }">
                              Draft
                            </p>
                            <span data-todo-x-description="Checkmark, only display for selected option." data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-purple-500" data-todo-colon-className="{ 'text-white': activeIndex === 1, 'text-purple-500': !(activeIndex === 1) }" data-todo-x-show="selectedIndex === 1">
                              <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
                            </span>
                          </div>
                          <p data-todo-x-state-on="Highlighted" data-todo-x-state-off="Not Highlighted" className="text-gray-500 mt-2" data-todo-colon-className="{ 'text-purple-200': activeIndex === 1, 'text-gray-500': !(activeIndex === 1) }">
                            This job posting will no longer be publicly accessible.
                          </p>
                        </div>
                      </li>
                    
                  </ul>
                
              </div>
            </div>
          </span>

          {/* Dropdown */}
          <span data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-3 relative sm:hidden">
            <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" id="mobile-menu" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
              More
              <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
            </button>

            
              <div data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-show="open" data-todo-x-transition-enter="transition ease-out duration-200" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu">
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Edit</a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View</a>
              </div>
            
          </span>
        </div>
      </div>
    </header>

    <main className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h2 className="text-lg font-medium text-gray-900">Candidates</h2>

          {/* Tabs */}
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">Select a tab</label>
            <select id="tabs" name="tabs" className="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
              
                
                  <option>Applied</option>
                
                
                  <option>Phone Screening</option>
                
                
                  <option selected="">Interview</option>
                
                
                  <option>Offer</option>
                
                
                  <option>Disqualified</option>
                
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
                {/* Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" */}
                
                  <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Applied
                    
                      {/* Current: "bg-purple-100 text-purple-600", Default: "bg-gray-100 text-gray-900" */}
                      <span className="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">2</span>
                    </a>
                
                  <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Phone Screening
                    
                      {/* Current: "bg-purple-100 text-purple-600", Default: "bg-gray-100 text-gray-900" */}
                      <span className="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">4</span>
                    </a>
                
                  <a href="/" className="border-purple-500 text-purple-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Interview
                    
                      {/* Current: "bg-purple-100 text-purple-600", Default: "bg-gray-100 text-gray-900" */}
                      <span className="bg-purple-100 text-purple-600 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">6</span>
                    </a>
                
                  <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Offer
                    </a>
                
                  <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Disqualified
                    </a>
                
              </nav>
            </div>
          </div>
        </div>

        {/* Stacked list */}
        <ul className="mt-5 border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0" role="list">
          
            <li>
              <a href="/" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full group-hover:opacity-75" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-purple-600 truncate">Emily Selman</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
                          <span className="truncate">emilyselman@example.com</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on
                            {/* space */}
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-700" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
                  </div>
                </div>
              </a>
            </li>
          
            <li>
              <a href="/" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full group-hover:opacity-75" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-purple-600 truncate">Michael Foster</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
                          <span className="truncate">michaelfoster@example.com</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on
                            {/* space */}
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-700" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
                  </div>
                </div>
              </a>
            </li>
          
            <li>
              <a href="/" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full group-hover:opacity-75" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-purple-600 truncate">Emma Dorsey</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
                          <span className="truncate">emmadorsey@example.com</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on
                            {/* space */}
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-700" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
                  </div>
                </div>
              </a>
            </li>
          
            <li>
              <a href="/" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full group-hover:opacity-75" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-purple-600 truncate">Anna Roberts</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
                          <span className="truncate">annaroberts@example.com</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on
                            {/* space */}
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-700" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
                  </div>
                </div>
              </a>
            </li>
          
            <li>
              <a href="/" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full group-hover:opacity-75" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-purple-600 truncate">Leonard Krasner</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
                          <span className="truncate">leonardkrasner@example.com</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on
                            {/* space */}
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-700" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
                  </div>
                </div>
              </a>
            </li>
          
            <li>
              <a href="/" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full group-hover:opacity-75" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-purple-600 truncate">Floyd Miles</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
                          <span className="truncate">floydmiles@example.com</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on
                            {/* space */}
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-700" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
                  </div>
                </div>
              </a>
            </li>
          
            <li>
              <a href="/" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full group-hover:opacity-75" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-purple-600 truncate">Benjamin Russel</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
                          <span className="truncate">benjaminrussel@example.com</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on
                            {/* space */}
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-700" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
                  </div>
                </div>
              </a>
            </li>
          
            <li>
              <a href="/" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full group-hover:opacity-75" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-purple-600 truncate">Courtney Henry</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
                          <span className="truncate">courtneyhenry@example.com</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on
                            {/* space */}
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-700" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
                  </div>
                </div>
              </a>
            </li>
          
            <li>
              <a href="/" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full group-hover:opacity-75" src="https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-purple-600 truncate">Lawrence Hunter</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
                          <span className="truncate">lawrencehunter@example.com</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on
                            {/* space */}
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-700" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
                  </div>
                </div>
              </a>
            </li>
          
            <li>
              <a href="/" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full group-hover:opacity-75" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&amp;ixqx=cII20c177f&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-purple-600 truncate">Alicia Bell</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg>
                          <span className="truncate">aliciabell@example.com</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Applied on
                            {/* space */}
                            <time dateTime="2020-01-07">January 7, 2020</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" data-todo-x-description="Heroicon name: solid/check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
</svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-700" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
                  </div>
                </div>
              </a>
            </li>
          
        </ul>

        {/* Pagination */}
        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0" aria-label="Pagination">
          <div className="-mt-px w-0 flex-1 flex">
            <a href="/" className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200">
              <svg className="mr-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/arrow-narrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
</svg>
              Previous
            </a>
          </div>
          <div className="hidden md:-mt-px md:flex">
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
              1
            </a>
            {/* Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" */}
            <a href="/" className="border-purple-500 text-purple-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" aria-current="page">
              2
            </a>
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
              3
            </a>
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
              4
            </a>
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
              5
            </a>
            <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
              6
            </a>
          </div>
          <div className="-mt-px w-0 flex-1 flex justify-end">
            <a href="/" className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200">
              Next
              <svg className="ml-3 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/arrow-narrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
            </a>
          </div>
        </nav>
      </div>
    </main>
  </div>

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
