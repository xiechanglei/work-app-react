let cookie: string | null = null

const login = async (username: string, password: string) => {
    const params = new URLSearchParams()
    params.append("username", username)
    params.append("password", password)
    params.append("logintype", "employee")
    const res = await fetch("http://119.57.137.242:49526/iclock/accounts/login/", {
        method: "POST",
        body: params,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }
    })
    cookie = res.headers.get("Set-Cookie")
}

export const getData = async (user: string, start: string, end: string) => {
    if (cookie === null) {
        await login(user, user)
    }

    return await fetch("http://119.57.137.242:49526/iclock/staff/transactions/?starttime=" + start + "&endtime=" + end,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cookie": cookie!
            }
        }).then(res => res.json())

}