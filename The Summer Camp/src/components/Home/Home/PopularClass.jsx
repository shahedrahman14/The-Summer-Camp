
import SectionTitle from "../../Shared/SectionTitle";
import Class from "./Class";
import useClass from "../../../Hooks/useClass";


const PopularClass = () => {
const [myClass]=useClass()

            const sortedClasses = myClass.sort((a, b) => b.numberOfStudents - a.numberOfStudents);
            const topClasses = sortedClasses.slice(0, 6);
           
      
         
 
   
    return (
        <div className="my-12">
        <SectionTitle subHeading='Best Class' heading='See the popular class chosen by student'></SectionTitle>
         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
            {
                topClasses.map(singleClass=><Class key={singleClass.id} singleClass={singleClass}></Class>)
            }
        </div>
       </div>
    );
};

export default PopularClass;