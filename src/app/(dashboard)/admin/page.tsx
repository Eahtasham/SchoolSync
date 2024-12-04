import Announcements from "@/components/dashboard/Announcements";
import AttendanceChart from "@/components/dashboard/AttendanceChart";
import EventCalendar from "@/components/dashboard/EventCalendar";
import FinanceChart from "@/components/dashboard/FinanceChart";
import UserCard from "@/components/dashboard/UserCard";
import PieChart from "@/components/dashboard/PieChart"

const AdminPage = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">

      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col flex-grow gap-4">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="parent" />
          <UserCard type="teacher" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* SEX-RATIO CHART */}
          <div className="w-full h-[450px] lg:w-[40%] dark:bg-stone-800 rounded-xl">
            {/* <RatioChart /> */}
            <PieChart/>
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full h-[450px] lg:w-[60%]">
            <AttendanceChart />
          </div>
        </div>
        {/* FINANCE CHART */}
        <div className="w-full h-[31.25rem] xl:h-full">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT EVENT PANEL */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <EventCalendar />
        <Announcements/>
      </div>
    </div>
  );
};

export default AdminPage;