import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CardItem from '../components/CardItem';
import { fetchData } from '../action/api';
import { useDispatch, useSelector } from 'react-redux';

function CardsSections() {
  const dispatch = useDispatch();
  const fetchNotes = useSelector((state) => state.myNotes.notes);

  useEffect(() => {
    dispatch(fetchData());
  }, [fetchNotes]);

  return (
    <Container>
      <Grid container spacing={3}>
        {fetchNotes.map((elem) => {
          return (
            <Grid key={elem._id} item xs={12} md={6} lg={4}>
              <CardItem note={elem} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default CardsSections;
