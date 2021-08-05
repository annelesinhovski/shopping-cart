import React, { createContext, useEffect, useState } from "react";

export const PaymentContext = createContext(null);

export const PaymentStore = (props) => {
  const [payment, setPayment] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const paymentStorage = localStorage.getItem("payment");
    const userStorage = localStorage.getItem("user-data");

    setPayment(JSON.parse(paymentStorage));
    setUserData(JSON.parse(userStorage));
  }, []);

  const handlerSavePayment = (paymentData) => {
    window.localStorage.setItem("payment", JSON.stringify(paymentData));
    setPayment(paymentData);
  };

  const handlerSaveUser = (userData) => {
    window.localStorage.setItem("user-data", JSON.stringify(userData));
    setUserData(userData);
  };

  return (
    <PaymentContext.Provider
      value={{
        state: {
          payment,
          userData,
        },
        dispatch: {
          payment: handlerSavePayment,
          userData: handlerSaveUser,
        },
      }}
      {...props}
    />
  );
};
