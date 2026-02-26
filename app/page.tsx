import { DashboardCard } from "@/components/ui/dashboard-card";
import AppAreaChart from "@/features/dashboard/components/AppAreaChart";
import AppBarChart from "@/features/dashboard/components/AppBarChart";
import AppPieChart from "@/features/dashboard/components/AppPieChart";
import CardList from "@/features/dashboard/components/CardList";
import TodoList from "@/features/dashboard/components/TodoList";
import {
  MOCK_LATEST_TRANSACTIONS,
  MOCK_POPULAR_CONTENT,
} from "@/features/dashboard/data/mockCardLists";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <DashboardCard colSpan="wide">
        <AppBarChart />
      </DashboardCard>
      <DashboardCard>
        <CardList title="Latest Transactions" items={MOCK_LATEST_TRANSACTIONS} />
      </DashboardCard>
      <DashboardCard>
        <AppPieChart />
      </DashboardCard>
      <DashboardCard>
        <TodoList />
      </DashboardCard>
      <DashboardCard colSpan="wide">
        <AppAreaChart />
      </DashboardCard>
      <DashboardCard>
        <CardList title="Popular Content" items={MOCK_POPULAR_CONTENT} />
      </DashboardCard>
    </div>
  );
};

export default Homepage;
