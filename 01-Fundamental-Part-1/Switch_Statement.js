// Mapping one activity to each day.

const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code example');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

// Using if else statement

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory vidoes');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code example');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy weekend')
} else {
    console.log('Not a valid day!')
}
