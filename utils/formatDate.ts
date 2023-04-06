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

export const toMs = (dateStr: string): number => {
    let parts: string[] = dateStr.split("-");
    return new Date( Number(parts[2]), Number(parts[1]) - 1, Number(parts[0])).getTime()
  }



