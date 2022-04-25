import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    width: 100vw;
    height: 50px;
    background: var(--primary-color);
    max-width: 1366px;
    margin: 0 auto;
    gap: 2.4rem;
    padding: 1.2rem 2.4rem;

    color: var(--secondary-text);

    a {
        color: var(--secondary-text);
    }
`;

export const Logo = styled.a``;

export const Links = styled.ul`
    display: flex;
    gap: 2.4rem;
    list-style-type: none;
`;

export const StyledLink = styled.li``;

export const Left = styled.div`
    display: flex;
    gap: 2.4rem;
    align-items: center;
`;

export const Middle = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;
export const Right = styled.div`
    display: flex;
    align-items: center;
`;
