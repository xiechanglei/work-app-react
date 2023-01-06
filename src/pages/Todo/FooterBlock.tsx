import { FC } from 'react'
import { CalendarIcon, TodoIcon } from '@/svg-icons/SvgIcons'
import { SvgIcon, TodoFooter, SvgWraper } from './style'
//底部导航模块
export const FooterBlock: FC<{ action: string, actionClick: (a: string) => void }> = ({ action, actionClick }) => {
    return <TodoFooter>
        <SvgWraper
            className={action === 'todo' ? "active" : ""}
            onClick={() => actionClick('todo')}>
            <SvgIcon viewBox="0 0 1024 1024">
                <TodoIcon />
            </SvgIcon>
        </SvgWraper>
        <SvgWraper className={action === 'plan' ? "active" : ""} >
            <SvgIcon
                viewBox="0 0 1024 1024"
                onClick={() => actionClick('plan')}>
                <CalendarIcon />
            </SvgIcon>
        </SvgWraper>
    </TodoFooter>
}