
export const apiDomain = 'http://photogramapi.dev/api/auth/login'
export const loginUrl = apiDomain + 'token'
export const userUrl = apiDomain
export const registerUrl = 'http://photogramapi.dev/api/auth/signup'
export const forgotPassword = 'http://photogramapi.dev/api/auth/recovery'
export const resetPassword = 'http://photogramapi.dev/api/auth/reset'

export const getHeader = function(){
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))

    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer' + tokenData.access_token
    }
    return headers
}
