/* eslint-disable react/prop-types */
const Instructor = ({ instructor }) => {
  const {instructor_image,instructor_name,email,
    num_classes_taken} = instructor;
  return (
    <div className="mx-auto ">
      <div className="flex  gap-2">
      <div className="avatar flex jus">
<div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  <img src={instructor_image} />
</div>
</div>
            <div >
                <h3 className="uppercase">{instructor_name}---------</h3>
                <p>Email: {email}</p>
            </div>
            <p className="text-yellow-600">Total Class: {num_classes_taken}</p>
        </div>
    </div>
  );
};

export default Instructor;
