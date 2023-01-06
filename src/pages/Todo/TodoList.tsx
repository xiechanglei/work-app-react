
import { FC, useState } from 'react'
import { NeedDoneIcon, DoneIcon } from '@/svg-icons/SvgIcons'
import { SvgIcon, TodoListWraper, TodoItemWraper } from './style'
import { getTodayTodoList, saveTodoDid, TodoItemInfo } from './data'


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

export const TodoList = () => {
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