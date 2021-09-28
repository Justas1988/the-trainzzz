


function Todo(props) {

    return (
        <div className="todo">
            {/* <div className='id'>{props.id}</div> */}
            <div className="author">{props.author}</div>
            <img className="cover" src={props.img} alt="cover"/>
            <div className="title">{props.title}</div>
            <div className="bottom">
            <div className="price">
                <div className="price-text">{props.price}€</div>                
            </div>
            <button type="submit" className="pirkti">Pirkti</button>
            </div>
        </div>
    );
}

export default Todo;