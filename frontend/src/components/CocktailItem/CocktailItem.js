import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CocktailItem = () => {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardActionArea component={Link} to={'/cocktails/id'}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dirty-martini-a346156.jpg?quality=90&webp=true&resize=440,400"
                    alt="martini"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Martini
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CocktailItem;
