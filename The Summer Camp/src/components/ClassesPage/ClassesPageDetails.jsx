/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import useSelectedClass from "../../Hooks/useSelectedClass";

const ClassesPageDetails = ({ singleClass }) => {
  const { title, image, instructor, availableSeats, price,_id } = singleClass;
  const navigate = useNavigate();
const [,refetch]=useSelectedClass()
  const { user } = useAuth();
  const handleSelectItem = (selectItem) => {
    console.log(selectItem);
    if (user && user?.email) {
      const selectedClass={classId:_id,name:title,image,instructor,availableSeats,price,email:user?.email}
      fetch("http://localhost:5000/selected",{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(selectedClass)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your class has been selected",
              showConfirmButton: false,
              timer: 1500,
            });
          }
       
          
        });
    }
    else{
      Swal.fire({
        title: "Please login before select the class",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state:{from:location}});
        }
      });
     
    }
  };
  return (
    <div className="mx-auto">
      <div className="card bg-[#CAABF9] w-96 h-full  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="image" className="rounded-xl" />
        </figure>
        <div className="card-body  items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>Instructor Name: {instructor}</p>
          <p>Available Seats: {availableSeats}</p>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <button
              onClick={() => handleSelectItem(singleClass)}
              className="btn btn-primary"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesPageDetails;
