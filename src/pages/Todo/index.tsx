import { useState } from 'react'
import { CalendarIcon, TodoIcon } from '@/svg-icons/SvgIcons'
import { TodoWrapper, SvgIcon, TodoFooter, TodoContent, SvgWraper } from './style'

export const Todo = () => {
    const [action, setAction] = useState('todo')

    const active = (type: string) => () => setAction(type)

    return <TodoWrapper>
        <TodoContent>
            
        </TodoContent>
        <TodoFooter>
            <SvgWraper className={action === 'todo' ? "active" : ""} onClick={active('todo')}>
                <SvgIcon viewBox="0 0 1024 1024">
                    <TodoIcon />
                </SvgIcon>
            </SvgWraper>
            <SvgWraper className={action === 'plan' ? "active" : ""} >
                <SvgIcon viewBox="0 0 1024 1024" onClick={active("plan")}>
                    <CalendarIcon />
                </SvgIcon>
            </SvgWraper>
        </TodoFooter>
    </TodoWrapper >
}   