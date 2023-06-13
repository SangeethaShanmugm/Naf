export function Welcome({ name, pic }) {
  return (
    <div>
      <img className="profile-pic" src={pic} />
      <h1>{name} </h1>
    </div>
  );
}
