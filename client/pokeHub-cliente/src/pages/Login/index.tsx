import FormLogin from "../../components/FormLogin"
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