import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ProfileHeader from "../components/ProfileHeader";
import { profileInfo } from "../data/mockData";
import { getCatPosts } from "../services/api";

const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / 3;

export default function ProfileScreen({ route }) {
  const postsFromFeed = route.params?.posts;

  const [posts, setPosts] = useState(postsFromFeed || []);
  const [loading, setLoading] = useState(!postsFromFeed);

  useEffect(() => {
    if (!postsFromFeed) {
      loadProfilePosts();
    }
  }, []);

  async function loadProfilePosts() {
    try {
      const apiPosts = await getCatPosts();
      setPosts(apiPosts);
    } catch (err) {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="#111111" />
        <Text style={styles.loadingText}>Cargando perfil...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ProfileHeader profile={profileInfo} />}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.gridImage} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  center: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: "#555555",
    fontSize: 14,
  },
  gridItem: {
    width: imageSize,
    height: imageSize,
    padding: 1,
    backgroundColor: "#ffffff",
  },
  gridImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#eeeeee",
  },
});
