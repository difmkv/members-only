import { Routes } from "./Routes";
import { useUser } from "./auth";

const App = () => {
  const { isLoading, user } = useUser();
  return (
    <div>
      <Routes isLoading={isLoading} user={user} />
    </div>
  );
};

export default App;
