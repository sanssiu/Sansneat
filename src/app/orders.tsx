import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const initialOrders = [
  {
    id: 'ORD-1024',
    date: 'Sep 2, 2026',
    status: 'In Transit',
    total: '$11.49',
    items: '1x Hamburger, 1x Pepperoni Pizza',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
  },
  {
    id: 'ORD-1019',
    date: 'Aug 28, 2026',
    status: 'Delivered',
    total: '$8.99',
    items: '1x Pepperoni Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
  },
];

export default function OrdersScreen() {
  const [orders] = useState(initialOrders);

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* Header Bar with Back Button */}
      <View style={styles.topBar}>
        <Pressable onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="chevron-back" size={22} color="#111" />
        </Pressable>
        <Text style={styles.headerTitle}>My Orders</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {orders.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="receipt-outline" size={64} color="#D1D5DB" />
            <Text style={styles.emptyText}>No orders found</Text>
          </View>
        ) : (
          <View style={styles.itemsList}>
            {orders.map((order) => (
              <View key={order.id} style={styles.orderCard}>
                <Image source={{ uri: order.image }} style={styles.itemImage} />
                
                <View style={styles.itemInfo}>
                  <View style={styles.itemHeader}>
                    <Text style={styles.orderId}>{order.id}</Text>
                    <Text
                      style={[
                        styles.statusText,
                        order.status === 'Delivered'
                          ? styles.statusDelivered
                          : styles.statusTransit,
                      ]}
                    >
                      {order.status}
                    </Text>
                  </View>
                  
                  <Text style={styles.orderItems} numberOfLines={1}>
                    {order.items}
                  </Text>
                  
                  <View style={styles.itemFooter}>
                    <Text style={styles.orderDate}>{order.date}</Text>
                    <Text style={styles.orderPrice}>{order.total}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  emptyText: {
    fontSize: 16,
    color: '#9CA3AF',
    marginTop: 12,
    fontWeight: '500',
  },
  itemsList: {
    gap: 14,
  },
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  statusTransit: {
    backgroundColor: '#E0F2FE',
    color: '#0284C7',
  },
  statusDelivered: {
    backgroundColor: '#DCFCE7',
    color: '#16A34A',
  },
  orderItems: {
    fontSize: 13,
    color: '#4B5563',
    marginVertical: 4,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  orderDate: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  orderPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#00C2FF',
  },
});