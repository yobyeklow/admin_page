import React, { Fragment } from "react";

const blank = () => {
  return (
    <Fragment>
      <div className="bottom-content">
        <table className="table-fill">
          <thead>
            <tr>
              <th>
                <div className="header-table">
                  <span>Order ID</span>
                  <span className="material-symbols-outlined icon">
                    keyboard_arrow_down
                  </span>
                </div>
              </th>
              <th>
                <div className="header-table">
                  <span>Product Name</span>
                  <span className="material-symbols-outlined icon">
                    keyboard_arrow_down
                  </span>
                </div>
              </th>
              <th>
                <div className="header-table">
                  <span>Date</span>
                  <span className="material-symbols-outlined icon">
                    keyboard_arrow_down
                  </span>
                </div>
              </th>
              <th>
                <div className="header-table">
                  <span>Price</span>
                  <span className="material-symbols-outlined icon">
                    keyboard_arrow_down
                  </span>
                </div>
              </th>
              <th>
                <div className="header-table">
                  <span>Status</span>
                  <span className="material-symbols-outlined icon">
                    keyboard_arrow_down
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="scroll-list">
            {totalOrder?.length > 0 &&
              totalOrder.reverse().map((item) => {
                console.log(item);
                return (
                  <tr key={item._id}>
                    <td>#{item._id}</td>
                    <td className="product">
                      <img
                        src={item.orderBy.avatar || avatar}
                        className="w-[40px] h-[40px] object-cover overflow-hidden rounded-md"
                        alt=""
                      />
                      <span>{item.orderBy.name}</span>
                    </td>
                    <td>{item.createdAt.slice(0, 10)}</td>
                    <td>{formatted.format(item.paymentIntent.amount)}</td>
                    <td>
                      {(item.orderStatus === "Processing" ||
                        item.orderStatus === "Dispatched" ||
                        item.orderStatus === "Cash on Delivery") && (
                        <>
                          <div className="pending">Pending</div>
                        </>
                      )}
                      {(item.orderStatus === "Cancelled" ||
                        item.orderStatus === "Not Processed") && (
                        <>
                          <div className="warning">Cancelled</div>
                        </>
                      )}
                      {item.orderStatus === "Delivered" && (
                        <>
                          <div className="success">Completed</div>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default blank;
