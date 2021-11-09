import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Card, IconButton, Typography } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';

function CardItem({ note, handleRemove }) {
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={() => handleRemove(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.createdAt}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardItem;
