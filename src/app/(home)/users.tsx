import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { supabase } from "../../lib/superbase";
import { useAuth } from "../../providers/AuthProvider";
import Userlistitem from "../../components/Userlistitem";
export default function UsersScreen() {
    const [users,setUsers] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        const fetchUsers = async () => {
            let { data: profiles, error} = await supabase
                .from('profiles')
                .select('*')
                .neq('id', user.id);

            setUsers(profiles);
        }
        fetchUsers();
    }, []);

    return (
        <FlatList
            data={users}
            contentContainerStyle={{gap:5}}
            renderItem={({item}) =>
                <Userlistitem user={item}/>
            }
        />
    );
}