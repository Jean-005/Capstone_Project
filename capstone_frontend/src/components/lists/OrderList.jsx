import Order from "../Order";
import "./OrderList.css"

const OrderList = ({orders}) => {

    const orderComponents = orders.map((order) => {
        return (
            
            <Order
            key={order.id}
            order={order}
            
            />
        )
    })
    return (
        <>
            <section id="order-container">
                <h3 id="order-list-heading">Orders</h3>
                {orderComponents}
            </section>
        </>
    );
}

export default OrderList;