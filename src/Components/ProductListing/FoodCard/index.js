import React from 'react';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export default ({ classes, food }) => {
  return (
    <Card className={classes.card}>
      <CardContent style={{ maxHeight: '100%', overflowY: 'auto', paddingBottom: 70 }}>
        <div className={classes.imageContainer}>
          <img src={food.thumbnail} alt=""/>
        </div>
        <div className={classes.foodName}>
          {food.title}
        </div>
        <div>
          {
            !!food.ingredients && (
              <div>
                {
                  food.ingredients.split(', ').map((ingredient, index) => {
                    return <Chip
                      key={index}
                      className={classes.chip}
                      label={ingredient}
                      color="secondary"
                    />
                  })
                }
              </div>
            )
          }
        </div>
        <div className={classes.bottomBarContainer}>
          <div>
            <span className={classes.priceLabel}>Price: </span>Rs. {food.price}.00
          </div>
          <Button variant="outlined" color="secondary">
            + Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}