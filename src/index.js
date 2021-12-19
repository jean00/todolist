import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { format } from 'date-fns';

const today = new Date();
const formattedDate = format(today, 'dd.MM.yyyy');

document.querySelector('.today').textContent = formattedDate;