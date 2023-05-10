import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AddCoffee = () => {

  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value
    const taste = form.taste.value
    const supplier = form.supplier.value;
    const quantity = form.quantity.value;
    const category = form.category.value
    const details = form.details.value
    const photo = form.photo.value
    const newCoffee = {
      name,
      taste,
      supplier,
      quantity,
      category,
      details,
      photo
    };
      fetch("http://localhost:5000/coffee", {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newCoffee),
      })
        .then((res) => res.json())
        .then((data) => {
            if(data.insertedId){
              Swal.fire({
                title: "Success!",
                text: "Coffee Added Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
              
            }
            form.reset();
        });
  }



  return (
    <div className="bg-gray-300 p-24">
      <div className="flex justify-between ">
        <h2 className="font-bold text-3xl">Add Coffee </h2>
        <Link to="/">
          <button className="btn btn-success ">Home</button>
        </Link>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="md:flex gap-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text ">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
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
                type="text"
                required
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
