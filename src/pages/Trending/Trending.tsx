import React from "react";
import { TrendingCard } from "@components/TrendingCard/TrendingCard";
import TrendingDisplayCard from "@components/TrendingDisplayCard/TrendingDisplayCard";

export const Trending = () => {
  return (
    <div>
      Trending Events
      <TrendingCard />
      <TrendingDisplayCard />
    </div>
  );
};
