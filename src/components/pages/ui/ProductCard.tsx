import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const  BasicCard = (props) => {
  return (
    <Card sx={{ minWidth: 275,backgroundColor: '#f3f9ff',width:'300px',color:'#666666', fontSize:'18px' }}>
      <CardContent>
        <Typography sx={{ fontWeight:'bold'}}  gutterBottom>
          product name
        </Typography>
        <Typography   gutterBottom>
          price
        </Typography>
        <Typography   gutterBottom>
          company
        </Typography>
        <Typography   gutterBottom>
          category
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">edit</Button>
        <Button size="small">delete</Button>

      </CardActions>
    </Card>
  );
}

export default BasicCard