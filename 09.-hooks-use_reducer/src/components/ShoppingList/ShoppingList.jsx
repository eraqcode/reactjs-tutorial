import React from 'react'
import { useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import { Articles } from './Articles/Articles'

export const ShoppingList = () => {

    
    const shoppingListReducer = (articles, action) => {
        switch (action.type) {
            case "add":
                return [ ...articles, newArticle( action.payload.name, action.payload.unit ) ];
            case "bought":
                return articles.map( article => {
                    if (article.id === action.payload.id) {
                        return { ...article, bought: !article.bought }
                    }
                    return article
                } );
            case "remove":
                return articles.filter( article => article.id !== action.payload.id )  
            default:
                break;
        }
    }

    const newArticle = ( name, unit ) => {
        return {
            id: Date.now(),
            name,
            unit,
            bought: false
        }
    }
    
    const [articles, dispatch] = useReducer( shoppingListReducer, [] )
    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        unit: 0
    })
    
    const { name, unit } = formValues;

   
    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch( { type: "add", payload: { name: name, unit: unit } } );
        reset();
        e.target.reset();
    }

    console.log( articles );


    return (
        <section className="section">
            <header>
                <h3 className="red-text text-darken-3">Shopping List</h3>
            </header>
            <div className="row">
                <div className="col m6 s8">
                   {
                       articles.map( article => (
                           <Articles 
                                key={ article.id }
                                article={ article }
                                dispatch={dispatch}
                           />
                       ) )
                   }
                </div>
                <div className="col m6 s8">
                    <form onSubmit={ handleSubmitForm } >

                        <div className="row">
                            <div className="input-fiel col s12">
                                <input 
                                    type="text"
                                    placeholder="Insert article"
                                    name="name"
                                    vale={ name }
                                    onChange={ handleInputChange }
                                />
                                <label className="active" htmlFor="name">Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-fiel col s12">
                                <input 
                                    type="number"
                                    name="unit"
                                    value={ unit }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                        <button
                            className="btn pink darken-3"
                        >
                            Add Article
                        </button>
                    </form>
                   
                </div>
            </div>
        </section>
    )
}
