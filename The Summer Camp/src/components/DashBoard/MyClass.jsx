import { Helmet } from "react-helmet-async";
import useSelectedClass from "../../Hooks/useSelectedClass";
import SectionTitle from "../Shared/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyClass = () => {
  const [selectedClass,refetch] = useSelectedClass();
  const handleDelete = (item) => {
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
        fetch(`http://localhost:5000/selected/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) =>{
            if(data.deletedCount>0){
              console.log(data);
              refetch();
              Swal.fire(
                "Deleted!",
                "Your selected class has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  const total = selectedClass.reduce((sum, myClass) => myClass.price + sum, 0);
  console.log(selectedClass);
  return (
    <div>
      <SectionTitle
        subHeading="My Class"
        heading={"WANNA ADD MORE?"}
      ></SectionTitle>
      <Helmet>
        <title>The Summer Camp || My Class</title>
      </Helmet>
      <div className="uppercase text-center flex mb-4 h-10 items-center justify-center gap-3 ">
        <h3 className="text-xl">Total Class: {selectedClass.length}</h3>
        <h3 className="text-xl">Total Price: ${total}</h3>
        <button className="btn btn-warning btn-small w-14">Pay</button>
      </div>
      <div className="overflow-x-auto mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl">#</th>
              <th>Class Img</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item?.image} alt="Food img" />
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>${item?.price}</td>
                <td>
                  <button  onClick={() => handleDelete(item)} className="btn text-white btn-circle btn-outline btn-accent">
                    <FaTrashAlt className=" text-black hover:text-white"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyClass;
