/* eslint-disable react/prop-types */

const Class = ({ singleClass }) => {
  const { title, image, numberOfStudents } = singleClass;
  return (
    <div className="mx-auto">
      <div className="card bg-[#CAABF9] w-96 h-80 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="image"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>numberOfStudents: {numberOfStudents}</p>
        
        </div>
      </div>
    </div>
  );
};

export default Class;
