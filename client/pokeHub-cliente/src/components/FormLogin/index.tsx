import { Col, Row, Form, Input, Button, message } from "antd";
import { useAuth } from "../../services/useAuth";
import { useNavigate } from 'react-router';


import './formLogin.css'

const FormLogin: React.FC = () => {

    const auth = useAuth()
    const navigate = useNavigate()


    const onFinish = async (values: { email: string, password: string }) => {

        try {
            await auth.authenticate(values.email, values.password);

            navigate("/");
            message.success('Login Successful');
            console.log("Login bem-sucedido");
        } catch (error) {
            message.error("Email ou senha inválidos!");
            console.log("Email ou senha inválidos");
        }
    }


    return (
        <Row>
            <Col className="formLogin-container" span={24} >
                <h1>FormLogin</h1>
                <Form className="formLogin"
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Form.Item className="formLogin-email"
                        label="E-mail"
                        name="email"
                        rules={[{ required: true, message: 'Por favor, insira seu e-mail!' }]}
                    >
                        <Input className="formLogin-email_input"
                            placeholder="E-mail"
                            type="email"
                        />
                    </Form.Item>
                    <Form.Item className="formLogin-password"
                        label="Senha"
                        name="password"
                        rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
                    >
                        <Input.Password className="formLogin-password_input"
                            placeholder="Senha"
                            type="password"
                        />
                    </Form.Item>
                    <Form.Item className="formLogin-signIn"
                        wrapperCol={{ offset: 8, span: 24 }}
                    >
                        <Button type="primary" htmlType="submit" className="formLogin-signIn_button"
                            style={{
                                width: "100%",
                            }}
                        >
                            Entrar
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )

}

export default FormLogin;