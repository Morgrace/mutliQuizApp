function Results() {
  return (
    <div className=" flex  flex-col items-center gap-8 !p-[10rem_2rem_0]">
      <div
        className="bg-(--color-blue) flex aspect-square items-center
        justify-center rounded-[50%] !p-16 outline-8 outline-offset-4 outline-[#407DD8]"
      >
        <h3 className=" text-center text-[2.4rem] text-white">
          Your Score <span className="block text-[3.2rem]">29/30</span>
        </h3>
      </div>

      <h3 className="text-(--color-blue) !m-[2rem_0_8rem] text-center text-[2.4rem] font-medium">
        Congratulations
        <span className="block text-2xl ">
          Great Job, Rumi Aktar! You Did it!
        </span>
      </h3>
      <div className=" !mt-auto grid gap-10 self-stretch text-2xl  text-white">
        <button className="bg-(--color-blue) !p-8">Share</button>
        <button className="bg-(--color-blue) !p-8">Back to Home</button>
      </div>
    </div>
  );
}

export default Results;
