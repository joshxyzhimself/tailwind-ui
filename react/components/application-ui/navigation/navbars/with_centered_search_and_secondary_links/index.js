import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-gray-100" style={{minHeight: "192px"}}>
    
  <header data-todo-x-data="{ open: false }" className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
      <div className="relative h-16 flex justify-between">
        <div className="relative z-10 px-2 flex lg:px-0">
          <div className="flex-shrink-0 flex items-center">
            <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
          </div>
        </div>
        <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
</svg>
              </div>
              <input id="search" name="search" className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search">
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-center lg:hidden">
          {/* Mobile menu button */}
          <button data-todo-at-click="open = !open" className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" data-todo-x-bind-aria-expanded="open" aria-expanded="false">
            <span className="sr-only">Open menu</span>
            {/* Icon when menu is closed. */}
            <svg data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" data-todo-colon-className="{ 'hidden': open, 'block': !open }" className="block h-6 w-6" data-todo-x-description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
            {/* Icon when menu is open. */}
            <svg data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" data-todo-colon-className="{ 'hidden': !open, 'block': open }" className="hidden h-6 w-6" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
          </button>
        </div>
        <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <button className="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
          </button>

          {/* Profile dropdown */}
          <div data-todo-at-click-away="open = false" className="flex-shrink-0 relative ml-4" data-todo-x-data="{ open: false }">
            <div>
              <button data-todo-at-click="open = !open" className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
              </button>
            </div>
            <div data-todo-x-show="open" data-todo-x-description="Profile dropdown panel, show/hide based on dropdown state." data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              
                <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
              
                <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              
                <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
              
            </div>
          </div>
        </div>
      </div>
      <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
        
          
            {/* Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" */}
            <a href="/" className="bg-gray-100 text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">
              Dashboard
            </a>
          
          
            <a href="/" className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">
              Team
            </a>
          
          
            <a href="/" className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">
              Projects
            </a>
          
          
            <a href="/" className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">
              Calendar
            </a>
          
      </nav>
    </div>

    <nav data-todo-x-description="Mobile menu, toggle classes based on menu state." data-todo-x-state-on="Menu open" data-todo-x-state-off="Menu closed" data-todo-colon-className="{ 'block': open, 'hidden': !open }" className="hidden lg:hidden" aria-label="Global">
      <div className="pt-2 pb-3 px-2 space-y-1">
        
          
            {/* Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" */}
            <a href="/" className="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium">Dashboard</a>
          
          
            <a href="/" className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium">Team</a>
          
          
            <a href="/" className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium">Projects</a>
          
          
            <a href="/" className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium">Calendar</a>
          
      </div>
      <div className="border-t border-gray-200 pt-4 pb-3">
        <div className="px-4 flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">Tom Cook</div>
            <div className="text-sm font-medium text-gray-500">tom@example.com</div>
          </div>
          <button className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
          </button>
        </div>
        <div className="mt-3 px-2 space-y-1">
          
            <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Your Profile</a>
          
            <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Settings</a>
          
            <a href="/" className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Sign out</a>
          
        </div>
      </div>
    </nav>
  </header>

  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
