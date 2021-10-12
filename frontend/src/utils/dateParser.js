import moment from 'moment';
import 'moment/locale/ru';

export const parsedDate = date => {
    return moment(date).locale('RU').format('LL')
}