import App from './App'
import ResetPassword from './pages/forgotPassword/ResetPassword.vue'
import ForgotPassword from './pages/forgotPassword/ForgotPassword.vue'
import DashboardPage from './pages/DashboardPage'
import TermsOfUse from './pages/TermsOfUse.vue'
import EditProfile from './pages/profile/EditProfile.vue'

export default [
    {path: '/', component: App, name:'home'},
    {path: '/forgot', component: ForgotPassword, name:'forgotPassword'},
    {path: '/reset', component: ResetPassword, name:'resetPassword'},
    {path: '/terms-of-use', component: TermsOfUse, name:'termsOfUse'},
    {path: '/edit-profile', component: EditProfile, name:'editProfile'},
    {path: '/dashboard', component: DashboardPage, name:'dashboard', meta: { requiresAuth: true}}
]
