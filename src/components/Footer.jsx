import FooterIconListItem from './FooterIconListItem';

const Footer = function () {
  return (
    <footer className="!mt-[2rem] self-end bg-[rgba(171,194,227,0.12)]">
      <ul className="flex justify-between !p-[1rem]">
        <FooterIconListItem />
      </ul>
    </footer>
  );
};
export default Footer;
