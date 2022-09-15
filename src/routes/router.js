import {
	createRouter,
	createWebHistory
}
from 'vue-router'

// 1. Define route components.
// These can be imported from other files

import ContactList from "../components/ContactList.vue"
import Contact from "../components/Contact.vue"
import Hobbies from "../components/Hobbies.vue"
import NotFound from "../components/NotFound.vue"


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [{
		path: '/',
		component: ContactList
	},
	{
		path: '/contactlist',
		component: ContactList,
		name: "list",
	},
	{
		path: '/contact/:id',
		component: Contact,
		name: "contact",
		children: [{
			path: '',
			name: "hobbies",
			component: Hobbies
		}]
	},
	{
		path: '/notfound',
		component: NotFound
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: "/notfound"
	},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory(),
	routes, // short for `routes: routes`
})

export default router