export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.client) {
        console.log(to)
        console.log(from)

    }


})