import "./styles.css";
import axios from "axios";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import { UserProfile } from "./types/userProfile";
import { useState } from "react";
import { useAllUsers } from "./hooks/useAllUsers";

const user = {
  id: 1,
  name: "paya",
  email: "123@gmail.com",
  address: "千葉県千葉市中央区"
};

export default function App() {
  //useAllUsersは関数　関数を実行し、戻り値を受け取っている
  //usePfofiles,loading.errorはstateとして使えることができ、
  //別のコンポーネントで利用しても競合しない（それぞれが独立している）
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗</p>
      ) : loading ? (
        <p>ロード中</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
