import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    border: solid red 2px;
    max-width: 1366px;
    margin: 0 auto;
    background: var(--primary-color);
    color: var(--secondary-text);

    a {
        color: var(--secondary-text);
    }
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Center = styled.div`
    display: flex;
    padding: 20px;
    justify_content: center;
    align-items: center;
`;

export const Logo = styled.a`
    font-size: 20px;
    font-weight: 700;
`;

export const Links = styled.ul`
    display: flex;
    gap: 6.4rem;
    list-style-type: none;
`;

export const StyledLink = styled.li`
    display: flex;
    justify-content: end;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SocialMediaIcon = styled.h1`
    display: flex;
    gap: 10rem;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    border-radius: 50%;
    color: #ffff;
`;
