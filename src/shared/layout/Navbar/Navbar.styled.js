import styled from 'styled-components';

export const NavWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

export const Link = styled.a`
    display: block;
    text-align: center;
    padding: 0.5rem 1rem;
    background: #444;
    color: #fff;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    transition: all ease .2s;
    font-size: 0.8rem;
    border-radius: .25rem;

    &:hover {
        transform: scale(1.1);
    }
`