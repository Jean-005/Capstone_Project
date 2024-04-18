import Order from "../Order";
import "./OrderList.css"

const OrderList = ({route}) => {
    if(!route) {
        return <p>Order loading</p>
    }

    const orderComponents = route.orders.map((order) => {
        return (
            <article id="single-order" key={order.id}>
                <Order
                key={order.id}
                order={order}
                />
            </article>
        )
    })
    return (
        <>
            <section id="order-container">
                <h3 id="order-list-heading">Orders</h3>
                <div id="order-field-titles">
                    <h4>Delivery Status</h4>
                    <h4>Order Id</h4>
                    <h4>Delivery Address</h4>
                </div>
                <div id="orders-list">
                    {orderComponents}
                </div>
            </section>
        </>
    );
}

export default OrderList;