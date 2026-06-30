import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ActionBar from "../components/ActionBar";

export default function PostDetailScreen({ route }) {
  const { post } = route.params;

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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={{ uri: post.avatar }} style={styles.avatar} />

          <View style={styles.userInfo}>
            <Text style={styles.username}>{post.username}</Text>
            <Text style={styles.location}>{post.location}</Text>
          </View>
        </View>

        <Image source={{ uri: post.imageUrl }} style={styles.detailImage} />

        <ActionBar liked={liked} onLikePress={handleLike} />

        <View style={styles.content}>
          <Text style={styles.likes}>{likes} Me gusta</Text>

          <Text style={styles.caption}>
            <Text style={styles.username}>{post.username} </Text>
            {post.caption}
          </Text>

          <View style={styles.tagsContainer}>
            <Text style={styles.sectionTitle}>Etiquetas</Text>

            <View style={styles.tagsRow}>
              <Text style={styles.tag}>#cats</Text>
              <Text style={styles.tag}>#expo</Text>
              <Text style={styles.tag}>#reactnative</Text>
            </View>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.sectionTitle}>Información adicional</Text>
            <Text style={styles.infoText}>ID de imagen: {post.id}</Text>
            <Text style={styles.infoText}>
              Imagen cargada desde una API externa, no hardcodeada.
            </Text>
          </View>

          <View style={styles.commentsContainer}>
            <Text style={styles.sectionTitle}>Comentarios</Text>

            <View style={styles.comment}>
              <Text style={styles.commentText}>
                <Text style={styles.username}>mica.dev </Text>
                Qué buena publicación.
              </Text>
            </View>

            <View style={styles.comment}>
              <Text style={styles.commentText}>
                <Text style={styles.username}>expo.go </Text>
                Se nota que está armado con componentes.
              </Text>
            </View>

            <View style={styles.comment}>
              <Text style={styles.commentText}>
                <Text style={styles.username}>catlover </Text>
                El gato salió perfecto.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.likeButton, liked && styles.likeButtonActive]}
            onPress={handleLike}
          >
            <Text
              style={[
                styles.likeButtonText,
                liked && styles.likeButtonTextActive,
              ]}
            >
              {liked ? "Te gusta" : "Me gusta"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    height: 60,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eeeeee",
  },
  userInfo: {
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
  detailImage: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#eeeeee",
  },
  content: {
    paddingHorizontal: 14,
    paddingBottom: 30,
  },
  likes: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111111",
    marginBottom: 8,
  },
  caption: {
    fontSize: 14,
    color: "#111111",
    lineHeight: 20,
  },
  tagsContainer: {
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 8,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#eef6ff",
    color: "#0095f6",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 13,
    fontWeight: "600",
  },
  infoBox: {
    marginTop: 14,
    padding: 12,
    backgroundColor: "#fafafa",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eeeeee",
  },
  infoText: {
    fontSize: 13,
    color: "#444444",
    lineHeight: 19,
  },
  commentsContainer: {
    marginTop: 18,
  },
  comment: {
    marginBottom: 10,
  },
  commentText: {
    fontSize: 14,
    color: "#111111",
    lineHeight: 20,
  },
  likeButton: {
    marginTop: 18,
    height: 42,
    borderRadius: 8,
    backgroundColor: "#efefef",
    justifyContent: "center",
    alignItems: "center",
  },
  likeButtonActive: {
    backgroundColor: "#ed4956",
  },
  likeButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111111",
  },
  likeButtonTextActive: {
    color: "#ffffff",
  },
});