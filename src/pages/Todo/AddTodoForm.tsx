import { LineInput } from "@/global-component/Input"
import { NeedDoneIcon, SvgIcon } from "@/svg-icons/SvgIcons"
import { useRef, useState } from "react"
import { AddTodoFormWraper } from "./style"

export const AddTodoForm = () => {
    let timeInputRef = useRef<HTMLInputElement>(null)
    let [time, setTime] = useState<string>("请选择")

    return <AddTodoFormWraper>
        <div className="input-item">
            <span className="input-name">标题 : </span>
            <LineInput
                className="input-value"
                placeholder="想一想要做什么" />
        </div>
        <div className="input-item">
            <span className="input-name">时间 : </span>
            <div onClick={() => timeInputRef.current?.click()}
                className="input-value">{time}</div>
            <input ref={timeInputRef}
                type="time"
                style={{ visibility: "hidden" }}
                onChange={(e) => setTime(e.target.value)}></input>
        </div>
        <div className="input-item">
            <span className="input-name">重复 : </span>
            <div className="input-value" >
                <SvgIcon><NeedDoneIcon /></SvgIcon>仅本日&nbsp;&nbsp;&nbsp;
                <SvgIcon><NeedDoneIcon /></SvgIcon>周重复&nbsp;&nbsp;&nbsp;
                <SvgIcon><NeedDoneIcon /></SvgIcon>月重复&nbsp;&nbsp;&nbsp;
            </div>
        </div>
    </AddTodoFormWraper>
}