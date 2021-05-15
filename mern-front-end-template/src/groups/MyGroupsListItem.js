import { Link } from "react-router-dom";

export const MyGroupsListItem = ({ group }) => (
  <div className="list-item">
    <div className="list-item-date">
      <Link to={`/groups/${group.id}`}>
        <h3>{group.name}</h3>
      </Link>
      <p>Owned by: {group.owner.fullName}</p>
      <p>{group.members.length} members</p>
    </div>
  </div>
);
