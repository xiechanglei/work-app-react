import styled from 'styled-px2vw'

import { activeColor } from '@/constans/theme'

export const LineInput = styled.input`
    border: none;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
    font-family: inherit;
    color: ${activeColor};
    border-bottom: 1px solid ${activeColor};

    &::placeholder {
        color: ${activeColor}77;
    }
`