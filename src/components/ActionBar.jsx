import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ActionBar({ liked, onLikePress, onCommentPress, onSharePress }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftActions}>
        <TouchableOpacity onPress={onLikePress} style={styles.actionButton}>
          <Text style={[styles.icon, liked && styles.likedIcon]}>
            {liked ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onCommentPress} style={styles.actionButton}>
          <Text style={styles.icon}>💬</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSharePress} style={styles.actionButton}>
          <Text style={styles.icon}>↗</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.saveIcon}>▱</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    marginRight: 16,
  },
  icon: {
    fontSize: 25,
    color: "#111111",
  },
  likedIcon: {
    color: "#ed4956",
  },
  saveIcon: {
    fontSize: 25,
    color: "#111111",
    transform: [{ rotate: "180deg" }],
  },
});