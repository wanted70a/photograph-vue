
export const apiDomain = 'http://photogram.dev/api/auth/login'
export const loginUrl = apiDomain + 'token'
export const userUrl = apiDomain
export const registerUrl = 'http://photogram.dev/api/auth/signup'
export const forgotPassword = 'http://photogram.dev/api/auth/recovery'
export const resetPassword = 'http://photogram.dev/api/auth/reset'

export const getHeader = function(){
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))

    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer' + tokenData.access_token
    }
    return headers
}
