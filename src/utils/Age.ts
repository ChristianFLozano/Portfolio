export function Age(){
    const YEAR = 2004
    const MONTH = 8
    const DAY = 7
    const today = new Date()
    
    let age = today.getFullYear() - YEAR;
    const monthsDiff = today.getMonth() - MONTH;

    if (monthsDiff < 0 || (monthsDiff === 0  && today.getDate() < DAY)) {
        age--;
    }
    
    return(age)
    
}