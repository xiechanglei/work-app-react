import { FC } from 'react'
import { CalendarIcon, TodoIcon, SvgIcon } from '@/svg-icons/SvgIcons'
import { TodoFooter, SvgWraper } from './style'
//底部导航模块
export const FooterBlock: FC<{ action: string, actionClick: (a: string) => void }> = ({ action, actionClick }) => {
    return <TodoFooter>
        <SvgWraper
            className={action === 'todo' ? "active" : ""}
            onClick={() => actionClick('todo')}>
            <SvgIcon>
                <TodoIcon />
            </SvgIcon>
        </SvgWraper>
        <SvgWraper className={action === 'plan' ? "active" : ""} >
            <SvgIcon
                onClick={() => actionClick('plan')}>
                <CalendarIcon />
            </SvgIcon>
        </SvgWraper>
    </TodoFooter>
}