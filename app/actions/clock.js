const UPDATE_TIME = "UPDATE_TIME"

export function updateTime(){
    let time = new Date();
    return {
        type: UPDATE_TIME,
        time: time.toLocaleTimeString()
    }
}