import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
`;

export const Row = styled.div`
    display: flex;
    gap: 4rem;
`;

export const Column = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0rem;
`;

export const ResultsHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
`;

export const ResultsHeaderLabel = styled.p`
    flex: none;
    font-size: 1.5rem;
`;