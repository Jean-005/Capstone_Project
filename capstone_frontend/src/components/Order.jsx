import "./Order.css"
const Order = ({ order }) => {

    return (

        <>  
            <p><input type="checkbox"/></p>
            <p><span className="order-field-name"></span>{order.id}</p>
            <p><span className="order-field-name"></span>{order.deliveryLocation}</p>
        </>

    );
}

export default Order;