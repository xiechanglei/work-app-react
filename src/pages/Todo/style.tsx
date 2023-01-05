import styled from 'styled-px2vw'

export const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
export const SvgWraper = styled.div`
    position: relative;
    &.active::after {
        content: ".";
        font-size: 2rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -1rem;
    }
`
export const SvgIcon = styled.svg`
    width: 70px;
    height: 70px;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
`

export const TodoFooter = styled.div`
    display: flex;
    flex-shrink: 0;
    height: 150px;
    justify-content: space-around;
    align-items: center;
`

export const TodoContent = styled.div`
    flex: 1;
`