import React from 'react';
import { Grid, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import CocktailsLayour from '../../components/UI/Layout/CocktailsLayour';
import ProgressSpinner from '../../components/UI/ProgressSpinner/ProgressSpinner';
import CocktailItem from '../../components/CocktailItem/CocktailItem';

const Cocktails = () => {
    return (
        <CocktailsLayour>
            {/* <Grid container direction="column" spacing={2}>
                <Grid item container justifyContent="space-between" alignItems="center">
                    <Grid item >
                        <Typography variant="h4">Cocktails</Typography>
                    </Grid>

                    {user?.role === 'admin' && (
                        <Grid item>
                            <Button coloe="primary" component={Link} to="/cocktails/new">Add</Button>
                        </Grid>
                    )}
                </Grid>
                <Grid item>
                    <Grid item container justifyContent="center" direction="row" spacing={1}>
                        {fetchLoading ? (
                            <Grid container justifyContent="center" alignItems="center">
                                <Grid item>
                                    <ProgressSpinner />
                                </Grid>
                            </Grid>
                        ) : cocktails.map(cocktail => (
                            <ProductItem
                                key={cocktail._id}
                                id={cocktail._id}
                                title={cocktail.title}
                                price={cocktail.price}
                                image={cocktail.image}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Grid> */}
            <Grid container direction="column" spacing={2} mt={2}>
                <Grid item container justifyContent="space-between" alignItems="center">
                    <Grid item >
                        <Typography variant="h4">Cocktails</Typography>
                    </Grid>
                    <Grid item>
                        <Button coloe="primary" component={Link} to="/cocktails/new">Add</Button>
                    </Grid>
                </Grid>
                <Grid item mt={2}>
                    <Grid item container justifyContent="center" direction="row" spacing={1}>
                            <CocktailItem/>
                    </Grid>
                </Grid>
            </Grid>
        </CocktailsLayour>
    )
}

export default Cocktails;
