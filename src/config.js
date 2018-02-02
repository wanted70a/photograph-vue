
export const root = 'http://192.168.0.154:8000'
export const apiDomain = root + '/api'
export const apiLogin = apiDomain + '/auth/login'
export const apiAllPosts = apiDomain + '/home'
export const registerUrl = apiDomain + '/auth/signup'
export const forgotPassword = apiDomain + '/auth/recovery'
export const resetPassword = apiDomain + '/auth/reset'

export const imagesPath = root + '/storage/'
export const defaultProfileImage = 'https://dummyimage.com/360x360/000/fff.png'

export const getHeader = function(){
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))

    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + tokenData.access_token
    }
    return headers
}
