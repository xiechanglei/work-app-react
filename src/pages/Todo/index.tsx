import { useState } from 'react'
import { TodoWrapper, TodoContent } from './style'
import { CurrentTimeBlock } from './CurrentTimeBlock'
import { TodoList } from './TodoList'
import { FooterBlock } from './FooterBlock'
import { AddTodoForm } from './AddTodoForm'
import { FixedModelContainer } from '@/global-component/Container'

//页面组件
export const Todo = () => {
    const [action, setAction] = useState('todo')
    const [addTodoFormVisible, setAddTodoFormVisible] = useState(false)
    const addTodo = () => setAddTodoFormVisible(true)
    return <TodoWrapper>
        <TodoContent>
            <CurrentTimeBlock onAdd={addTodo} />
            <TodoList />
        </TodoContent>
        <FooterBlock action={action} actionClick={ac => setAction(ac)} />
        {addTodoFormVisible && <FixedModelContainer>
            <AddTodoForm></AddTodoForm>
        </FixedModelContainer>}

    </TodoWrapper >
}   