/* eslint-disable react/prop-types */


const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center mt-16">
            <p className='text-amber-500'>------- {subHeading} -------</p>
            <p className="text-2xl">{heading}</p>
            ------------------------------------------------
        </div>
    );
};

export default SectionTitle;