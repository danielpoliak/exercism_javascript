export const isLeap = (year) => {
    if(!(year % 4)){
        if(!(year % 100) && !!(year % 400)) {
            return false
        }
    return true
    } 
    return false
}