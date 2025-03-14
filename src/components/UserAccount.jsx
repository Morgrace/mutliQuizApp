const user = {
  id: 1124,
  name: 'Morgrace Precious',
  image: 'https://i.pravatar.cc/48?u=1124',
};
function UserAccount() {
  return (
    <div className="flex items-center gap-1 text-[1.2rem] ">
      <img
        className="w-[4rem] rounded-[50%]"
        src={`${user['image']}`}
        alt="profile pix"
      />
      <div className="grid">
        <span className="font-semibold">{user['name']}</span>
        <span>ID-{user['id']}</span>
      </div>
    </div>
  );
}

export default UserAccount;
