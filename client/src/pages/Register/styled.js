import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 70vh;

    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url('https://images.unsplash.com/photo-1575939238474-c8ada13b2724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');

    background-size: cover;
`;
export const Wrapper = styled.div`
    width: 50%;
    padding: 2rem;
    background-color: rgba(128, 128, 128, 0.5);
    border-radius: 15px;
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
export const Aggreement = styled.span`
    font-size: 10px;
    margin: 20px 0px;
`;
export const Button = styled.button``;
