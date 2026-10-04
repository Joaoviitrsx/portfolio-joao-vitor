function Profile() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-32 w-32 overflow-hidden">
        <img
          src="/images/profile.jpg"
          alt="João Vitor"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div>
        <h2 className="text-3xl font-semibold">João Vitor</h2>

        <p className="text-sm opacity-60">Developer Full Stack</p>

        <p className="text-sm opacity-60">São Paulo, BR</p>
      </div>
    </div>
  );
}

export default Profile;
