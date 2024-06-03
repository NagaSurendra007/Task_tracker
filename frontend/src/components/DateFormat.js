import moment from 'moment'
 export const DateFormat=(date)=>{
    return moment(date).format('YYYY/MM/DD')
 }