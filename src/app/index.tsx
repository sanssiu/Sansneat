import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const categories = ['All', 'Pizza', 'Burger', 'Sandwich'];

const foodItems = [
  {
    id: '1',
    name: 'Hamburger',
    category: 'Burger',
    price: '$2.50',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    price: '$8.99',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
  },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('home');

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />
          <Pressable style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={20} color="#111" />
          </Pressable>
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleRegular}>Choose</Text>
          <Text style={styles.titleBold}>
            Your Favorite <Text style={styles.titleHighlight}>Food</Text>
          </Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#A0A0A0" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#A0A0A0"
              style={styles.searchInput}
            />
          </View>
          <Pressable style={styles.filterBtn}>
            <Ionicons name="options-outline" size={20} color="#FFF" />
          </Pressable>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <Pressable
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                style={[
                  styles.categoryChip,
                  isSelected && styles.categoryChipActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    isSelected && styles.categoryTextActive,
                  ]}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Popular Food Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Food</Text>
          <Pressable>
            <Text style={styles.seeAllText}>See All</Text>
          </Pressable>
        </View>

        {/* Food List */}
        <View style={styles.foodGrid}>
          {foodItems.map((item) => (
            <View key={item.id} style={styles.foodCard}>
              <Pressable style={styles.cardHeartBtn}>
                <Ionicons name="heart-outline" size={18} color="#00C2FF" />
              </Pressable>
              <Image source={{ uri: item.image }} style={styles.foodImage} />
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodCategory}>{item.category}</Text>

              <View style={styles.cardFooter}>
                <Text style={styles.foodPrice}>{item.price}</Text>
                <Pressable style={styles.addBtn}>
                  <Ionicons name="add" size={18} color="#FFF" />
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating Custom Bottom Bar */}
      <View style={styles.bottomBarContainer}>
        <View style={styles.bottomBar}>
          {/* Home Icon */}
          <Pressable
            onPress={() => setActiveTab('home')}
            style={styles.tabItem}
          >
            <Ionicons
              name={activeTab === 'home' ? 'home' : 'home-outline'}
              size={22}
              color="#FFF"
            />
          </Pressable>

          {/* Love / Heart Icon -> Opens /orders */}
          <Pressable
            onPress={() => {
              setActiveTab('orders');
              router.push('/orders');
            }}
            style={styles.tabItem}
          >
            <Ionicons
              name={activeTab === 'orders' ? 'heart' : 'heart-outline'}
              size={22}
              color="#FFF"
            />
          </Pressable>

          {/* Cart Icon -> Opens /cart */}
          <Pressable
            onPress={() => {
              setActiveTab('cart');
              router.push('/cart');
            }}
            style={styles.tabItem}
          >
            <Ionicons
              name={activeTab === 'cart' ? 'cart' : 'cart-outline'}
              size={22}
              color="#FFF"
            />
          </Pressable>

          {/* Profile Icon -> Opens /profile */}
          <Pressable
            onPress={() => {
              setActiveTab('profile');
              router.push('/profile');
            }}
            style={styles.tabItem}
          >
            <Ionicons
              name={activeTab === 'profile' ? 'person' : 'person-outline'}
              size={22}
              color="#FFF"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 110,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  notificationBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleRegular: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  titleBold: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  titleHighlight: {
    color: '#00C2FF',
  },
  searchSection: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 46,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#111',
  },
  filterBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#00C2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryScroll: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 10,
  },
  categoryChipActive: {
    backgroundColor: '#00C2FF',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  seeAllText: {
    fontSize: 13,
    color: '#00C2FF',
    fontWeight: '600',
  },
  foodGrid: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  foodCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  cardHeartBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  foodImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  foodName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  foodCategory: {
    fontSize: 11,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  addBtn: {
    width: 26,
    height: 26,
    borderRadius: 6,
    backgroundColor: '#00C2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: '#00C2FF',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    maxWidth: 340,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#00C2FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  tabItem: {
    padding: 6,
  },
});