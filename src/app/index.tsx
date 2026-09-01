import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Onboarding() {
  const [pageIndex, setPageIndex] = useState(0);
  const router = useRouter();

  const pages = [
    {
      heading: 'Order, Taste,',
      subHeading: 'Sans Neat!',
      buttonText: 'Next',
    },
    {
      heading: 'Hungry?',
      subHeading: 'Order Now!',
      buttonText: "Let's start",
    },
  ];

  const handlePress = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
    } else {
      // Let's start এ ক্লিক করলে অ্যাপের মূল Home স্ক্রিনে নিয়ে যাবে
      router.push('/home'); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#87CEFA" />

      {/* Center Image & Dynamic Text Section */}
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://i.postimg.cc/MG7tTjQj/Image-removebg-preview-(1).png' }}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.textContainer}>
          <Text style={styles.headingText}>{pages[pageIndex].heading}</Text>
          <Text style={styles.subHeadingText}>{pages[pageIndex].subHeading}</Text>
        </View>
      </View>

      {/* Bottom Button & Slider Dots */}
      <View style={styles.footer}>
        <View style={styles.pagination}>
          {pages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                pageIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>{pages[pageIndex].buttonText}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subHeadingText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 24,
    backgroundColor: '#FFFFFF',
  },
  inactiveDot: {
    width: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#1E90FF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});