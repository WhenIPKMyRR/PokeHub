import FormLogin from "../../components/form-login/formLogin"
import { ContainerGlobal } from "../../styles/globalStyle"
import './login.css'


const Login = () =>{
    return(
        <main className="loginPage">
            <div className="loginPage-container">
                <ContainerGlobal>
                    <FormLogin/>
                </ContainerGlobal>
            </div>
        </main>
    )
}

export default Login;