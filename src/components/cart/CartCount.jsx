import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function (props) {
    return (
        <div className='cart-container'>
            <div className='cart-icon'>
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div className='cart-count'>{props.count}</div>
        </div>
    );
}
