import React from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees,setCoffees }) => {
  const { _id, name, taste, supplier, quantity, category, details, photo } =
    coffee;
  console.log("photo..", photo);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete");
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
            const remaining = coffees.filter(cof=>cof._id !== _id);
            setCoffees(remaining);
          });
      }
    });
  };
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:w-1/3">
        <img
          className="h-full w-full object-cover md:object-fill"
          src={photo}
          alt="Card image"
        />
      </div>
      <div className="flex flex-col justify-between p-4 md:w-2/3">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-600">Details: {details}</p>
          <p className="text-gray-600">Taste: {taste}</p>
          <p className="text-gray-600">Supplier: {supplier}</p>
          <p className="text-gray-600">Quantity: {quantity}</p>
          <p className="text-gray-600">Category: {category}</p>
          <p className="text-gray-600">Details: {details}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500 text-sm">May 10, 2023</p>
          <div>
            <Link to={`updateCoffee/${_id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 focus:outline-none focus:shadow-outline">
                Edit
              </button>
            </Link>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2 focus:outline-none focus:shadow-outline">
              View
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

//  