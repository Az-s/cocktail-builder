import React , {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "@mui/material";
import CocktailForm from '../../components/CocktailForm/CocktailForm';

const NewCocktail = () => {
    const dispatch = useDispatch();
    // const categories = useSelector(state => state.categories.categories);
    // const error = useSelector(state => state.products.createProductError);
    // const loading = useSelector(state => state.products.createProductLoading);
  
    useEffect(() => {
    //   dispatch(fetchCategoriesRequest());
    }, [dispatch]);
  
    const onSubmit = cocktailData => {
    //   dispatch(createProduct(cocktailData));
    };

    return (
        <>
            <Typography variant="h4">New product</Typography>
            <CocktailForm
                onSubmit={onSubmit}
                // error={error}
                // loading={loading}
            />
        </>
    )
}

export default NewCocktail;
