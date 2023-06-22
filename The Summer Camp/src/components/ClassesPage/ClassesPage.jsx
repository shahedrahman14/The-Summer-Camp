import { Helmet } from "react-helmet-async";
import useClass from "../../Hooks/useClass";
import ClassesPageDetails from "./ClassesPageDetails";
import SectionTitle from "../Shared/SectionTitle";


const ClassesPage = () => {
    const [myClass]=useClass()
    return (
        <div>
        <Helmet>
            <title>The Summer Camp || Classes Page</title>
        </Helmet>
        <SectionTitle subHeading="All Classes" heading="Choose the class suitable for you"></SectionTitle>
             <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-14">
                {
                    myClass.map(singleClass=><ClassesPageDetails key={singleClass.id} singleClass={singleClass}></ClassesPageDetails>)
                }
            </div>
       </div>
    );
};

export default ClassesPage;