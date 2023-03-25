import React, { useEffect, useState } from "react";
import { request } from "../../utils/request";
import avatar from "../../../image/avatarDefault.png";
import "../Customers/mainCustomer.scss";
import { Link } from "react-router-dom";
const CustomerPage = () => {
  const [data, setData] = useState([]);
  const FetchingData = async () => {
    await request
      .get("/user")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteItem = async () => {
    await request
      .delete("/user")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    FetchingData();
  }, []);

  return (
    <div className="customerPages">
      <div className="title-page">
        <h3>Customers</h3>
      </div>
      <div className="main">
        <div className="top">
          <div className="title">
            <h3>All customers</h3>
            <span>({data?.length})</span>
          </div>
          <div className="search-tool">
            <input placeholder="Enter customer name" type="text"></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 search-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className="main-customer">
          <div className="graph_box">
            {data?.length > 0 &&
              data.map((item) => {
                return (
                  <div key={item._id} className="box_item">
                    <div className="edit-item">
                      <div className="edit-container">
                        <Link
                          to={{
                            pathname: `/customer/${item._id}`,
                          }}
                          state={{ item: item }}
                          className="edit-btn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </Link>
                        <div
                          onClick={() => deleteItem(item._id)}
                          className="delete-btn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="top-content">
                      <img
                        src={item.avatar || avatar}
                        className="w-[150px] h-[150px] object-fit overflow-hidden rounded-full
                p-1 border-2 border-gray-400 mb-5"
                        alt="avatar.png"
                      />
                      <h3 className="text-lg font-semibold mb-2">
                        {item.name}
                      </h3>
                      <h3 className="mb-2 text-base text-gray-400 font-medium">
                        +84 {item.phone}
                      </h3>
                      <h3 className="mb-5 text-sm font-semibold">
                        Email:{item.email}
                      </h3>
                    </div>
                    <div className="bottom-content">
                      <h3 className="text-base font-semibold">Address</h3>
                      <h3 className="mt-2 text-sm text-gray-400">
                        {item.address}
                      </h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
