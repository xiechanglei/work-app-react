import { LineInput } from "@/global-component/Input"
import { AddTodoFormWraper } from "./style"

export const AddTodoForm = () => {
    return <AddTodoFormWraper>
        <LineInput placeholder="想一想要做什么" />
        <LineInput placeholder="00:00" type="time" />
    </AddTodoFormWraper>
}