
export default function Intro(props){
    return (
        <div className='start-page'>
            <h2 className='quiz-header'>Quiz me App</h2>
            <h5 className='quiz-des'>Brand new quiz experience for a better learning</h5>
            <input type='button'
                onClick={() => props.handleClick(prev => !prev)}
                value='Start Quiz'
            />
        </div>  
    );
}