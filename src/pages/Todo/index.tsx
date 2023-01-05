import { FC, useEffect, useState } from 'react'
import { CalendarIcon, TodoIcon, PlusIcon, NeedDoneIcon, DoneIcon } from '@/svg-icons/SvgIcons'
import { TodoWrapper, SvgIcon, TodoFooter, TodoContent, SvgWraper, CurrentTime, TodoListWraper, TodoItemWraper } from './style'
import { getMonthName } from '@/libs/time'
import { getTodayTodoList, saveTodoDid, TodoItemInfo } from './data'

//时间模块
const CurrentTimeBlock = () => {
    const initTime = () => {
        const date = new Date()
        const month = getMonthName(date)
        const day = date.getDate()
        return { month, day }
    }
    const [time, setTime] = useState(initTime())

    useEffect(() => {
        const timer = setInterval(() => setTime(initTime()), 1000)
        return () => clearInterval(timer)
    }, [])


    return <CurrentTime>
        <span className="date">{time.day}</span>
        <span className="month">/{time.month}</span>
        <div className="add-btn">
            <SvgIcon viewBox="0 0 1024 1024">
                <PlusIcon />
            </SvgIcon>
        </div>
    </CurrentTime>
}

const TodoItem: FC<{ item: TodoItemInfo, toggleDOne: (id: string) => void }> = ({ item, toggleDOne }) => {
    return <TodoItemWraper className={item.isDone ? "done" : ""} onClick={() => toggleDOne(item.id)}>
        <div className="todo-info">
            <div className="todo-title">{item.title}</div>
            <div className="todo-time">{item.time}</div>
        </div>
        <div className="todo-process">
            <SvgIcon viewBox="0 0 1024 1024">
                {item.isDone ? <DoneIcon /> : <NeedDoneIcon />}
            </SvgIcon >
        </div >
    </TodoItemWraper>
}

const TodoList = () => {
    const [list, setList] = useState(getTodayTodoList())

    const toggleDone = (id: string) => {
        const newList = list.map((item) => {
            if (item.id === id) {
                return { ...item, isDone: !item.isDone }
            }
            return item
        })
        setList(newList)
        saveTodoDid(newList.filter(item => item.isDone).map(item => item.id))
    }
    return <TodoListWraper>
        {
            list.map((item) => {
                return <TodoItem key={item.id} item={item} toggleDOne={toggleDone} />
            })
        }
    </TodoListWraper>
}

//底部导航模块
const FooterBlock: FC<{ action: string, actionClick: (a: string) => void }> = ({ action, actionClick }) => {
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

//页面组件
export const Todo = () => {
    const [action, setAction] = useState('todo')
    return <TodoWrapper>
        <TodoContent>
            <CurrentTimeBlock />
            <TodoList />
        </TodoContent>
        <FooterBlock action={action} actionClick={ac => setAction(ac)} />
    </TodoWrapper >
}   