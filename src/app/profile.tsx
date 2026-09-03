import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  const menuItems = [
    { id: '1', title: 'Personal Information', icon: 'person-outline' },
    { id: '2', title: 'My Orders', icon: 'pricetag-outline', route: '/orders' },
    { id: '3', title: 'Addresses', icon: 'location-outline' },
    { id: '4', title: 'Payment Methods', icon: 'card-outline' },
    { id: '5', title: 'Settings', icon: 'settings-outline' },
    { id: '6', title: 'Help & Support', icon: 'help-circle-outline' },
    { id: '7', title: 'Logout', icon: 'log-out-outline', color: '#111' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Back Button */}
      <View style={styles.topBar}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#111" />
        </Pressable>
      </View>

      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/300' }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.userName}>Sophia Williams</Text>
        <Text style={styles.userEmail}>sophia@gmail.com</Text>
      </View>

      {/* Menu List */}
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <Pressable 
            key={item.id} 
            style={styles.menuCard}
            onPress={() => item.route && router.push(item.route as any)}
          >
            <View style={styles.menuLeft}>
              <View style={styles.iconBox}>
                <Ionicons name={item.icon as any} size={20} color={item.color || '#111'} />
              </View>
              <Text style={[styles.menuTitle, item.color && { color: item.color }]}>
                {item.title}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#A0A0A0" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  topBar: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 24,
  },
  avatarContainer: {
    marginBottom: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  userEmail: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 4,
  },
  menuContainer: {
    paddingHorizontal: 20,
    gap: 12,
    paddingBottom: 40,
  },
  menuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1F2937',
  },
});