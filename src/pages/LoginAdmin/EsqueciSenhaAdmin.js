import React , { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import {login} from "../../services/auth";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactLoading from 'react-loading';
import logo from '../../images/icons/shape.svg'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FFFFFF",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color:"white",
    background:"#FCBC29",
    fontSize:"17px",
  },
  fonte2:{
    fontFamily:"'Poppins', sans-serif;",
    fontSize:"17px",
    color:"#1CB0F6",
    fontWeight:"Bold",
  
  }, tipografia:{
    fontSize:"30px",
    fontWeight:"Bold",
    color:"#6A6A6A",
  },
  imagem:{
    height:"70px",
    width:"70px"
  },
}));

export default function EsqueceuSenhaUsuario() {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [carregar,setCarregando] = useState(false);
  const history = useHistory();
  
  async function esqueceuSenhaUsuario(e) {
    
    e.preventDefault();
    
    const data = { email};
    try {
          setCarregando(true);
          const resposta = await api.post("/passwordsAdmin", data);
          alert("Email Enviado com Sucesso");
          // history.push("/home");
          history.push("/");
      } catch (error) {
          //console.log(error.response.data.message.error)
          console.log(error.response.data)
          //setError(error.response.data.message.error) 
      }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      {/*   <Avatar className={classes.avatar}>
        </Avatar> */}
        <img src={logo} alt='Logo Do Projeto Mageo'  className={classes.imagem}/>
        <Typography component="h1" variant="h5" className={classes.tipografia} >
        Recuperação de Senha
        </Typography>                   

        <form className={classes.form} onSubmit={esqueceuSenhaUsuario} noValidate>            
        {carregar && !error?<ReactLoading className='loading' type={"bubbles"} color={'#36BD8C'} height={'20%'} width={'20%'} />:<></>}
            {error && <p className='error'>{error}</p>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Digite o seu Email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
             Enviar
          </Button>
          <Grid container justify="center" alignItems="center">
            <Link to='/loginAdmin' className={classes.fonte2}>
              Voltar para Login
            </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
}