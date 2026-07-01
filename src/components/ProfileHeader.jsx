import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileHeader({ profile }) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
      <Image
            source={require("../../assets/profile-icon.png")}
            style={styles.avatar}/>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profile.posts}</Text>
            <Text style={styles.statLabel}>Publicaciones</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profile.followers}</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profile.following}</Text>
            <Text style={styles.statLabel}>Seguidos</Text>
          </View>
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.bio}>{profile.bio}</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar perfil</Text>
      </TouchableOpacity>

      <View style={styles.tabs}>
        <Text style={styles.activeTab}>▦</Text>
        <Text style={styles.inactiveTab}>▷</Text>
      <Image source={{ uri: profile.avatar }} style={styles.avatar} /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 14,
    paddingTop: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dddddd",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: "#eeeeee",
  },
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 16,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111111",
  },
  statLabel: {
    fontSize: 12,
    color: "#222222",
    marginTop: 3,
  },
  bioContainer: {
    marginTop: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111111",
  },
  bio: {
    marginTop: 4,
    fontSize: 14,
    color: "#222222",
    lineHeight: 19,
  },
  editButton: {
    marginTop: 14,
    height: 34,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111111",
  },
  tabs: {
    marginTop: 14,
    height: 42,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  activeTab: {
    fontSize: 22,
    color: "#111111",
  },
  inactiveTab: {
    fontSize: 21,
    color: "#999999",
  },
});