export function SignForm({ label, type, placholder }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placholder} />
    </div>
  );
}
