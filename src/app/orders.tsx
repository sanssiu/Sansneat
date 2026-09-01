import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const mockOrders = [
  {
    id: 'ORD-8921',
    date: '01 Sep, 2026',
    items: 'Hamburger, Pepperoni Pizza',
    total: '600.0',
    status: 'In Progress',
    image: 'https://i.imgur.com/8B1O3gX.png',
  },
  {
    id: 'ORD-7410',
    date: '28 Aug, 2026',
    items: 'Cheese Sandwich',
    total: '200.0',
    status: 'Delivered',
    image: 'https://i.imgur.com/uQ2Yl4M.png',
  },
];

export default function OrdersScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');

  return (
    <View style={styles.webWrapper}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 90 }}>
          
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={22} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>My Orders</Text>
            <View style={{ width: 38 }} />
          </View>

          {/* Toggle Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity 
              style={[styles.tabBtn, activeTab === 'active' && styles.activeTabBtn]}
              onPress={() => setActiveTab('active')}
            >
              <Text style={[styles.tabText, activeTab === 'active' && styles.activeTabText]}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tabBtn, activeTab === 'completed' && styles.activeTabBtn]}
              onPress={() => setActiveTab('completed')}
            >
              <Text style={[styles.tabText, activeTab === 'completed' && styles.activeTabText]}>Completed</Text>
            </TouchableOpacity>
          </View>

          {/* Orders List */}
          <View style={styles.ordersList}>
            {mockOrders
              .filter((o) => (activeTab === 'active' ? o.status === 'In Progress' : o.status === 'Delivered'))
              .map((order) => (
                <View key={order.id} style={styles.orderCard}>
                  <Image source={{ uri: order.image }} style={styles.foodImg} />
                  <View style={styles.orderDetails}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.orderId}>{order.id}</Text>
                      <Text style={[
                        styles.statusBadge, 
                        order.status === 'In Progress' ? styles.statusProgress : styles.statusDone
                      ]}>
                        {order.status}
                      </Text>
                    </View>
                    <Text style={styles.itemsText}>{order.items}</Text>
                    <Text style={styles.dateText}>{order.date}</Text>
                    <Text style={styles.priceText}>Rs. {order.total}</Text>
                  </View>
                </View>
              ))}
          </View>

        </ScrollView>

        {/* Floating Bottom Nav */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.push('/home')}>
            <Ionicons name="home-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/cart')}>
            <Ionicons name="cart-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/profile')}>
            <Ionicons name="person-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  webWrapper: { flex: 1, backgroundColor: '#EAEAEA', alignItems: 'center' },
  container: { 
    flex: 1, 
    backgroundColor: '#FAFAFA', 
    paddingHorizontal: 20, 
    paddingTop: 40,
    width: '100%',
    maxWidth: 480,
    position: 'relative'
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  iconBtn: { padding: 8, backgroundColor: '#fff', borderRadius: 20, elevation: 2 },
  tabContainer: { flexDirection: 'row', backgroundColor: '#E6F0FF', borderRadius: 25, padding: 4, marginBottom: 20 },
  tabBtn: { flex: 1, paddingVertical: 10, borderRadius: 20, alignItems: 'center' },
  activeTabBtn: { backgroundColor: '#0066FF' },
  tabText: { fontWeight: '600', color: '#0066FF' },
  activeTabText: { color: '#fff' },
  ordersList: { marginTop: 5 },
  orderCard: { flexDirection: 'row', backgroundColor: '#fff', padding: 12, borderRadius: 15, marginBottom: 15, elevation: 1, alignItems: 'center' },
  foodImg: { width: 70, height: 70, borderRadius: 10, resizeMode: 'contain', marginRight: 12 },
  orderDetails: { flex: 1 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  orderId: { fontWeight: 'bold', fontSize: 14 },
  statusBadge: { fontSize: 11, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  statusProgress: { backgroundColor: '#FFF3CD', color: '#856404' },
  statusDone: { backgroundColor: '#D4EDDA', color: '#155724' },
  itemsText: { fontSize: 13, color: '#555', marginTop: 4 },
  dateText: { fontSize: 11, color: '#888', marginTop: 2 },
  priceText: { fontSize: 14, fontWeight: 'bold', color: '#0066FF', marginTop: 4 },
  bottomNav: { 
    position: 'absolute', 
    bottom: 20, 
    left: 20, 
    right: 20, 
    height: 55, 
    backgroundColor: '#0066FF', 
    borderRadius: 30, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    elevation: 5 
  },
});