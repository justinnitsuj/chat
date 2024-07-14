import { Redirect } from 'expo-router';

export default function HomeScreen() {
    return <Redirect href={'/(auth)/login'} />;
    

    //   return (
//     <View style={styles.container}>
//       <Text>Hello World</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
}
