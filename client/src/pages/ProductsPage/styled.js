import styled from 'styled-components';

export const Container = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10rem;
    // justify-items: center
    margin: 0 10rem;
    padding-top: 10rem;
`;
export const Wrapper = styled.div`
    position: relative;

    overflow: hidden;

    border-radius: 25px;
`;

export const Image = styled.img`
    transition: all 0.3s;
    width: 100%;
    height: 55%;

    &:hover {
        transition: 1s all ease-in-out;

        transform: scale(1.1);
    }
`;
export const Details = styled.div`
    position: relative;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 20%;
    background-color: #7ee8fa;
    background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);
    color: #1e5c19;
`;

export const Icon2 = styled.div`
    position: absolute;
    bottom: 20%;
    right: 1rem;
    font-size: 3.4rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 1rem;
    &:hover {
        transition: 0.3s all ease-in-out;

        font-size: 3.9rem;
    }
`;
export const Price = styled.div`
    font-size: 1.8rem;
`;
export const Title = styled.div`
    font-size: 2.4rem;
`;

// export const Image = styled.img``;

// export const Icon = styled.div``;
