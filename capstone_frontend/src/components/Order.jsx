const Order = ({ order, completedOrders, setCompletedOrders }) => {

    const handleCheckedOrders = () => {
        setCompletedOrders(!completedOrders);
    }
    return (
        <>
            <p>{order.id}</p>
            <p>Address: {order.deliveryLocation}</p>
        
            <input type="checkbox"
                checked={completedOrders}
                onChange={handleCheckedOrders}
            />

        </>

    );
}

export default Order;