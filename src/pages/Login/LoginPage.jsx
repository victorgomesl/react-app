import "./styles.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/loginform";
import Discord from "../../components/Discord/Discord";

function LoginPage() {
   return (
      <div>
        <Header />
        <LoginForm />
        <Discord />
        <Footer />
       </div>
  )
}

export default LoginPage
