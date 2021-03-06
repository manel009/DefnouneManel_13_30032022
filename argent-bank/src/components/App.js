import HeaderNav from "./header-nav/HeaderNav";
import {Routes, Route} from 'react-router-dom';
import Home from "./home/Home";
import Error404 from "./error404/Error404";
import Footer from "./footer/Footer";
import SignIn from "./sign-in/SignIn";
import MyAccount from "./my-account/MyAccount";

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signIn" element={<SignIn />}/>
        <Route path="/myaccount" element={<MyAccount />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
