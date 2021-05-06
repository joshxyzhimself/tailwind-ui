import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="h-screen flex bg-gray-100" style={{minHeight: "640px"}}>
    <div className="flex flex-col w-64">
      
  <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
    <div className="flex items-center flex-shrink-0 px-4">
      <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
    </div>
    <div className="mt-5 flex-grow flex flex-col">
      <nav className="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
        <div className="space-y-1">
          
            <a href="/" className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;bg-gray-100 text-gray-900&quot;, Default: &quot;text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
              <svg className="text-gray-500 mr-3 h-6 w-6" data-todo-x-state-on="Current" data-todo-x-state-off="Default" data-todo-x-state-description="Current: &quot;text-gray-500&quot;, Default: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>
              Dashboard
            </a>
          
            <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-100 text-gray-900&quot;, undefined: &quot;text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
              <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/users" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
</svg>
              Team
            </a>
          
            <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-100 text-gray-900&quot;, undefined: &quot;text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
              <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/folder" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
</svg>
              Projects
            </a>
          
            <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-100 text-gray-900&quot;, undefined: &quot;text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
              <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/calendar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
              Calendar
            </a>
          
            <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-100 text-gray-900&quot;, undefined: &quot;text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
              <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/inbox" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
</svg>
              Documents
            </a>
          
            <a href="/" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md" data-todo-x-state-description="undefined: &quot;bg-gray-100 text-gray-900&quot;, undefined: &quot;text-gray-600 hover:bg-gray-50 hover:text-gray-900&quot;">
              <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" data-todo-x-state-description="undefined: &quot;text-gray-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;" data-todo-x-description="Heroicon name: outline/chart-bar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
              Reports
            </a>
          
        </div>
        <div className="space-y-1">
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
            Projects
          </h3>
          <div className="space-y-1" role="group" aria-labelledby="projects-headline">
            
              <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span className="truncate">
                  Website redesign
                </span>
              </a>
            
              <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span className="truncate">
                  GraphQL API
                </span>
              </a>
            
              <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span className="truncate">
                  Customer migration guides
                </span>
              </a>
            
              <a href="/" className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span className="truncate">
                  Profit sharing program
                </span>
              </a>
            
          </div>
        </div>
      </nav>
    </div>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
