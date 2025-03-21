import Footer from './Footer';

function Loader() {
  return (
    <div className="flex h-[100vh] flex-col items-center">
      <div className="loader relative top-[50%]"></div>
      <Footer className="!mt-auto self-stretch" />
    </div>
  );
}

export default Loader;
