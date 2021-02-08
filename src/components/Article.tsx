import React from "react";

type Props = {
    id: number;
    title: string;
    published: boolean;
    publish: (id: number) => void;
    remove: (id: number) => void;
}

const Article = (props: Props) => (
    <div>
        <li key={props.id}>{props.published? <h1 style={{textDecoration: "line-through"}}>{props.title}</h1>: 
                        <h1>{props.title}</h1>}</li>
        <button onClick={id=>props.publish(props.id)} disabled={props.published}>Publish</button>
        <button onClick={id=>props.remove(props.id)}>Remove</button>
        
    </div>
)

export default Article;