import React from "react";
import logo from "../media/FU_logo.png";
import { getHomePageContent } from "../lib/content";
import "../index.css";
import FeaturedCard from "./FeaturedCard";

interface Card {
  id: number;
  title: string;
  content: string;
  image?: string;
  author: string;
  installs: number;
}

const featuredCards = getHomePageContent().featuredCards.map((card: Card) => (
  <div className="a-featured-card" key={card.id}>
    <FeaturedCard
      id={card.id}
      image={card.image}
      title={card.title}
      content={card.content}
      author={card.author}
      installs={card.installs}
    />
  </div>
));

export default function HomePageContent() {
  return <div className="featured-cards">{featuredCards}</div>;
}
