import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-white py-8">
    <div className="max-w-2xl mx-auto px-4">
      
  <div className="relative">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300"></div>
    </div>
    <div className="relative flex items-center justify-between">
      <span className="pr-3 bg-white text-lg font-medium text-gray-900">
        Projects
      </span>
      <button type="button" className="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <svg className="-ml-1.5 mr-1 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/plus-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
</svg>
        <span>Button text</span>
      </button>
    </div>
  </div>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
