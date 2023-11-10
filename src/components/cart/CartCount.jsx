export default function (props) {
    return (
        <div className='cart-container'>
            <div className='cart-icon'>&#128722;</div>
            <div className='cart-count'>{props.count}</div>
        </div>
    );
}
