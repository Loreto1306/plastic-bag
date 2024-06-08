import './conta.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
export default function Cadastrar(){
    return(
        <>
        <Header/>
        

    <div className="container tw-self-center tw-my-44"  id="container">
        <div className="form-container sign-up">
            <form>
                <h1>Crie uma conta</h1> 
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>Ou use o seu email para se registrar</span>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Criar conta</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form>
                <h1>Entrar</h1>
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>ou use a sua senha</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#">esqueceu sua senha?</a>
                <button>Entrar</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Bem vindo de volta!</h1>
                    <p>Entre com o seu e-mail e sua senha</p>
                    <button className="hidden" id="login">Entrar</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Olá!</h1>
                    <p>Se registre para receber mais novidades</p>
                    <button className="hidden" id="register">Criar uma conta</button>
                </div>
            </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}