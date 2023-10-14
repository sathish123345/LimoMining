
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';

const InitialLoad = () => {
    const [fontsLoaded] = useFonts({
          Inter_400Regular,
          Inter_500Medium,
          Inter_600SemiBold,
          Inter_700Bold,
          Inter_900Black,
        })
        

         useCallback(async () => {
          if (fontsLoaded) {
            await SplashScreen.hideAsync();
          }
        }, [fontsLoaded]);

return fontsLoaded
}

export default InitialLoad