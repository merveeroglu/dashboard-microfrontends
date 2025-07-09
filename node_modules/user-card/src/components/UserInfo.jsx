import { Avatar, Name, Info } from "./StyledComponents";

export default function UserInfo({ user }) {
  return (
    <>
      <Avatar src={user.avatar} alt="User Avatar" />
      <Name>{user.name}</Name>
      {user.contact.map((item, i) => (
        <Info key={i}>
          <strong>{item.type}:</strong> {item.value}
        </Info>
      ))}
    </>
  );
}
