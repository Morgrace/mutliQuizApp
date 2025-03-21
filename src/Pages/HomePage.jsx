import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecentActivity from '../components/RecentActivity';

function HomePage() {
  return (
    <div className="grid h-[100vh] !p-[1rem_1.5rem_0]">
      <Header />
      <main>
        <Categories />
        <RecentActivity />
      </main>
      <Footer className="self-end" />
    </div>
  );
}

export default HomePage;
