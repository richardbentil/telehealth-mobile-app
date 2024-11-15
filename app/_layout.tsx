import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="login" options={{headerShown: false}} />
        <Stack.Screen name="create-account" options={{headerShown: false}} />
        <Stack.Screen name="forgot-password" options={{headerShown: false}} />
        <Stack.Screen name="reset-password" options={{headerShown: false}} />
        <Stack.Screen name="book-appointment" options={{headerTitle: "Book appointment"}} />
        <Stack.Screen name="doctors" options={{headerTitle: "All Doctors"}} />
        <Stack.Screen name="book-consultation" options={{headerTitle: "Book consultation"}} />
        <Stack.Screen name="notifications" options={{headerTitle: "Notifications"}} />
        <Stack.Screen name="profile" options={{headerTitle: "Profile"}} />
        <Stack.Screen name="account-settings" options={{headerTitle: "Account"}} />
        <Stack.Screen name="payment-settings" options={{headerTitle: "Payments"}} />
        <Stack.Screen name="app-settings" options={{headerTitle: "App settings"}} />
        <Stack.Screen name="appointment-details[id]" options={{headerTitle: "Appointment details"}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
