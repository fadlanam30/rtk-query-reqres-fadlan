import React from 'react'
import { Avatar, Card } from 'react-native-paper'

const ItemUser = ({ user }) => {
    return (
        <Card
            mode="elevated"
            style={{
                borderRadius: 16,
                margin: 12,
            }}
        >
            <Card.Title
                title={user.first_name ?? ""}
                titleStyle={{
                    fontWeight: 'bold',
                    fontSize: 18,
                }}
                subtitle={user.last_name ?? ""}
                subtitleVariant="bodyMedium"
                left={(props) =>
                    <Avatar.Image {...props}
                        size={46}
                        source={{ uri: user.avatar }}
                    />
                }
            />
        </Card>
    )
}

export default ItemUser