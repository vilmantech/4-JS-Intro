const day = 2;

switch (day) {
case 1:
    console.log('pirmadienis');
    break
case 2:
    console.log('antradienis');
    break;
case 3:
    console.log('treaciedinis');
    break;
default:
    console.log('tokios dienos nera');
    break;
}


const day3 = 1;
switch (day3){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;
    case 6:
    case 7:
        console.log('savaitgalis');
        break;
    default:
        console.log('nera dienos');
        break;
}

const stotele = 'ziedas'

switch (stotele) {
    case 'ziedas':
        console.log ('ziedas');
    case 'parko':
        console.log ('parko');
    case 'geniu':
        console.log ('geniu');
    case 'leliju':
        console.log ('leliju');
        break;
    case 'lvovo':
        console.log('lvovo');
    case 'parko2':
        console.log('parko');
    case 'geniu2':
        console.log('geniu');
        break
    default:
        console.log('tokios stoteles nera');
}