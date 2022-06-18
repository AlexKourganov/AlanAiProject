import  {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles((theme)=>({
    container:{
        padding:'0 5%',
        width:'100%',
        margin:0,
    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'45vh',
        padding:'10%',
        borderRadius:10,
        color:'white',
        [theme.breakpoints.down('sm')]: {
           height:'50vh'
         },
        
    },
    infoCard:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center'
    },
    cardTitle:{
        [theme.breakpoints.down('sm')]: {
           fontSize:'2rem'
        },
    },
    cardInfo:{
       
        [theme.breakpoints.down('sm')]: {
           fontSize:'1rem'
        },
    },
    cardSaying:{
       
        
        [theme.breakpoints.down('sm')]: {
           fontSize:'1rem'
        },
    }
    
}));
export default styles;