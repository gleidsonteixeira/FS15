import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 250px;
    height: 100vh;
    background-color: blueviolet;
`;

export const HeaderLogo = styled.div`
    width: 100%;
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 32px;
`;

export const HeaderNav = styled.nav`
    margin-top: 26px;
    padding: 0 16px;
    & li a{
       display: flex;
       align-items: center;
       gap: 16px;
       line-height: 46px;
       color: white;
       border-radius: 5px;
       padding: 0 16px;
       transition-duration: 300ms;
    }
    & li a:hover{
        background-color: #00000015;
    }
    & li a box-icon{
        height: 46px;
    }
    & li a.active{
        background-color: white;
        color: blueviolet;
        font-weight: bold;
    }
`;