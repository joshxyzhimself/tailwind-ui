import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="p-8 bg-white flex items-center justify-center">
    
  <span className="relative z-0 inline-flex shadow-sm rounded-md">
    <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
      <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/bookmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
</svg>
      Bookmark
    </button>
    <button type="button" className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
      12k
    </button>
  </span>

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
