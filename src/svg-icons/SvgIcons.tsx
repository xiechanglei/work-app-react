import { FC } from 'react'
import styled from 'styled-px2vw'

export const SvgIconWraper = styled.svg`
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
`

export const SvgIcon: FC<any> = (props) => {
    return <SvgIconWraper className='svg-icon' viewBox="0 0 1024 1024" {...props}></SvgIconWraper>
}

export const CalendarIcon = () => <path d="M874.666667 938.666667h-725.333334c-34.133333 0-64-29.866667-64-64v-469.333334c0-12.8 8.533333-21.333333 21.333334-21.333333h810.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v469.333334c0 34.133333-29.866667 64-64 64zM128 426.666667v448c0 12.8 8.533333 21.333333 21.333333 21.333333h725.333334c12.8 0 21.333333-8.533333 21.333333-21.333333V426.666667H128zM917.333333 426.666667h-810.666666c-12.8 0-21.333333-8.533333-21.333334-21.333334V213.333333c0-34.133333 29.866667-64 64-64h725.333334c34.133333 0 64 29.866667 64 64v192c0 12.8-8.533333 21.333333-21.333334 21.333334zM128 384h768V213.333333c0-12.8-8.533333-21.333333-21.333333-21.333333h-725.333334c-12.8 0-21.333333 8.533333-21.333333 21.333333v170.666667zM469.333333 810.666667c-4.266667 0-12.8 0-17.066666-4.266667l-128-128 29.866666-29.866667 110.933334 110.933334 238.933333-238.933334 29.866667 29.866667-256 256c4.266667 4.266667-4.266667 4.266667-8.533334 4.266667zM320 106.666667h42.666667v170.666666h-42.666667zM661.333333 106.666667h42.666667v170.666666h-42.666667z"></path>
export const TodoIcon = () => {
    return <> <path d="M227.555328 113.777664h568.889344c31.418368 0 56.88832 25.469952 56.88832 56.889344v256c0 15.70816-12.734464 28.443648-28.443648 28.443648-15.710208 0-28.444672-12.734464-28.444672-28.443648v-256H227.555328v682.665984h199.11168c15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344z"></path>
        <path d="M739.555328 910.222336c94.257152 0 170.667008-76.41088 170.667008-170.667008s-76.41088-170.665984-170.667008-170.665984-170.665984 76.409856-170.665984 170.665984c0 94.257152 76.409856 170.667008 170.665984 170.667008z m0 56.88832C613.879808 967.110656 512 865.230848 512 739.555328S613.879808 512 739.555328 512s227.555328 101.879808 227.555328 227.555328-101.879808 227.555328-227.555328 227.555328z"></path>
        <path d="M711.110656 655.859712c0-15.709184 12.735488-28.444672 28.444672-28.444672S768 640.150528 768 655.859712v72.8832l55.126016 55.126016c11.108352 11.108352 11.108352 29.118464 0 40.226816-11.108352 11.108352-29.118464 11.108352-40.226816 0l-55.126016-55.126016a56.889344 56.889344 0 0 1-16.662528-40.226816v-72.8832z"></path>
        <path d="M312.889344 284.444672h341.332992c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H312.889344c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672zM312.889344 398.222336h227.555328c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H312.889344c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672zM312.889344 512h113.77664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.443648 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672S297.179136 512 312.889344 512z"></path></>
}

export const PlusIcon = () => <path d="M800 480l-256 0L544 224c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 256L224 480c-17.664 0-32 14.336-32 32s14.336 32 32 32l256 0 0 256c0 17.696 14.336 32 32 32s32-14.304 32-32l0-256 256 0c17.696 0 32-14.336 32-32S817.696 480 800 480z"></path>

export const DoneIcon = () => {
    return <>
        <path
            d="M499.2 951.466667c-234.666667 0-426.666667-192-426.666667-426.666667 0-17.066667 0-38.4 4.266667-55.466667 4.266667-12.8 12.8-17.066667 25.6-17.066666 12.8 4.266667 17.066667 12.8 17.066667 25.6-4.266667 12.8-4.266667 29.866667-4.266667 46.933333 0 213.333333 170.666667 384 384 384s384-170.666667 384-384-170.666667-384-384-384c-25.6 0-46.933333 4.266667-72.533333 8.533333-12.8 0-21.333333-4.266667-25.6-17.066666 0-12.8 4.266667-21.333333 17.066666-25.6 25.6-4.266667 51.2-8.533333 81.066667-8.533334 234.666667 0 426.666667 192 426.666667 426.666667s-192 426.666667-426.666667 426.666667z"
            p-id="9655"></path>
        <path
            d="M119.466667 418.133333h-8.533334c-8.533333-4.266667-17.066667-17.066667-12.8-29.866666 42.666667-119.466667 128-213.333333 238.933334-256 12.8-4.266667 21.333333 0 25.6 12.8 4.266667 12.8 0 21.333333-12.8 25.6C256 213.333333 174.933333 298.666667 140.8 405.333333c-4.266667 8.533333-12.8 12.8-21.333333 12.8z"
            p-id="9656"></path>
        <path
            d="M477.866667 657.066667c-4.266667 0-12.8 0-17.066667-4.266667-8.533333-8.533333-8.533333-21.333333 0-29.866667l213.333333-213.333333c8.533333-8.533333 21.333333-8.533333 29.866667 0s8.533333 21.333333 0 29.866667l-213.333333 213.333333c0 4.266667-8.533333 4.266667-12.8 4.266667z"
            p-id="9657"></path>
        <path
            d="M477.866667 657.066667c-4.266667 0-12.8 0-17.066667-4.266667l-93.866667-93.866667c-8.533333-8.533333-8.533333-21.333333 0-29.866666s21.333333-8.533333 29.866667 0l93.866667 93.866666c8.533333 8.533333 8.533333 21.333333 0 29.866667 0 4.266667-8.533333 4.266667-12.8 4.266667z"
            p-id="9658"></path>
    </>
}

export const NeedDoneIcon = () => {
    return <>
        <path
            d="M499.2 951.466667c-234.666667 0-426.666667-192-426.666667-426.666667 0-17.066667 0-38.4 4.266667-55.466667 4.266667-12.8 12.8-17.066667 25.6-17.066666 12.8 4.266667 17.066667 12.8 17.066667 25.6-4.266667 12.8-4.266667 29.866667-4.266667 46.933333 0 213.333333 170.666667 384 384 384s384-170.666667 384-384-170.666667-384-384-384c-25.6 0-46.933333 4.266667-72.533333 8.533333-12.8 0-21.333333-4.266667-25.6-17.066666 0-12.8 4.266667-21.333333 17.066666-25.6 25.6-4.266667 51.2-8.533333 81.066667-8.533334 234.666667 0 426.666667 192 426.666667 426.666667s-192 426.666667-426.666667 426.666667z"
            p-id="9655"></path>
        <path
            d="M119.466667 418.133333h-8.533334c-8.533333-4.266667-17.066667-17.066667-12.8-29.866666 42.666667-119.466667 128-213.333333 238.933334-256 12.8-4.266667 21.333333 0 25.6 12.8 4.266667 12.8 0 21.333333-12.8 25.6C256 213.333333 174.933333 298.666667 140.8 405.333333c-4.266667 8.533333-12.8 12.8-21.333333 12.8z"
            p-id="9656"></path>
    </>
}