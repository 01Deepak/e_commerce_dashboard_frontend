import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from "../product/show-products/Products";

type BasicCardProps = {
    product: Product;
  };

const  BasicCard = (props: BasicCardProps) => {
  return (
    <Card sx={{ minWidth: 275,backgroundColor: '#f3f9ff',width:'300px',color:'#666666', fontSize:'18px' }}>
      <CardContent>
        <Typography sx={{ fontWeight:'bold'}}  gutterBottom>
          {props.product.name}
        </Typography>
        <Typography   gutterBottom>
          {props.product.price}
        </Typography>
        <Typography   gutterBottom>
          {props.product.company}
        </Typography>
        <Typography   gutterBottom>
          {props.product.category}
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