<template>
    <nav class="2xl:px-0 xl:px-16 px-0">
        <div class="hidden lg:flex items-center justify-between pt-10">
            <a href="javascript:void(0)"><img src="https://cdn.tuk.dev/assets/templates/radian/Logo.png" /></a>
            <ul class="flex">
                <li 
                    v-bind:class="[{'text-indigo-700' :$route.path === '/'}, {'font-bold' :$route.path === '/'}]"
                    class="text-lg text-gray-800 tracking-wide hover:text-indigo-700">
                    <router-link to="/">Home</router-link>
                </li>
                <li 
                    v-bind:class="[{'text-indigo-700' :$route.path === '/AboutUs'}, {'font-bold' :$route.path === '/AboutUs'}]"
                    class="text-lg text-gray-800 tracking-wide ml-8 hover:text-indigo-700">
                    <router-link to="/AboutUs">About Us</router-link>
                </li>
                <li 
                    v-bind:class="[{'text-indigo-700' :$route.path === '/Projects'}, {'font-bold' :$route.path === '/Projects'}]"
                    class="text-lg text-gray-800 tracking-wide ml-8 hover:text-indigo-700">
                    <router-link to="/Projects">Projects</router-link>
                </li>
                <li 
                    v-bind:class="[{'text-indigo-700' :$route.path === '/Clients'}, {'font-bold' :$route.path === '/Clients'}]"
                    class="text-lg text-gray-800 tracking-wide ml-8 hover:text-indigo-700">
                    <router-link to="/Clients">Clients</router-link>
                </li>
                <li 
                    v-bind:class="[{'text-indigo-700' :$route.path === '/Team'}, {'font-bold' :$route.path === '/Team'}]"
                    class="text-lg text-gray-800 tracking-wide ml-8 hover:text-indigo-700">
                    <router-link to="/Team">Team</router-link>
                </li>
                <li 
                    v-bind:class="[{'text-indigo-700' :$route.path === '/Contacts'}, {'font-bold' :$route.path === '/Contacts'}]"
                    class="text-lg text-gray-800 tracking-wide ml-8 hover:text-indigo-700">
                    <router-link to="/Contacts">Contacts</router-link>
                </li>
            </ul>
            <div class="flex items-center">
                <svg class="text-gray-800 hover:text-indigo-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                    <path
                        d="M16.3641 17.2538L11.5907 22.3037C11.1689 22.7495 10.5969 23 10.0006 23C9.40422 23 8.83227 22.7495 8.41038 22.3037L3.63588 17.2538C2.37725 15.9222 1.52013 14.2256 1.1729 12.3787C0.825673 10.5317 1.00393 8.61734 1.68513 6.87757C2.36633 5.1378 3.51989 3.6508 4.99992 2.6046C6.47995 1.5584 8.21999 1 10 1C11.78 1 13.5201 1.5584 15.0001 2.6046C16.4801 3.6508 17.6337 5.1378 18.3149 6.87757C18.9961 8.61734 19.1743 10.5317 18.8271 12.3787C18.4799 14.2256 17.6227 15.9222 16.3641 17.2538Z"
                        fill="white"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path d="M10 14.0912C11.864 14.0912 13.375 12.4926 13.375 10.5207C13.375 8.54877 11.864 6.9502 10 6.9502C8.13607 6.9502 6.62503 8.54877 6.62503 10.5207C6.62503 12.4926 8.13607 14.0912 10 14.0912Z" fill="white" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg class="ml-6 text-gray-800 hover:text-indigo-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
                    <path d="M1 23.1113L2.80415 17.7288C1.24487 15.4354 0.680795 12.7194 1.2168 10.086C1.75281 7.45252 3.35242 5.08073 5.71823 3.41159C8.08403 1.74245 11.055 0.889551 14.0788 1.01148C17.1026 1.1334 19.9735 2.22185 22.1575 4.07445C24.3416 5.92705 25.6903 8.41772 25.9529 11.0834C26.2155 13.7491 25.374 16.4083 23.585 18.5667C21.796 20.7251 19.1812 22.2358 16.2268 22.8178C13.2723 23.3999 10.1792 23.0138 7.5227 21.7312L1 23.1113Z" fill="white" />
                    <path d="M1 23.1113L2.80415 17.7288C1.24487 15.4354 0.680795 12.7194 1.2168 10.086C1.75281 7.45252 3.35242 5.08073 5.71823 3.41159C8.08403 1.74245 11.055 0.889551 14.0788 1.01148C17.1026 1.1334 19.9735 2.22185 22.1575 4.07445C24.3416 5.92705 25.6903 8.41772 25.9529 11.0834C26.2155 13.7491 25.374 16.4083 23.585 18.5667C21.796 20.7251 19.1812 22.2358 16.2268 22.8178C13.2723 23.3999 10.1792 23.0138 7.5227 21.7312L1 23.1113" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.4904 12.0703V12.0848" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.93872 12.0703V12.0848" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.0416 12.0703V12.0848" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg class="ml-6 text-gray-800 hover:text-indigo-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.58824 1H8.76471L11.3529 7.47059L8.11765 9.41177C9.50359 12.222 11.778 14.4964 14.5882 15.8824L16.5294 12.6471L23 15.2353V20.4118C23 21.0982 22.7273 21.7565 22.2419 22.2419C21.7565 22.7273 21.0982 23 20.4118 23C15.3638 22.6932 10.6026 20.5496 7.02648 16.9735C3.45042 13.3974 1.30677 8.63625 1 3.58824C1 2.90179 1.27269 2.24346 1.75808 1.75808C2.24346 1.27269 2.90179 1 3.58824 1Z" fill="white" />
                    <path d="M3.58824 1H8.76471L11.3529 7.47059L8.11765 9.41176C9.50359 12.222 11.778 14.4964 14.5882 15.8824L16.5294 12.6471L23 15.2353V20.4118C23 21.0982 22.7273 21.7565 22.2419 22.2419C21.7565 22.7273 21.0982 23 20.4118 23C15.3638 22.6932 10.6026 20.5496 7.02648 16.9735C3.45042 13.3974 1.30677 8.63625 1 3.58824C1 2.90179 1.27269 2.24346 1.75808 1.75808C2.24346 1.27269 2.90179 1 3.58824 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    </nav>
    <nav class="lg:hidden relative z-40">
        <div class="flex pt-4 justify-between items-center">
            <div>
                <a href="javascript:void(0)"><img src="https://cdn.tuk.dev/assets/templates/radian/Logo.png" /></a>
            </div>
            <div class="visible flex items-center">
                <ul id="list" class="hidden p-2  bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                    <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <router-link to="/">
                            <span class="ml-2 font-bold">Home</span>
                        </router-link>
                    </li>
                    <li class="flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" @click="dropdownHandler(this)">
                        <router-link to="/AboutUs">
                            <span class="ml-2 font-bold">About Us</span>
                        </router-link>
                    </li>
                    <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <router-link to="/Projects">
                            <span class="ml-2 font-bold">Projects</span>
                        </router-link>
                    </li>
                    <li class="flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                        <router-link to="/Clients">
                            <span class="ml-2 font-bold">Clients</span>
                        </router-link>
                    </li>
                    <li class="flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                        <router-link to="/Team">
                            <span class="ml-2 font-bold">Team</span>
                        </router-link>
                    </li>
                    <li class="flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                        <router-link to="/Contacts">
                            <span class="ml-2 font-bold">Contacts</span>
                        </router-link>
                    </li>
                </ul>
                <div class="xl:hidden">
                    <svg id="open" @click="MenuHandler(true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="4" y1="8" x2="20" y2="8"></line>
                        <line x1="4" y1="16" x2="20" y2="16"></line>
                    </svg>
                    <div id="close" class="hidden close-m-menu" @click="MenuHandler(false)">
                        <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import MenuHandler from "@/mixins/index"
export default {
    name: "index",
    mixins: [MenuHandler]
}
</script>
