import { FC } from "react";
import { useQuery } from "react-query";
import { Navigate, useParams, useNavigate } from "react-router-dom";

import { useMe, useUsersUpdateOne } from "../hooks/users";

const FamilySetPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: me } = useQuery("me", () => useMe().then((res) => res.data));

  if (!me) return <></>;
  if (me.driver) return <Navigate to="/" />;

  console.log(me);
  const data = {
    family: me.family.id,
  }

  useUsersUpdateOne(id, data).then((res) => {
    navigate('/list', { state: { id: me.family.id } });
  });

  return <></>;
};

export default FamilySetPage;