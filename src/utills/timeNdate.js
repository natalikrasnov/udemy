const defaultTime = "00:00:00"

export function getTimeStringify(time) {
    if (!time) return defaultTime;
    const h = getPaddedTime(parseInt(time / 1200))
    const m = getPaddedTime(parseInt(time / 60))
    const s = getPaddedTime(parseInt(time % 60))
    
    return (h === '00' ? '' :(h+":")) + m + ":" + s
}

function getPaddedTime(timeUnit) {
    return (""+timeUnit).padStart(2, 0)
}