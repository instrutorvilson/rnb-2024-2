import { Stack, Button, Switch, TextInput } from '@react-native-material/core'
import { useState } from 'react';

export default function Buttons() {
    const [loading, setLoading] = useState(true)
    return(
        <Stack>
            <Button title="Clique aqui" />
            <Button style={{ marginVertical: 10 }} title="Clique aqui" disableElevation />
            <Button title="clique aqui" variant='outlined' />
            <Button title="clique aqui" variant='text' />
            <Button title="Clique Aqui"
                color="red"
                tintColor='yellow'
                uppercase={false}
            />
            <Stack style={{ marginVertical: 10 }}>
                <Switch value={loading} onValueChange={setLoading} />
                <Button
                    title="Load"
                    loading={loading}
                />
            </Stack>
            <TextInput />
        </Stack >
    )
}