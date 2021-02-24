import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import { CardContent, Container, Typography, Card, Button, Grid,Paper} from '@material-ui/core';
import circle from '../../images/icons/circle.svg';
import  triangles from '../../images/icons/triangles.svg';
import reta  from '../../images/icons/reta.svg';
import Retang from '../../images/icons/Retang.svg';
import fig3 from '../../images/icons/fig3.svg';
import fig4 from '../../images/icons/fig4.svg';



const useStyles = makeStyles((theme)=>({
    conteudo:{
        width:"70%",
        height:"60%",   
        backgroundColor:"#11CCBB",
        color:"white",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(5)  
    },
    conteudo1:{
        width:"70%",
        height:"60%", 
        backgroundColor:"#11CCBB",
        color:"white",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(5) 
    },
    conteudo2:{
        width:"70%",
        height:"60%",   
        backgroundColor:"#11CCBB",
        color:"white",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(5)  
    },
    conteudo3:{
        width:"70%",
        height:"60%",  
        backgroundColor:"#11CCBB",
        color:"white",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(5)  

    },
    fase:{
        margin:"auto",
        fontWeight:"Bold",
        marginLeft:"50px",
        fontFamily:"'Poppins', sans-serif;",
        
    },
    fase1:{
        margin:"auto",
        fontWeight:"Bold",
        marginLeft:"50px",
        fontFamily:"'Poppins', sans-serif;",
        Color:"#FFBB0E",
    },
    paper:{
        marginBottom:"20px",
        
    },

    titulo1:{
        textAlign:"center",
        fontSize:"20px",
        marginBottom:"25px",
        fontFamily:"'Poppins', sans-serif;",
    },

    fundo:{
        background:"#E5E7EB",
    },
    fundo1:{
        backgroundColor:"#E5E7EB",
      
    },
    fundo2:{
        backgroundColor:"#E5E7EB",
      
    },
    
    fundo3:{
        backgroundColor:"#E5E7EB",
    },
    linha:{
        marginBottom:"30px"
    },
    imagem:{
        width:"150px",
        height:"120px",
        marginLeft:"50px",
        marginTop:"10%"
    },
    imagem1:{
        width:"150px",
        height:"150px",
        marginLeft:"50px",
        marginTop:"10%"
    },
    imagem2:{
        width:"150px",
        height:"150px",
        marginLeft:"50px",
        marginTop:"10%"
    },
    imagem3:{
        width:"150px",
        height:"150px",
        marginLeft:"50px"
    },
    
  }));


export default function EscolherFases(){


    const classes = useStyles();


return(

<div>
    <Navbar/>
    <Container>
    
                <Typography style={{ marginBottom: 20, color: '#6A6A6A', fontSize: "190%", textAlign: "center", fontWeight:600, marginTop:"3%"}}>
                    MaGeo Fases
                </Typography>
                <Typography className={classes.titulo1}>
                    Ganhe pontos! Testando os seus conhecimentos em Geoemtria PLana.
                </Typography>
                <Typography style={{ marginBottom: 20, color: '#6A6A6A', fontSize: "190%", textAlign: "center", fontWeight:600, marginTop:"3%"}}>
                    <hr/> Fases 
                 {/*    
                    style={{backgroundColor:"#0DD28B", content: "Fases",displayInline:"block", }} */}
                </Typography>
           
                <Grid container spacing={7} className={classes.linha} >
                    
                <Grid   item xs={12} spacing={9} sm={3}>
                <Paper className={classes.paper}> 
                <Card className={classes.fundo}>
                <CardContent>
                <span className={classes.fase1}>
                    Fase Quadrado
                 </span>
                    <img src={reta} alt='Logo do Projeto Mageo'  className={classes.imagem}/>
                    <Button href="/faseQuadrado" className={classes.conteudo}> Jogar</Button>
                    {/* style={{ backgroundSize:"cover",alignContent:"center",}} */}
                   
                </CardContent>
                </Card>
                </Paper>
                </Grid>

                <Grid   item xs={6} spacing={8} sm={3}>
                <Paper className={classes.paper}>
                
                <Card className={classes.fundo1}>
               
                <CardContent>
                <span className={classes.fase}>
                Fase Retângulo
                <img src={Retang} alt='Logo do Projeto Mageo'  className={classes.imagem1}/>
                    <Button href="/faseRetangulo" className={classes.conteudo1} >Jogar</Button>
                    {/* style={{background: `url(${re})`, backgroundSize:"cover", }}  */}
                    </span>
                </CardContent>
                </Card>
                </Paper>
                </Grid>

                <Grid   item xs={6} spacing={8} sm={3}>
                <Paper className={classes.paper} >
                
                <Card className={classes.fundo2}>
                <CardContent >
                    {/* style={{background: `url(${triangles})`, backgroundSize:"cover", }} */}
                <span className={classes.fase}>
                Fase Triângulo
                <img src={fig3} alt='Logo do Projeto Mageo'  className={classes.imagem2}/>
                <Button href="/faseTriangulo" className={classes.conteudo2} > Jogar</Button>  
                </span>
                </CardContent>
                </Card>
                
                </Paper>
                </Grid>
                
                <Grid   item xs={6} spacing={8} sm={3}>
                <Paper className={classes.paper}>
                <Card className={classes.fundo3}>
                <CardContent>
                <span className={classes.fase}>
                Fase Circulo
                <img src={fig4} alt='Logo do Projeto Mageo'  className={classes.imagem3}/> 
                <Button href="/faseCirculo" className={classes.conteudo3}>Jogar</Button>
                </span>
                </CardContent>
                </Card>
                </Paper>
                </Grid>

                {/* style={{background: `url(${triangulo})`, backgroundSize:"cover" }} */}
              
        
                </Grid>
                
            
           
    </Container>
</div>

)

}


