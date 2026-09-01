import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'orders' | 'chat' | 'page'>('home');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Main Header */}
      <View style={styles.content}>
        <Text style={styles.brandTitle}>Sans Neat</Text>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {/* Home Tab */}
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
          onPress={() => setActiveTab('home')}
        >
          <View style={styles.homeIconContainer}>
            <View
              style={[
                styles.roof,
                { borderBottomColor: activeTab === 'home' ? '#48C0FF' : '#B0E2FF' },
              ]}
            />
            <View
              style={[
                styles.base,
                { backgroundColor: activeTab === 'home' ? '#48C0FF' : '#B0E2FF' },
              ]}
            />
          </View>
          <Text
            style={[
              styles.navText,
              { color: activeTab === 'home' ? '#48C0FF' : '#B0E2FF' },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        {/* Orders Tab */}
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
          onPress={() => setActiveTab('orders')}
        >
          <View
            style={[
              styles.squareIcon,
              { borderColor: activeTab === 'orders' ? '#48C0FF' : '#B0E2FF' },
            ]}
          >
            <View
              style={[
                styles.line,
                { backgroundColor: activeTab === 'orders' ? '#48C0FF' : '#B0E2FF' },
              ]}
            />
            <View
              style={[
                styles.line,
                { backgroundColor: activeTab === 'orders' ? '#48C0FF' : '#B0E2FF' },
              ]}
            />
          </View>
          <Text
            style={[
              styles.navText,
              { color: activeTab === 'orders' ? '#48C0FF' : '#B0E2FF' },
            ]}
          >
            Orders
          </Text>
        </TouchableOpacity>

        {/* Chat Tab */}
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
          onPress={() => setActiveTab('chat')}
        >
          <View
            style={[
              styles.chatIcon,
              { backgroundColor: activeTab === 'chat' ? '#48C0FF' : '#B0E2FF' },
            ]}
          />
          <Text
            style={[
              styles.navText,
              { color: activeTab === 'chat' ? '#48C0FF' : '#B0E2FF' },
            ]}
          >
            Chat
          </Text>
        </TouchableOpacity>

        {/* Page Tab */}
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
          onPress={() => setActiveTab('page')}
        >
          <View
            style={[
              styles.circleIcon,
              { backgroundColor: activeTab === 'page' ? '#48C0FF' : '#87CEFA' },
            ]}
          />
          <Text
            style={[
              styles.navText,
              { color: activeTab === 'page' ? '#48C0FF' : '#87CEFA' },
            ]}
          >
            Page
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
  },
  brandTitle: {
    fontSize: 56,
    color: '#3BB9FF',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  homeIconContainer: {
    alignItems: 'center',
    marginBottom: 4,
  },
  roof: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 14,
    borderRightWidth: 14,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  base: {
    width: 20,
    height: 14,
    marginTop: -1,
  },
  squareIcon: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'space-around',
    padding: 4,
    marginBottom: 2,
  },
  line: {
    height: 2,
    width: '100%',
    borderRadius: 1,
  },
  chatIcon: {
    width: 26,
    height: 22,
    borderRadius: 8,
    marginBottom: 6,
  },
  circleIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginBottom: 2,
  },
  navText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 2,
  },
});