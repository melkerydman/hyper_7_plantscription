import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 18rem;
    background: #e5f2e5;
    margin: 0 auto;

    color: var(--secondary-text);
`;

export const Img = styled.img``;
export const Icon = styled.div``;

export const Links = styled.ul`
    display: flex;
    gap: 2.4rem;
    list-style-type: none;
`;

export const StyledLink = styled.li`
    color: var(--primary-text);
    font-size: 3rem;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.2s;
    color: #020202;
    letter-spacing: 2px;
    &:hover {
        color: #e8590c;

        text-decoration: underline;
        text-underline-offset: 10px;
    }
`;

export const Left = styled.div`
    display: flex;
    flex: 1.6;
    gap: 10rem;
    align-items: center;
    justify-content: center;
`;

export const Middle = styled.div`
    display: flex;
    align-items: center;
    flex: 1.5;
`;
export const Right = styled.div`
    display: flex;
    flex: 1;
    gap: 2.4rem;
    align-items: center;
    justify-content: center;
`;
