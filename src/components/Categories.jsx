import QuizListItem from './QuizListItem';

const Categories = function () {
  return (
    <div className="!mb-16">
      <h3 className="!mb-[1rem] text-[1.2rem]">Categories</h3>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(0,1fr))] gap-[1.2rem]">
        <QuizListItem />
      </ul>
    </div>
  );
};
export default Categories;
