import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatedCoffee = () => {
    const updateCoffee = useLoaderData();
    const { _id, name, taste, supplier, quantity, category, details, photo } =
      updateCoffee;


    const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const taste = from.taste.value;
    const supplier = from.supplier.value;
    const quantity = from.quantity.value;
    const category = from.category.value;
    const details = from.details.value;
    const photo = from.photo.value;
    const updatedCoffee = {
      name,
      taste,
      supplier,
      quantity,
      category,
      details,
      photo,
    };
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-gray-300 p-24">
      <div className="flex justify-between ">
        <h2 className="font-bold text-3xl">Update {name} </h2>
        <Link to="/">
          <button className="btn btn-success ">Home</button>
        </Link>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex gap-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text ">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                defaultValue={name}
                type="text"
                required
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                name="taste"
                defaultValue={details}
                type="text"
                required
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text ">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                name="supplier"
                defaultValue={supplier}
                type="text"
                required
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Quantity Coffee</span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                defaultValue={quantity}
                type="text"
                required
                placeholder="Quantity Coffee"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text ">Category</span>
            </label>
            <label className="input-group">
              <input
                name="category"
                defaultValue={details}
                type="text"
                required
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                name="details"
                defaultValue={details}
                type="text"
                required
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text ">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                name="photo"
                defaultValue={photo}
                type="text"
                required
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdatedCoffee;
