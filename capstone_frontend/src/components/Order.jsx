import "./Order.css"
const Order = ({ order }) => {

    return (
        <>  
            <input type="checkbox"/>
            <p><span className="order-field-name"></span>{order.id}</p>
            <p><span className="order-field-name"></span>{order.deliveryLocation}</p>
        </>

    );
}

export default Order;