import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70vh;
`;
export const Wrapper = styled.div`
    width: 25%;
    padding: 2rem;
    background-color: grey;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Form = styled.form`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
`;

export const Input = styled.input`
    padding-left: 0.5rem;
`;

export const Button = styled.button`
    width: 60%;
    border: none;
    padding: 0.3rem 0.3rem;
    background-color: white;
    color: grey;
    cursor: pointer;
`;
