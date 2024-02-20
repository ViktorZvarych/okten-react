const Character = ({character}) => {
    console.log('render Character');
const {id, name} = character;
    return (
        <div>
            <h2>Character</h2>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <hr/>
        </div>
    );
};

export {Character};