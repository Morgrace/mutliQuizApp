function DiamondToken() {
  return (
    <div className="flex items-center gap-1 justify-self-end rounded-md bg-[#4EA4FF] !p-[.1rem_1rem]  font-semibold">
      <svg className="h-6 w-6">
        <use href="/img/icomoon/sprite.svg#icon-diamond"></use>
      </svg>
      <span>160</span>
    </div>
  );
}

export default DiamondToken;
