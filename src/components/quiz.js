export default function Quiz(props){
    console.log(props.options);
    return (
        <div className="quiz-card">
            <p className="quiz-que"> {props.question}</p>
            <div className="quiz-options">{props.options} </div>
        </div>
    );
}