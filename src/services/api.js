import axios from "axios";
import { captions, locations, users } from "../data/mockData";

const API_URL = "https://api.thecatapi.com/v1/images/search";

export async function getCatPosts() {
  const response = await axios.get(API_URL, {
    params: {
      limit: 12,
      size: "med",
      mime_types: "jpg,png",
      format: "json",
      order: "RANDOM",
    },
  });

  const posts = [];

  for (let i = 0; i < response.data.length; i++) {
    const cat = response.data[i];

    const user = users[i % users.length];
    const location = locations[i % locations.length];
    const caption = captions[i % captions.length];

    posts.push({
      id: cat.id,
      imageUrl: cat.url,
      width: cat.width,
      height: cat.height,
      username: user.username,
      avatar: user.avatar,
      location,
      caption,
      likes: 120 + i * 37,
      comments: [
        {
          id: "c1",
          username: "mica.dev",
          text: "Qué buena foto 😍",
        },
        {
          id: "c2",
          username: "react.native",
          text: "Este post quedó tremendo.",
        },
        {
          id: "c3",
          username: "expo.go",
          text: "Amo esa imagen del gato.",
        },
      ],
      tags: ["#cats", "#mobile", "#reactnative"],
    });
  }

  return posts;
}