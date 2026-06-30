import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ActionBar from "./ActionBar";

export default function PostItem({ post, onPress, onProfilePress }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  function handleLike() {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onProfilePress}>
          <Image source={{ uri: post.avatar }} style={styles.avatar} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.userInfo} onPress={onProfilePress}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.location}>{post.location}</Text>
        </TouchableOpacity>

        <Text style={styles.more}>•••</Text>
      </View>

      <Pressable onPress={onPress}>
        <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
      </Pressable>

      <ActionBar liked={liked} onLikePress={handleLike} />

      <View style={styles.content}>
        <Text style={styles.likes}>{likes} Me gusta</Text>

        <Text style={styles.caption}>
          <Text style={styles.username}>{post.username} </Text>
          {post.caption}
        </Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={styles.commentsLink}>Ver comentarios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    marginBottom: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dddddd",
  },
  header: {
    height: 58,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#eeeeee",
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111111",
  },
  location: {
    fontSize: 12,
    color: "#555555",
    marginTop: 2,
  },
  more: {
    fontSize: 18,
    color: "#111111",
    letterSpacing: 1,
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#eeeeee",
  },
  content: {
    paddingHorizontal: 12,
    paddingBottom: 14,
  },
  likes: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111111",
    marginBottom: 6,
  },
  caption: {
    fontSize: 14,
    color: "#111111",
    lineHeight: 19,
  },
  commentsLink: {
    marginTop: 6,
    fontSize: 14,
    color: "#777777",
  },
});
