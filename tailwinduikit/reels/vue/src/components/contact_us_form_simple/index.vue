<template>
    <div class="xl:mx-auto xl:container">
        <h1 class="text-4xl font-bold text-color-black lg:mb-36 mb-16 xl:px-0 px-4">Contact Us</h1>
    </div>
    <div class="relative">
        <div class="bg-peach h-full w-1/2 absolute md:block hidden"></div>
        <div class="xl:mx-auto xl:px-0 px-4 xl:container bg-peach py-16 relative">
            <div class="lg:pr-72">
                <p class="text-base lg:text-2xl font-light leading-10 text-color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, diam dui a a, massa id condimentum cursus. Consequat quis nulla netus lorem. Sagittis mauris fringilla adipiscing nunc risus est. Egestas urna turpis aliquam quam aenean a. Praesent elit mattis dignissim tempus nec aenean.</p>
                <p></p>
                <p class="lg:pt-16 pt-8 text-base lg:text-2xl font-light leading-10 text-color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, diam dui a a, massa id condimentum cursus. Consequat quis nulla netus lorem. Sagittis mauris fringilla adipiscing nunc risus est. Egestas urna turpis aliquam quam aenean a. Praesent elit mattis dignissim tempus nec aenean.</p>
                <p></p>
                <div class="lg:mt-20 mt-10">
                    <div class="flex items-center">
                        <p class="text-base lg:text-2xl font-bold leading-10 text-color-black w-24">Email:</p>
                        <p class="text-base lg:text-2xl font-light leading-10 text-color-black">photography@picshots.com</p>
                    </div>
                    <div class="flex items-center lg:pt-7">
                        <p class="text-base lg:text-2xl font-bold leading-10 text-color-black w-24">Phone:</p>
                        <p class="text-base lg:text-2xl font-light leading-10 text-color-black">+925875656512</p>
                    </div>
                </div>
                <div class="flex flex-col lg:mt-14 mt-8">
                    <label class="text-base font-bold text-color-black uppercase">FIRST AND LAST NAME*</label>
                    <input class="border-b border-color-black bg-transparent sm:w-3/5 outline-none text-base lg:mt-24 mt-8 pl-5 text-color-black mb-14 pb-2" type="text" />
                </div>
                <div class="flex flex-col lg:mt-14">
                    <label class="text-base font-bold text-color-black uppercase">Email*</label>
                    <input class="border-b border-color-black bg-transparent sm:w-3/5 outline-none text-base lg:mt-24 mt-8 pl-5 text-color-black mb-14 pb-2" type="email" />
                </div>
                <div class="flex flex-col lg:mt-14">
                    <label class="text-base font-bold text-color-black uppercase">Phone No*</label>
                    <input class="border-b border-color-black bg-transparent sm:w-3/5 outline-none text-base lg:mt-24 mt-8 pl-5 text-color-black mb-14 pb-2" type="number" />
                </div>
                <div class="flex flex-col lg:mt-14">
                    <label class="text-base font-bold text-color-black uppercase">Potential Dates</label>
                    <input class="border-b border-color-black appearance-none bg-transparent sm:w-3/5 outline-none text-base lg:mt-24 mt-8 pl-5 text-color-black mb-14 pb-2" type="date" />
                </div>
                <div class="flex flex-col lg:mt-14">
                    <label class="text-base font-bold text-color-black uppercase">LOCATIONS(S)</label>
                    <input class="border-b border-color-black bg-transparent sm:w-3/5 outline-none text-base lg:mt-24 mt-8 pl-5 text-color-black mb-14 pb-2" type="text" />
                </div>
                <div class="flex flex-col lg:mt-14">
                    <label class="text-base font-bold text-color-black uppercase">WHAT TYPE OF PHOTOGRAPHY ARE YOU LOOKING FOR?*</label>
                    <div class="relative flex items-center justify-center sm:w-3/5">
                        <select class="border rounded-full border-color-black py-4 bg-transparent outline-none text-base mt-10 px-5 text-color-black mb-14 appearance-none relative w-full text-color-black">
                            <option class="py-4">All</option>
                            <option class="py-4">Professional</option>
                        </select>
                        <div class="absolute right-0 -mt-3 mr-4 pointer-events-none">
                            <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>

                    <div class="flex flex-col lg:mt-14">
                        <label class="text-base font-bold text-color-black uppercase">Message</label>
                        <textarea class="border-b pt-24 border-color-black bg-transparent sm:w-3/5 outline-none text-base lg:h-64 h-24 resize-none pl-5 text-color-black mb-14"></textarea>
                    </div>
                    <div class="flex items-center md:justify-between justify-center">
                        <button class="text-base lg:text-2xl font-bold px-24 py-4 border-2 border-color-black rounded-full subscribe-btn lg:mb-36">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    ::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
</style>