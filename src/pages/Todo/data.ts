const storageTodayDataKey = "todo-today-data"

export type TodoItemInfo = {
    title: string
    rule: string
    time: string
    id: string
    isDone?: boolean
}

export type TodoTodayData = {
    todoDid: string[]
    todoTemp: TodoItemInfo[]
    date: string
}

export function getData(): { todos: TodoItemInfo[] } {
    return {
        todos: [
            { title: "起床", rule: "week|0,1,2,3,4,5,6", time: "06:00", id: "2" },
            { title: "运动", rule: "week|0,1,2,3,4,5,6", time: "06:30", id: "3" },
            { title: "做早饭", rule: "week|0,1,2,3,4,5,6", time: "07:00", id: "4" },
            { title: "做晚饭", rule: "week|0,1,2,3,4,5,6", time: "19:00", id: "5" },
            { title: "看书", rule: "week|0,1,2,3,4,5,6", time: "20:00", id: "6" },
            { title: "弹琴", rule: "week|0,1,2,3,4,5,6", time: "21:00", id: "7" },
            { title: "运动", rule: "week|0,1,2,3,4,5,6", time: "22:00", id: "8" },
            { title: "洗澡", rule: "week|0,1,2,3,4,5,6", time: "22:30", id: "9" },
            { title: "睡觉", rule: "week|0,1,2,3,4,5,6", time: "23:00", id: "10" },
        ]
    }
}

const getTodayData = () => {
    const currentDate = new Date().toLocaleDateString()
    const initData = { todoDid: [], todoTemp: [], date: currentDate }
    let saveDataString = localStorage.getItem(storageTodayDataKey) ?? "{}"
    let todayData = JSON.parse(saveDataString) as TodoTodayData
    return todayData.date === currentDate ? todayData : initData
}

export const saveTodayData = (todayData: TodoTodayData) => localStorage.setItem(storageTodayDataKey, JSON.stringify(todayData))

export const saveTodoDid = (ids: string[]) => {
    const todayData = getTodayData()
    todayData.todoDid = ids
    saveTodayData(todayData)
}

export function getTodayTodoList(): TodoItemInfo[] {
    const todayData = getTodayData()
    const currentDay = new Date().getDay() + ""
    let plans = getData().todos.filter(item => {
        const [ruleType, ruleValue] = item.rule.split("|")
        if (ruleType === "week") {
            return ruleValue.split(",").includes(currentDay)
        }
    })
    let todos = [...todayData.todoTemp, ...plans]
    //排序
    todos = todos.sort((a, b) => a.time > b.time ? 1 : -1)
    todos = todos.map(item => {
        item.isDone = todayData.todoDid.includes(item.id)
        return item
    })
    return todos
}

