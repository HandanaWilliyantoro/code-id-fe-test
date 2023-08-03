import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import { EditContact, ContactList, CreateContact } from '../screens';

const Stack = createNativeStackNavigator();

export default function StackNavigator () {
    return (
        <Stack.Navigator initialRouteName='ContactList'>
            <Stack.Screen name="ContactList" component={ContactList} options={{headerShown: false}} />
            <Stack.Screen name="CreateContact" component={CreateContact} options={{headerShown: false}} />
            <Stack.Screen
                name="EditContact"
                component={EditContact}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}