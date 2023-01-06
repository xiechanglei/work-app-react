import styled from 'styled-px2vw'

export const FixedModelContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`