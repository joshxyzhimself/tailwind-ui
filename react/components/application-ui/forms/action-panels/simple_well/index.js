import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="bg-white">
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
  <div className="bg-gray-50 sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Need more bandwidth?
      </h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.
        </p>
      </div>
      <div className="mt-5">
        <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Contact sales
        </button>
      </div>
    </div>
  </div>

      </div>
    </div>
  </div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));