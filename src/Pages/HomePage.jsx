import Categories from '../components/Categories';
import Header from '../components/Header';
import RecentActivity from '../components/RecentActivity';

function HomePage() {
  return (
    <div className="!p-[1rem_1.5rem_0]">
      <Header />
      <main>
        <Categories />
        <RecentActivity />
      </main>
    </div>
  );
}

export default HomePage;
