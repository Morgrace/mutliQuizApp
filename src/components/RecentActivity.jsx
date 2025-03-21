import RecentActivityItem from './RecentActivityItem';

const RecentActivity = function () {
  return (
    <div className="">
      <h3 className="!mb-[1rem] text-[1.2rem]">Recent Activity</h3>
      <ul className="grid max-h-[36vh] gap-[2rem] overflow-y-scroll !p-2">
        <RecentActivityItem />
      </ul>
    </div>
  );
};

export default RecentActivity;
