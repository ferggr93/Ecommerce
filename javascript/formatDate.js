function FormatDate(date){
    const formatedDate = new Intl.DateTimeFormat('es-AR', {
        day:'2-digit',
        month:'2-digit',
        year:'numeric'
    })
    return formatedDate.format(date)
}



function DateFormat(date){

    const format = new Date(date);

    let day = format.getDate();

    if(day < 10){
        day = '0' + day;
    }

    let month = format.getMonth() + 1;

    if(month < 10){
        month = '0' + month;
    }

    let year = format.getFullYear();

    return `${year}-${month}-${day}`;
}