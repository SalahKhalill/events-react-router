// import { redirect } from 'react-router-dom'
// export function getTokenDuration() {
//     const storedExpirationDate = localStorage.getItem('expiration')
//     const expirationDate = new Date(storedExpirationDate)
//     const now = new Date()
//     const duration = expirationDate.getTime() - now.getTime()
//     return duration
// }
// export function getAuthToken() {
//     const token = localStorage.getItem('token')
//     const tokenDuration = getTokenDuration()
//     if (!token) {
//         return null
//     }
//     if (tokenDuration < 0) {
//         return 'EXPIRED'
//     }
//     return token
// }
// export function tokenLoader() {
//     return getAuthToken()
// }
// export function checkAuthLoader() {
//     const token = getAuthToken()
//     if (!token) {
//         return redirect('/auth')
//     }
//     return null
//     // we added (return null ) :we add it  in all if statement branches where nothing would be returned otherwise to avoid errors.
//     // so to avoid error we added it
// }

import { redirect } from 'react-router-dom'

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration')
    const expirationDate = new Date(storedExpirationDate)
    const now = new Date()
    const duration = expirationDate.getTime() - now.getTime()
    return duration
}

export function getAuthToken() {
    const token = localStorage.getItem('token')

    if (!token) {
        return null
    }

    const tokenDuration = getTokenDuration()

    if (tokenDuration < 0) {
        return 'EXPIRED'
    }

    return token
}

export function tokenLoader() {
    const token = getAuthToken()
    return token
}

export function checkAuthLoader() {
    const token = getAuthToken()

    if (!token) {
        return redirect('/auth')
    }
}
