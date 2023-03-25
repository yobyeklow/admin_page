import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { request } from "../../utils/request";
import Swal from "sweetalert2";
const Orders = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [statusValue, setStatusValue] = useState("");
  const handleChange = (value) => {
    setStatusValue(value);
  };
  const FetchingData = async () => {
    await request
      .get("/order")
      .then((res) => {
        setData(res.data);
        calculateOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [totalOrders, setTotalOrders] = useState({
    newOrder: 0,
    deliveredOrder: 0,
    cancelledOrder: 0,
  });
  const calculateOrder = (orders) => {
    const newOrder = orders.filter(
      (item) => item.orderStatus === "Processing"
    ).length;
    const deliveredOrder = orders.filter(
      (item) => item.orderStatus === "Delivered"
    ).length;
    const cancelledOrder = orders.filter(
      (item) => item.orderStatus === "Cancelled"
    ).length;
    setTotalOrders({
      newOrder,
      deliveredOrder,
      cancelledOrder,
    });
  };

  useEffect(() => {
    FetchingData();
  }, [statusValue]);
  return (
    <div className="orders-page">
      <h1 className="title-page">Orders</h1>
      <div className="info-box">
        <div className="info-box-item">
          <div className="info-box-content new-orders">
            <h3 className="top-content">New Orders</h3>
            <div className="bottom-content">
              <h1>{totalOrders.newOrder}</h1>
              <div className="text-details">
                <span>Impression</span>
                <span>-</span>
                <span>20%</span>
              </div>
              <span class="material-symbols-outlined icon-up">trending_up</span>
            </div>
          </div>
        </div>
        <div className="info-box-item">
          <div className="info-box-content pending-orders">
            <h3 className="top-content">Delivered Orders</h3>
            <div className="bottom-content">
              <h1>{totalOrders.deliveredOrder}</h1>
              <div className="text-details">
                <span>Impression</span>
                <span>-</span>
                <span>20%</span>
              </div>
              <span class="material-symbols-outlined icon-up">trending_up</span>
            </div>
          </div>
        </div>
        <div className="info-box-item">
          <div className="info-box-content delivered-orders">
            <h3 className="top-content">Cancelled Orders</h3>
            <div className="bottom-content">
              <h1>{totalOrders.cancelledOrder}</h1>
              <div className="text-details">
                <span>Impression</span>
                <span>-</span>
                <span>20%</span>
              </div>
              <span class="material-symbols-outlined icon-up">trending_up</span>
            </div>
          </div>
        </div>
      </div>
      <div className="data-order">
        <div className="content">
          <table className="table-form">
            <thead>
              <tr>
                <th>
                  <div className="header-table">
                    <span className="material-symbols-outlined text-purple">
                      123
                    </span>
                    <h3>Order ID</h3>
                  </div>
                </th>
                <th>
                  <div className="header-table">
                    <span className="material-symbols-outlined font-medium text-organce text-xl">
                      calendar_month
                    </span>
                    <h3>Order Date</h3>
                  </div>
                </th>
                <th>
                  <div className="header-table">
                    <span className="material-symbols-outlined text-xl text-lightGray">
                      inventory_2
                    </span>
                    <h3>Order By</h3>
                  </div>
                </th>
                <th>
                  <div className="header-table">
                    <span class="material-symbols-outlined text-darkGreen text-xl">
                      paid
                    </span>
                    <h3>Total Price</h3>
                  </div>
                </th>
                <th>
                  <div className="header-table">
                    <span class="material-symbols-outlined text-rosyBrown text-xl">
                      trolley
                    </span>
                    <h3>Status</h3>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="table-content">
              {data?.length > 0 &&
                data.map((item) => {
                  return (
                    <MyDataRow
                      key={item._id}
                      item={item}
                      handleChange={handleChange}
                    ></MyDataRow>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
const MyDataRow = (props) => {
  const { item } = props;

  const date = item.createdAt.slice(0, 10);
  const [edit, setEdit] = useState(false);
  const [statusValue, setStatusValue] = useState("");
  const handleAnnounce = (id, value) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      confirmButtonText: "Save",
      confirmButtonColor: "#019c00",
      denyButtonText: "Don't save",
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          handleUpdateStatus(id, value);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdateStatus = (id, value) => {
    props.handleChange(value);
    request
      .put(`/order/${id}`, {
        status: value,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tr>
      <td>
        <span>#{item._id}</span>
      </td>
      <td>
        <span>{date}</span>
      </td>
      <td>
        <span>{item.orderBy.name}</span>
      </td>
      <td>
        <span>
          {item.paymentIntent.amount.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </span>
      </td>
      <td>
        <div className="checkpoint">
          {(item.orderStatus === "Processing" ||
            item.orderStatus === "Dispatched" ||
            item.orderStatus === "Cash on Delivery") && (
            <>
              <span class="material-symbols-outlined icon-pending">
                more_horiz
              </span>
            </>
          )}
          {(item.orderStatus === "Cancelled" ||
            item.orderStatus === "Not Processed") && (
            <>
              <span class="material-symbols-outlined icon-cancel ">close</span>
            </>
          )}
          {item.orderStatus === "Delivered" && (
            <>
              <span className="material-symbols-outlined icon-success">
                done_all
              </span>
            </>
          )}
          {edit ? (
            <select
              defaultValue={item.orderStatus}
              id="order-status"
              name="order-status"
              className="w-[150px]"
              onChange={(e) => {
                setStatusValue(e.target.value);
              }}
            >
              <option value="Delivered">Delivered</option>
              <option value="Processing">Processing</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Dispatched">Dispatched</option>
              <option value="Not Processed">Not Processed</option>
            </select>
          ) : (
            <span>{item.orderStatus}</span>
          )}
        </div>
      </td>
      <td className="flex items-center gap-3">
        <div
          onClick={() => {
            setEdit(!edit);
          }}
          className="edit-status"
        >
          {edit ? (
            <span onClick={() => handleAnnounce(item._id, statusValue)}>
              Update
            </span>
          ) : (
            <span>Edit</span>
          )}
        </div>
        <div className="detail-order">
          <Link
            state={{ order: item }}
            to={{
              pathname: `/order/${item._id}`,
            }}
          >
            <span>Details</span>
          </Link>
        </div>
      </td>
    </tr>
  );
};
export default Orders;
