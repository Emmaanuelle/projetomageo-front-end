import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import Navbar from '../Navbar';
import api from '../../services/api'


function Perfil(props) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const email = localStorage.getItem('email')
        const getItems = async () => {
            try {
                const response = await api.get('/perfil', { headers: { email: email } });
                setItems(response.data)
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getItems()
    }, []);

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#098348' }}>Olá, {items.nome}</h2>
            </Container>
        </>
    )
}

export default Perfil;