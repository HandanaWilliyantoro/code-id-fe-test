import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import { Contact, ContactList } from '../screens';

const Stack = createNativeStackNavigator();

export default function StackNavigator () {
    return (
        <Stack.Navigator initialRouteName='ContactList'>
            <Stack.Screen name="ContactList" component={ContactList} options={{headerShown: false}} />
            <Stack.Screen
                name="Contact"
                component={Contact}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}