import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 20px 0;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 0 20px;
    margin: 0 auto;
`;
export const LogoImg = styled.img`
    max-width: 200px;

    @media screen and (max-width: 500px) {
        max-width: 150px;
    }
`;
export const TMDBLogo = styled.img`
    max-width: 100px;

    @media screen and (max-width: 500px) {
        max-width: 80px;
    }
`;
