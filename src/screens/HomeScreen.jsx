import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import PostItem from "../components/PostItem";
import { getCatPosts } from "../services/api";

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      setError("");
      setLoading(true);

      const apiPosts = await getCatPosts();
      setPosts(apiPosts);
    } catch (err) {
      setError("No se pudieron cargar las publicaciones.");
    } finally {
      setLoading(false);
    }
  }

  async function refreshPosts() {
    try {
      setRefreshing(true);
      const apiPosts = await getCatPosts();
      setPosts(apiPosts);
    } catch (err) {
      setError("No se pudieron actualizar las publicaciones.");
    } finally {
      setRefreshing(false);
    }
  }

  function goToDetail(post) {
    navigation.navigate("PostDetail", { post });
  }

  function goToProfile() {
    navigation.navigate("Profile", { posts });
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="#111111" />
        <Text style={styles.loadingText}>Cargando feed...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <Text style={styles.logo}>Instagram</Text>

        <View style={styles.topActions}>
          <TouchableOpacity style={styles.topIcon}>
            <Text style={styles.topIconText}>♡</Text>
          </TouchableOpacity>

    <TouchableOpacity onPress={goToProfile}>
      <Image
        source={require("../../assets/profile-icon.png")}
        style={styles.profileIconImage}
      />
    </TouchableOpacity>
        </View>
      </View>

      {error !== "" ? (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadPosts}>
            <Text style={styles.retryText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostItem
            post={item}
            onPress={() => goToDetail(item)}
            onProfilePress={goToProfile}
          />
        )}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshPosts} />
        }
        ListHeaderComponent={
          <View style={styles.storiesContainer}>
            <View style={styles.storyCircle}>
              <Text style={styles.storyPlus}>+</Text>
            </View>
            <Text style={styles.storyText}>Tu historia</Text>
          </View>
        }
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
    fontSize: 14,
    color: "#555555",
  },
  topBar: {
    height: 52,
    paddingHorizontal: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dddddd",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111111",
    letterSpacing: -1,
  },
  topActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  topIcon: {
    marginLeft: 18,
  },
  topIconText: {
    fontSize: 26,
    color: "#111111",
  },
  storiesContainer: {
    height: 92,
    paddingHorizontal: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dddddd",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  storyCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 2,
    borderColor: "#ed4956",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  storyPlus: {
    fontSize: 30,
    color: "#111111",
    marginTop: -2,
  },
  storyText: {
    fontSize: 12,
    marginTop: 4,
    color: "#111111",
  },
  errorBox: {
    padding: 12,
    backgroundColor: "#fff2f2",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ffd0d0",
  },
  errorText: {
    color: "#c70000",
    fontSize: 14,
  },
  retryButton: {
    marginTop: 8,
  },
  retryText: {
    color: "#0095f6",
    fontWeight: "700",
  },
  profileIconImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 18,
  },

});