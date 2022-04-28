import styled from 'styled-components';

export const Main = styled.main`
    height: 70vh;
    display: flex;
    flex-direction: row;
`;
export const Wrapper = styled.main`
    position: relative;

    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Header = styled.h2`
    position: absolute;

    font-size: 6.4rem;
    font-weight: bold;
    color: green;
    left: 20%;
    top: 10%;
`;
export const Img = styled.img`
    max-width: 60rem;
`;
export const Info = styled.main`
    display: flex;
    flex-direction: column;

    width: 40%;
    gap: 3rem;
`;
export const H4 = styled.h4`
    display: flex;
    color: green;
    height: 30%;
    font-size: 3.4rem;
    align-items: flex-end;
    line-height: 1.1;

    
    }
`;
export const P = styled.p`
    height: 0%;
    font-size: 2.4rem;
    line-height: 1.5;
`;
