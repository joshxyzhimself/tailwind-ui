import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="px-4 sm:px-6 lg:px-8 py-6 bg-gray-100">
    <div className="max-w-7xl mx-auto">
      
  <div>
    <div className="sm:hidden">
      <label htmlFor="tabs" className="sr-only">Select a tab</label>
      <select id="tabs" name="tabs" className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
        <option>My Account</option>
        <option>Company</option>
        <option selected="">Team Members</option>
        <option>Billing</option>
      </select>
    </div>
    <div className="hidden sm:block">
      <nav className="flex space-x-4" aria-label="Tabs">
        <a href="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md">
          My Account
        </a>
        <a href="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md">
          Company
        </a>
        {/* Current: "bg-gray-200 text-gray-800", Default: "text-gray-600 hover:text-gray-800" */}
        <a href="/" className="bg-gray-200 text-gray-800 px-3 py-2 font-medium text-sm rounded-md" aria-current="page">
          Team Members
        </a>
        <a href="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md">
          Billing
        </a>
      </nav>
    </div>
  </div>

    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));