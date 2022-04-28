import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 18rem;
    background: #e5f2e5;
    margin: 0 auto;

    color: var(--secondary-text);

    a {
        color: var(--primary-text);
        font-size: 3rem;
        text-transform: uppercase;
    }
`;

export const Img = styled.img`
    width: 35%;
    margin-bottom: 5rem;
`;
export const Icon2 = styled.div``;

export const Links = styled.ul`
    display: flex;
    gap: 2.4rem;
    list-style-type: none;
    var(--primary-text);
`;

export const StyledLink = styled.li``;
export const Link = styled.li`
var(--primary-text);
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
