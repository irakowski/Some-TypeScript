import React, { useState, useReducer } from "react";
import Article from "./components/Article";

type Actions = 
    | {type: "add", title: string }
    | {type: "publish", id: number}
    | {type: "remove", id: number}

interface Article {
    title: string;
    id: number;
    published: boolean;
}

type State = Article[];

function nextId(articles: State): number {
    const maxId = articles.reduce((maxId: number, article: Article) => 
            Math.max(article.id, maxId), -1)
    return maxId + 1
  }

const ArticleReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case "add":
            return [...state, {title: action.title, published: false, id:nextId(state)}]
        case "publish": 
            return state.map(article => (
                article.id===action.id? {...article, published: !article.published}: article))
        case "remove":
            return state.filter(article=>article.id!==action.id)
        default:
            return state
    }
}
//React.FC discouraged to use
export const Articles = () => {
    const [title, setTitle] = useState<string>("");
    const [articles, dispatch] = useReducer(ArticleReducer,[]);
    const [blocked, setBlocked] = useState<boolean>(true)

    const handleInput = (e: React.BaseSyntheticEvent) => {
        let value = e.target.value;
        if (value === "") {
            setBlocked(true)
        } else {
            setTitle(value)
            setBlocked(false)
        }
    }

    const publish = (id: number) => {
        dispatch({type:"publish", id: id})
    }

    const remove = (id: number) => {
        dispatch({type: "remove", id: id})
    }

    return (
        <div>
            <h4>Articles</h4>
            <input value={title}
                   onChange={handleInput}/>
            <button onClick={()=>{
                    dispatch({type:"add", title:title});
                    setTitle("");
                    setBlocked(true);}}      
                    disabled={blocked}>Add An Article</button>
            <ul>
                {articles.map(article=><Article id={article.id} 
                                                title={article.title} 
                                                published={article.published}
                                                publish={publish} 
                                                remove={remove}
                                                />)}
            </ul>
        </div>
    )
}