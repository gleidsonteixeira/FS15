import styled from "styled-components";
import { Input, Label } from "../../components/FormComponents";
import Button from "../../components/Button";
import { useContext } from "react";
import { LoginContext } from "../../App";

const Login = () => {

    const { setLogado } = useContext(LoginContext);

    return(
        <Container>
            <Box>
                <form>
                    <h3>Bem-vindo</h3>
                    <Label>Email</Label>
                    <Input 
                        type="email" 
                        placeholder="email@email.com"
                        required />
                    <Label>Senha</Label>
                    <Input
                        type="password"
                        placeholder="*******"
                        required />
                    <Button 
                        title={'Entrar'} 
                        classes='w100'
                        click={() => {
                            setLogado(true);
                            localStorage.setItem('logado', 'true');
                        }} />
                </form>
            </Box>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: blueviolet;
`;

const Box = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    & h3{
        font-size: 28px;
        margin-bottom: 26px;
    }
`;


export default Login;