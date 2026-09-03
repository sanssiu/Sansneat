import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const dummyWishlist = [
  { id: '1', name: 'Sans Neat T-Shirt', price: '$25.00' },
  { id: '2', name: 'Minimalist Mug', price: '$15.00' },
];

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyWishlist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <View style={styles.actions}>
              <Pressable style={styles.cartBtn}>
                <Text style={styles.cartText}>Add to Cart</Text>
              </Pressable>
              <Pressable style={styles.removeBtn}>
                <Text style={styles.removeText}>✕</Text>
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
  itemCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: '600', color: '#111' },
  itemPrice: { fontSize: 14, color: '#007AFF', marginTop: 4, fontWeight: 'bold' },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  cartBtn: { backgroundColor: '#111', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 6 },
  cartText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  removeBtn: { padding: 8 },
  removeText: { color: '#999', fontSize: 16, fontWeight: 'bold' },
});