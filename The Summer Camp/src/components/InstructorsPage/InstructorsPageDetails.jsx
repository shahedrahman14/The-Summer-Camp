/* eslint-disable react/prop-types */
const InstructorsPageDetails = ({ instructor }) => {
  const { instructor_image, instructor_name, email, num_classes_taken ,class_names_taken} =
    instructor;
  return (
    <div>
      <div className="card card-compact bg-[#CAABF9] w-96  shadow-xl items-center mx-auto p-6 ">
        <div className="avatar flex jus">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={instructor_image} />
          </div>
        </div>
        <div className="card-body font-medium text-whi">
          <h2 className="card-title">{instructor_name}</h2>
          <p>Email: {email}</p>
          <p>Number of Class: {num_classes_taken}</p>
          <ul>
          Classes Name:{
            class_names_taken.map(i=><li key={i.id}>{i}</li>)
          }
          </ul>
       
    
        </div>
      </div>
    </div>
  );
};

export default InstructorsPageDetails;
