import { Outlet } from "react-router-dom";

const Dashboard = ({user}) => {
  return (
    <section className='section'>
      <h4>Hello, {user?.name}</h4>
      <Outlet/>
    </section>
  );
};
export default Dashboard;
