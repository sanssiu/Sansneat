import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const categories = ['All', 'Pizza', 'Burger', 'Sandwich'];

export default function HomeScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <View style={styles.mainWrapper}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
          
          {/* Header */}
          <View style={styles.header}>
            <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="notifications-outline" size={22} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Title Section (Left Aligned) */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose</Text>
            <Text style={styles.subTitle}>Your Favorite <Text style={{ color: '#00BFFF' }}>Food</Text></Text>
          </View>

          {/* Search Bar */}
          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
              <TextInput placeholder="Search" style={{ flex: 1 }} />
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name="options-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Categories */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
            {categories.map((cat, index) => (
              <TouchableOpacity 
                key={index} 
                onPress={() => setSelectedCategory(cat)}
                style={[styles.categoryBtn, selectedCategory === cat && styles.categoryBtnActive]}
              >
                <Text style={[styles.categoryText, selectedCategory === cat && styles.categoryTextActive]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Popular Food Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Food</Text>
            <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.card}>
              <TouchableOpacity style={styles.favBtn}>
                <Ionicons name="heart-outline" size={18} color="#00BFFF" />
              </TouchableOpacity>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' }} style={styles.foodImg} />
              <Text style={styles.foodTitle}>Hamburger</Text>
              <Text style={styles.foodCat}>Burger</Text>
              <View style={styles.cardBottom}>
                <Text style={styles.price}>$2.50</Text>
                <TouchableOpacity style={styles.addBtn}>
                  <Ionicons name="add" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </ScrollView>

        </ScrollView>

        {/* Floating Bottom Nav */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => router.push('/home')}>
            <Ionicons name="home" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="heart-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => router.push('/cart')}>
            <Ionicons name="cart-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => router.push('/profile')}>
            <Ionicons name="person-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: { 
    flex: 1, 
    backgroundColor: '#FAFAFA',
    alignItems: 'center'
  },
  container: { 
    flex: 1, 
    paddingHorizontal: 20, 
    paddingTop: 40,
    width: '100%',
    maxWidth: 600,
    position: 'relative'
  },
  header: { 
    flexDirection: 'row', 
    justify: 'space-between', 
    alignItems: 'center',
    marginBottom: 10
  },
  avatar: { 
    width: 45, 
    height: 45, 
    borderRadius: 25,
    marginLeft: 0 // প্রফাইল ছবি বামের সাথে সারিবদ্ধ করা হয়েছে
  },
  iconBtn: { padding: 8, backgroundColor: '#fff', borderRadius: 20, elevation: 2 },
  
  titleContainer: {
    alignItems: 'flex-start', // বামে সম্পূর্ণ সারিবদ্ধ করার জন্য
    marginLeft: 0,
    paddingLeft: 0,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 15,
    textAlign: 'left'
  },
  subTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 15,
    textAlign: 'left'
  },
  
  searchRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  searchBox: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 15, height: 45, borderRadius: 25, elevation: 1 },
  filterBtn: { width: 45, height: 45, backgroundColor: '#00BFFF', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
  categoryContainer: { marginBottom: 20 },
  categoryBtn: { paddingHorizontal: 22, paddingVertical: 10, borderRadius: 20, backgroundColor: '#fff', marginRight: 10, elevation: 1 },
  categoryBtnActive: { backgroundColor: '#00BFFF' },
  categoryText: { color: '#333', fontWeight: '600' },
  categoryTextActive: { color: '#fff' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  seeAll: { color: '#00BFFF', fontWeight: '600' },
  card: { width: 160, backgroundColor: '#fff', borderRadius: 15, padding: 12, marginRight: 15, elevation: 2, marginBottom: 10 },
  favBtn: { alignSelf: 'flex-end' },
  foodImg: { width: 100, height: 80, borderRadius: 10, resizeMode: 'cover', alignSelf: 'center', marginVertical: 5 },
  foodTitle: { fontWeight: 'bold', fontSize: 14 },
  foodCat: { color: '#888', fontSize: 12, marginBottom: 8 },
  cardBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontWeight: 'bold', fontSize: 13 },
  addBtn: { backgroundColor: '#00BFFF', padding: 4, borderRadius: 6 },
  bottomNav: { 
    position: 'absolute', 
    bottom: 20, 
    left: 20, 
    right: 20, 
    height: 60, 
    backgroundColor: '#00BFFF', 
    borderRadius: 30, 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 10,
    elevation: 5 
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justify: 'center'
  }
});