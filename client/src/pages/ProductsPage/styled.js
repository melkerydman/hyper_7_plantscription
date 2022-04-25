import styled from 'styled-components';

export const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;   
    transition: all 0.5s ease;
    cursor: pointer;
`;

export const Main = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 10rem;
`;
export const Container = styled.div`
    flex: 1;
    margin: 4rem;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-item: center;
    justify-content: center;
    position: relative;
    &:hover ${Info} {
        opacity: 1;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
`;

export const Icon = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #f9ee;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    transition: all 0.5s ease;
    &:hover {
        background-color: #666;
        transform: scale(1);
    }
    
`;
