import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Card, IconButton, Typography } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { removeNote } from '../action/api';
import { useDispatch } from 'react-redux';

function CardItem(props) {
  const { title, text, createdAt, _id } = props.note;

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeNote(id));
  };

  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={() => handleRemove(_id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={title}
          subheader={createdAt}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardItem;
