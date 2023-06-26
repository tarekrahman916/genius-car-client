import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "Unregistered";
    const message = form.message.value;

    console.log(name, phone, email, message);

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Placed");
          form.reset( );
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl mt-5">You are order to {title}</h2>
        <h4 className="text-3xl">Price: ${price}</h4>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input input-bordered w-full "
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered w-full "
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-accent h-24 w-full "
          placeholder="Yor message"
        ></textarea>
        <input
          className="btn btn-accent mb-10"
          type="submit"
          value="Place Your Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
