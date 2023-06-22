import { FaCalendarAlt, FaSearchLocation } from "react-icons/fa";

const WebSummer = () => {
  return (
    <div className="md:flex md:justify-between items-center md:gap-4 md:p-4 mt-12 bg-[#CAABF9]">
      <div className="md:w-1/2 grid gap-3">
        <p className="text-3xl font-bold ">Web Summer Camp 2023</p>
        <p className="flex items-center text-xl font-bold gap-2">
          <FaSearchLocation></FaSearchLocation> August 31 - September 2
        </p>
        <p className="flex text-xl font-bold items-center gap-2"><FaCalendarAlt></FaCalendarAlt> Hotel Ambasador - Opatija, Croatia</p>
        <p>Join us for the summer’s most offbeat conference for web devs and professionals. This year’s edition will dive deep into emerging trends, best practices for new tools and tech, in an even better format to get the most out of your time in Opatija.</p>
        <div className="flex gap-3 mt-3">
            <button className="btn btn-secondary">GET Tickets</button>
            <button className="btn btn-warning">stay Tuend</button>
        </div>
      </div>
      <div className="md:w-1/2  mt-4">
        <img src="https://rb.gy/o1i3g" alt="" />
      </div>
    </div>
  );
};

export default WebSummer;
