import './App.css'
import ShoppingCart from './components/PTIT_CNTT4_IT104_Session19_Bai01/ShoppingCart'
import RenderCounter from './components/PTIT_CNTT4_IT104_Session19_Bai03/RenderCounter'
import ValidateForm from './components/PTIT_CNTT4_IT104_Session19_Bai04/ValidateForm'
import RandomQuote from './components/PTIT_CNTT4_IT104_Session19_Bai05/RandomQuote'
import KeyTracker from './components/PTIT_CNTT4_IT104_Session19_Bai06/KeyTracker'
import ScrollIntoView from './components/PTIT_CNTT4_IT104_Session19_Bai07/ScrollToSection'
import LoginForm from './components/PTIT_CNTT4_IT104_Session19_Bai08/LoginForm'
import ChangeLanguage from './components/PTIT_CNTT4_IT104_Session19_Bai09/ChangeLanguage'
function App() {

  return (
    <>
      <ShoppingCart></ShoppingCart>
      <RenderCounter></RenderCounter>
      <ValidateForm></ValidateForm>
      <RandomQuote></RandomQuote>
      <KeyTracker></KeyTracker>
      <ScrollIntoView></ScrollIntoView>
      <LoginForm></LoginForm>
      <ChangeLanguage></ChangeLanguage>
    </>
  )
}

export default App
