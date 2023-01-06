import { FC, useEffect, useState } from 'react'
import { SvgIcon, PlusIcon } from '@/svg-icons/SvgIcons'
import { CurrentTime } from './style'
import { getMonthName } from '@/libs/time'

export const CurrentTimeBlock: FC<{ onAdd: () => void }> = ({ onAdd }) => {
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


    const showAddTodo = () => {
        alert(1)
    }

    return <CurrentTime>
        <span className="date">{time.day}</span>
        <span className="month">/{time.month}</span>
        <div className="add-btn">
            <SvgIcon onClick={onAdd}>
                <PlusIcon />
            </SvgIcon>
        </div>
    </CurrentTime>
}