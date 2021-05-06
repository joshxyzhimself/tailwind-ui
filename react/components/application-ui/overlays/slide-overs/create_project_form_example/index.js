import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="bg-gray-100 h-screen" style={{minHeight: "960px"}}>
    
  
    <section data-todo-x-data="{ open: true }" data-todo-at-keydown-window-escape="open = false" data-todo-x-init="$watch(&quot;open&quot;, o => !o &amp;&amp; window.setTimeout(() => (open = true), 1000))" data-todo-x-show="open" className="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" data-todo-x-ref="dialog" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        <div data-todo-x-description="Background overlay, show/hide based on slide-over state." className="absolute inset-0" data-todo-at-click="open = false" aria-hidden="true"></div>

        <div className="absolute inset-y-0 pl-16 max-w-full right-0 flex">
          
            <div data-todo-x-show="open" data-todo-x-transition-enter="transform transition ease-in-out duration-500 sm:duration-700" data-todo-x-transition-enter-start="translate-x-full" data-todo-x-transition-enter-end="translate-x-0" data-todo-x-transition-leave="transform transition ease-in-out duration-500 sm:duration-700" data-todo-x-transition-leave-start="translate-x-0" data-todo-x-transition-leave-end="translate-x-full" className="w-screen max-w-md" data-todo-x-description="Slide-over panel, show/hide based on slide-over state.">
              <form className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                <div className="flex-1 h-0 overflow-y-auto">
                  <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-medium text-white" id="slide-over-title">
                        New Project
                      </h2>
                      <div className="ml-3 h-7 flex items-center">
                        <button type="button" className="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" data-todo-at-click="open = false">
                          <span className="sr-only">Close panel</span>
                          <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-indigo-300">
                        Get started by filling in the information below to create your new project.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="px-4 divide-y divide-gray-200 sm:px-6">
                      <div className="space-y-6 pt-6 pb-5">
                        <div>
                          <label htmlFor="project_name" className="block text-sm font-medium text-gray-900">
                            Project name
                          </label>
                          <div className="mt-1">
                            <input type="text" name="project_name" id="project_name" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                          </div>
                        </div>
                        <div>
                          <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                            Description
                          </label>
                          <div className="mt-1">
                            <textarea id="description" name="description" rows="4" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            Team Members
                          </h3>
                          <div className="mt-2">
                            <div className="flex space-x-2">
                              
                                <a href="/" className="rounded-full hover:opacity-75">
                                  <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Tom Cook">
                                </a>
                              
                                <a href="/" className="rounded-full hover:opacity-75">
                                  <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Whitney Francis">
                                </a>
                              
                                <a href="/" className="rounded-full hover:opacity-75">
                                  <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Leonard Krasner">
                                </a>
                              
                                <a href="/" className="rounded-full hover:opacity-75">
                                  <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Floyd Miles">
                                </a>
                              
                                <a href="/" className="rounded-full hover:opacity-75">
                                  <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Emily Selman">
                                </a>
                              
                              <button type="button" className="flex-shrink-0 bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-200 text-gray-400 hover:text-gray-500 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">Add team member</span>
                                <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
</svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <fieldset>
                          <legend className="text-sm font-medium text-gray-900">
                            Privacy
                          </legend>
                          <div className="mt-2 space-y-5">
                            <div className="relative flex items-start">
                              <div className="absolute flex items-center h-5">
                                <input id="privacy_public" name="privacy" aria-describedby="privacy_public_description" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked="">
                              </div>
                              <div className="pl-7 text-sm">
                                <label htmlFor="privacy_public" className="font-medium text-gray-900">
                                  Public access
                                </label>
                                <p id="privacy_public_description" className="text-gray-500">
                                  Everyone with the link will see this project.
                                </p>
                              </div>
                            </div>
                            <div>
                              <div className="relative flex items-start">
                                <div className="absolute flex items-center h-5">
                                  <input id="privacy_private-to-project" name="privacy" aria-describedby="privacy_private-to-project_description" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                </div>
                                <div className="pl-7 text-sm">
                                  <label htmlFor="privacy_private-to-project" className="font-medium text-gray-900">
                                    Private to project members
                                  </label>
                                  <p id="privacy_private-to-project_description" className="text-gray-500">
                                    Only members of this project would be able to access.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="relative flex items-start">
                                <div className="absolute flex items-center h-5">
                                  <input id="privacy_private" name="privacy" aria-describedby="privacy_private-to-project_description" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                </div>
                                <div className="pl-7 text-sm">
                                  <label htmlFor="privacy_private" className="font-medium text-gray-900">
                                    Private to you
                                  </label>
                                  <p id="privacy_private_description" className="text-gray-500">
                                    You are the only one able to access this project.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="pt-4 pb-6">
                        <div className="flex text-sm">
                          <a href="/" className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900">
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900" data-todo-x-description="Heroicon name: solid/link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
</svg>
                            <span className="ml-2">
                              Copy link
                            </span>
                          </a>
                        </div>
                        <div className="mt-4 flex text-sm">
                          <a href="/" className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                            <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/question-mark-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
</svg>
                            <span className="ml-2">
                              Learn more about sharing
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                  <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-todo-at-click="open = false">
                    Cancel
                  </button>
                  <button type="submit" className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </form>
            </div>
          
        </div>
      </div>
    </section>
  

  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
