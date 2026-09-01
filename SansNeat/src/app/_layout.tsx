import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // এটি উপরের Expo Starter হেডারটি পুরোপুরি লুকিয়ে ফেলবে
      }}
    />
  );
}