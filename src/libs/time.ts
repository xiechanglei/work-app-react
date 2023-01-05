const monthWords = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export function getMonthName(date: Date): string {
    return monthWords[date.getMonth()]
}