import apiClient from "@/Services/api-client";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Games {
  id: number;
  name: string;
}
interface FetchGamesRespoonse {
  count: number;
  next: string;
  previous: string;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesRespoonse>("/xgames")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
