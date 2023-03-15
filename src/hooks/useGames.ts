import { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
    id: number;
    name: string;
}
  
  interface GetAllGames {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();

      apiClient
        .get<GetAllGames>("/games", {signal: controller.signal})
        .then((response) => setGames(response.data.results))
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message)
        });

        return () => controller.abort();
    }, []);

    return {games, error};
}

export default useGames;