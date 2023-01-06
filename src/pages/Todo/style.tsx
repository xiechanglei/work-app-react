import styled from 'styled-px2vw'
import { activeColor, frontColor } from '@/constans/theme'

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

export const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const TodoContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 30px;
    overflow-y: auto;
`

export const CurrentTime = styled.div`
    flex-shrink: 0;
    padding: 30px;
    position: relative;
    & .date {
        font-size: 100px;
    }
    & .month {
        font-size: 40px;
    }
    & .add-btn {
        position: absolute;
        right: 30px;
        bottom: 50px;
    }
    & .add-btn .svg-icon{
        width: 70px;
        height: 70px;
    }
`
export const TodoListWraper = styled.div`
    flex-grow: 1;
    overflow-y: auto;
`

export const TodoItemWraper = styled.div`
    display: flex;
    background: ${frontColor};
    color: ${activeColor};
    padding: 30px;
    border-radius: 10px;
    margin-top: 30px;
    align-items: center;
    & .todo-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
  
    & .todo-title {
        font-size: 35px;
    }

    & .todo-time {
        font-size: 20px;
        margin-top: 10px;
    }
  
    & .todo-process {
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .todo-process {
        color: #cccccc;
        width: 50px;
        height: 50px;
    }
  
    &.done {
        color: #aaaaaa;
        text-decoration: line-through;
        background-color: rgba(255, 255, 255, 0.6);
    }
  
    &.done .todo-process {
        color: ${activeColor};
    }
`

export const TodoFooter = styled.div`
    display: flex;
    flex-shrink: 0;
    height: 120px;
    justify-content: space-around;
    align-items: center;
    & .svg-icon{
        width: 70px;
        height: 70px;
    }
`

export const AddTodoFormWraper = styled.div`
    width: 600px;
    padding: 30px;
    background-color: ${frontColor};
    color: ${activeColor};
    border-radius: 10px;
    & .input-item {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
    }
    & .input-item span{
        font-size: 30px;
        margin-right: 20px;
    }
    & .input-item .input-value {
        font-size: 30px;
        flex-grow: 1;
        display: flex;
        align-items: center;
    }
    & .input-item .input-value .svg-icon{
        width: 40px;
        height: 40px;
        color: #ccc;
    }
`
