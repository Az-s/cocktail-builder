import React, { useEffect } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import Rating from '@mui/material/Rating';

const CocktailInfo = ({ match }) => {
    // const dispatch = useDispatch();
    // const product = useSelector(state => state.products.product);

    // useEffect(() => {
    //   dispatch(fetchProduct(match.params.id));
    // }, [dispatch, match.params.id]);

    return (
        <Card sx={{ display: 'flex' , flexDirection: 'column' , marginTop: '3rem'}}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 250 }}
                    image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dirty-martini-a346156.jpg?quality=90&webp=true&resize=440,400"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' , marginLeft: '3rem'}}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4">
                            Martini
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Raiting:
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <Grid item xs={12} md={6}>  
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                                Ingredients:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Water" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Wine" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Box sx={{padding: '2rem'}}>
                <Typography variant="subtitle1" color="text.secondary" component="div" variant="h6">
                    Recipe:
                </Typography>
                <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                    large plate and set aside, leaving chicken and chorizo in the pan.
                </Typography>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Box>
        </Card>
    )
}

export default CocktailInfo;
