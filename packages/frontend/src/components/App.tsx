import { useQuery } from "@tanstack/react-query";

const App = () => {
  const testData = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3030/test-data");
      return response.json();
    },
  });

  return (
    <div>
      <h1>SO playground</h1>
      {testData.isLoading ? (
        <p>Loading...</p>
      ) : testData.isError ? (
        <p>Fetching data error</p>
      ) : (
        <div>{JSON.stringify(testData.data, null, 2)}</div>
      )}
    </div>
  );
};

export default App;
