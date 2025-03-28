import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecentActivity from "../components/RecentActivity";

function HomePage() {
  return (
    <div className="flex h-[100dvh] flex-col gap-10 !p-[1rem_1.5rem_0]">
      <Header />
      <main>
        <Categories />
        <RecentActivity />
      </main>
      <Footer className="!mt-auto" />
    </div>
  );
}

export default HomePage;
