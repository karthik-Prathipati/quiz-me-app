import Option from "./option";

export default function Quiz(props){
    const allAnswers =[...props.options,props.answer]
    const allOptions = allAnswers.map((ele,index) =>{
        return (
            <Option value={ele} key={index} id ={index}  />
        );
    })
    return (
        <div className="quiz-card">
            <p className="quiz-que"> {props.question}</p>
            <div className="quiz-options">
                {allOptions} 
            </div>
        </div>
    );
}