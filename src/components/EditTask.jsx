import { Link } from 'raviger'

const EditTask = ({ id }) => {
    return (
        <>
        <div>
            <h1>EditTask {id}</h1>
            
            <form action="">
                <input type="text" />
                <button type='submit'>Modifier</button>
            </form>
            <Link href="/">Back to Home</Link>
        </div>
        </>
    );
};

export default EditTask;