import { Helmet } from "react-helmet-async";
import useInstructor from "../../Hooks/useInstructor";
import InstructorsPageDetails from "./InstructorsPageDetails";
import SectionTitle from "../Shared/SectionTitle";


const InstructorsPage = () => {
    const [instructors]=useInstructor()
    return (
   <div>
    <Helmet>
        <title>The Summer Camp || Instructors Page</title>
    </Helmet>
    <SectionTitle subHeading="Our Instructors" heading="Learn Something New form them"></SectionTitle>
         <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-14">
            {
                instructors.map(instructor=><InstructorsPageDetails key={instructor.id} instructor={instructor}></InstructorsPageDetails>)
            }
        </div>
   </div>
    );
};

export default InstructorsPage;