import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = () => {
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/orders/all');
      setData(response.data);
    } catch (err) {
      console.error("Error fetching orders", err);
    }
  }

  const updateStatus = async (event, orderId) => {
    try {
      const response = await axios.patch(`http://localhost:8081/api/orders/status/${orderId}?status=${event.target.value}`);
      if (response.status === 200) {
        await fetchOrders();
      }
    } catch (err) {
      console.error("Error updating status", err);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container">
      <div className="py-5 row justify-content-center">
        <div className="col-11 card">
          <table className="table table-responsive">
            
            <tbody>
              {data.map((order, index) => (
                <tr key={index}>
                  <td>
                    <img src={assets.parcel} alt="Food Item" height={48} width={48} />
                  </td>
                  <td>
                    <div>
                    {order.orderedItems.map((item, itemIndex) => (
                      <span key={itemIndex}>
                        {item.name} x {item.quantity}
                        {itemIndex < order.orderedItems.length - 1 && ", "}
                      </span>
                    ))}
                    </div>
                    <div>
                      {order.userAddress}
                    </div>
                  </td>

                  <td>&#x20B9;{order.amount}</td>
                  <td>Items: {order.orderedItems.length}</td>
                  <td className="fw-bold text-capitalize">&#x25cf; {order.orderStatus}</td>
                  <td>
                    <select className="form-select" value={order.orderStatus} onChange={(e) => updateStatus(e, order.id)}>
                      <option value="Preparing">Preparing</option>
                      <option value="On the way">On the way</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
