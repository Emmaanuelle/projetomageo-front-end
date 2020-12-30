import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactLoading from 'react-loading';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#509312",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Cadastro() {
  const classes = useStyles();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState("");
  const [error, setError] = useState("");
  const [carregar,setCarregando] = useState(false);

  const history = useHistory();


  async function cadastrar(e) {

    e.preventDefault();

    const data = { nome, sobrenome,email, senha, idade };
    try {
      setCarregando(true);
      await api.post("/user", data)
      alert("Cadastro Realizado com Sucesso")
      history.push("/");
    } catch (error) {
      console.log(error.response.status);
      if(error.response.status === 400){
        setError("Email Já cadastrado")
      }else{
        setError("Houve Problema ao realizar o cadastro")
      }
    }

  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        {carregar && !error?<ReactLoading className='loading' type={"bubbles"} color={'orange'} height={'20%'} width={'40%'} />:<></>}
        <form className={classes.form} onSubmit={cadastrar}>
        {error && <p className='error'>{error}</p>}
        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="sobrenome"
                label="Sobrenome"
                name="sobrenome"
                autoComplete="lname"
                value={sobrenome}
                onChange={e => setSobrenome(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="idade"
                label="Idade"
                type="number"
                autoComplete="idade"
                value={idade}
                onChange={e => setIdade(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="senha"
                label="senha"
                type="password"
                id="senha"
                autoComplete="current-password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
          <Grid container justify="center" alignItems="center">
              <Link to='/'>
                Ir para o login
              </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
}