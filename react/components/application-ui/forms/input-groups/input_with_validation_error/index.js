import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="p-8 flex items-center justify-center bg-white">
    <div className="w-full max-w-xs mx-auto">
      
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
    <div className="mt-1 relative rounded-md shadow-sm">
      <input type="text" name="email" id="email" className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" placeholder="you@example.com" value="adamwathan" aria-invalid="true" aria-describedby="email-error">
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-red-500" data-todo-x-description="Heroicon name: solid/exclamation-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
</svg>
      </div>
    </div>
    <p className="mt-2 text-sm text-red-600" id="email-error">Your password must be less than 4 characters.</p>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
