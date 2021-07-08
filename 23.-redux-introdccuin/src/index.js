import { ADD_NEW_TODO_ACTION } from './actions/todo';
import { store } from './store/store';
import './styles/styles.scss'

//variables
let input = document.querySelector('#input');
let listThings = document.querySelector('#list__things');

//funcion
const render = () => {
    listThings.innerHTML = '';
    let data = store.getState().data;
    console.log(data)
    data.map( dataList => {
        let li = document.createElement('li');
        li.textContent = dataList;
        listThings.appendChild( li )
    } )
    
}

//Events
input.addEventListener( 'keydown', (e) => {
    
    if ( e.key === "Enter" ) {
        store.dispatch( ADD_NEW_TODO_ACTION( input.value ) )
    }
} )

//subscribe
store.subscribe( render );

//init
render();