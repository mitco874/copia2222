export const yearMonthDayToDayMonthYear = ( date: string ): string =>{
    if(date ===""){
        return date;
    }
    return `${ date.substring(8) }-${ date.substring(5,7) }-${ date.substring(0,4) }`
}

export const dayMonthYearToYearMonthDay = ( date: string ): string =>{
    if(date ===""){
        return date;
    }
    return `${ date.substring(6) }-${ date.substring(3,5) }-${ date.substring(0,2) }`
}