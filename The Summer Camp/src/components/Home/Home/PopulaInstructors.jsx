
import Instructor from "../../Shared/Instructor";
import SectionTitle from "../../Shared/SectionTitle";
import useInstructor from "../../../Hooks/useInstructor";


const PopulaInstructors = () => {
  const [instructors]=useInstructor()
  const popularInstructors =instructors.filter(instructor=>instructor.category === 'popular')
    return (
       <div className="my-12 ">
        <SectionTitle subHeading='Best teacher' heading='See the popular instructor'></SectionTitle>
         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
            {
                popularInstructors.map(instructor=><Instructor key={instructor.id} instructor={instructor}></Instructor>)
            }
        </div>
       </div>
    );
};

export default PopulaInstructors;