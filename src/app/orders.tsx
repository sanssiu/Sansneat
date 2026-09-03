import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const dummyOrders = [
  { id: '101', date: '02 Sep 2026', total: '$45.00', status: 'Delivered', items: 2 },
  { id: '102', date: '28 Aug 2026', total: '$89.99', status: 'In Transit', items: 4 },
];

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.orderId}>Order #{item.id}</Text>
              <Text style={[styles.status, item.status === 'Delivered' ? styles.delivered : styles.transit]}>
                {item.status}
              </Text>
            </View>
            <Text style={styles.details}>{item.items} items • {item.date}</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.totalLabel}>Total: <Text style={styles.totalAmount}>{item.total}</Text></Text>
              <Pressable style={styles.detailsBtn}>
                <Text style={styles.btnText}>View Details</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 16 },
  orderCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, elevation: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  orderId: { fontSize: 16, fontWeight: 'bold' },
  status: { fontSize: 12, fontWeight: '600', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  delivered: { backgroundColor: '#E8F5E9', color: '#2E7D32' },
  transit: { backgroundColor: '#FFF3E0', color: '#E65100' },
  details: { fontSize: 14, color: '#666', marginBottom: 12 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8, borderTopWidth: 1, borderTopColor: '#f0f0f0' },
  totalLabel: { fontSize: 14, color: '#666' },
  totalAmount: { fontWeight: 'bold', color: '#111' },
  detailsBtn: { backgroundColor: '#007AFF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  btnText: { color: '#fff', fontSize: 12, fontWeight: '600' },
});