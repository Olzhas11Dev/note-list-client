import React from 'react';
import { Card, IconButton, Typography, CardHeader, CardContent } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { removeNote, updateNote } from '../action/api';
import { useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router';
function CardItem(props) {
  const { title, text, createdAt, _id } = props.note;
  const hisoty = useHistory();

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeNote(id));
  };

  const handleUpdate = (note) => {
    hisoty.push(`/update/${_id}`);
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
        <IconButton onClick={() => handleUpdate(props.note)}>
          <EditIcon />
        </IconButton>
      </Card>
    </div>
  );
}

export default CardItem;
