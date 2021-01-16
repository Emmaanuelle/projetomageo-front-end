import React, { useState, useEffect } from 'react';
import { Container, Card, Grid, CardActionArea, CardContent, Typography, CardActions,Button } from '@material-ui/core';
import Navbar from '../Navbar';
import api from '../../services/api';
import CustomizedDialogs from "./Dialog";
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, Select, InputLabel,} from "@material-ui/core";

/* const useStyles = makeStyles((theme) => ({
    tamanhocard: {
        width: '100%'
    }
}))
 */





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



    const datanascimento = new Date(items.dataNascimento);
    console.log(datanascimento)

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#098348' }}>Olá, {items.nome}</h2>
            
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dados do usuario
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">{items.nome} {items.sobrenome}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">{items.email}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">{datanascimento.toDateString()}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">{items.ano_escolar}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">{items.escola}
                                </Typography>
                                

                            </CardContent>
                            
                        </CardActionArea>
                        <CardActions>
                        <CustomizedDialogs/>    
                        </CardActions>

                    </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Ranking
                           </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card >
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    Pontuação
                           </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Conquistas
                           </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </>

    )
}

export default Perfil;