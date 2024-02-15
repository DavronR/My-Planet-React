import TriviaList from '../components/TriviaList';

const TriviaPage = ({triviaData, initialFilter}) => {
    return (
        <div>
            <TriviaList triviaData={triviaData} initialFilter={initialFilter}/>
        </div>
    );
};

export default TriviaPage;