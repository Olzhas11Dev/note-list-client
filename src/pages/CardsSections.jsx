import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CardItem from '../components/CardItem';

function CardsSections() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch('https://6176c9f903178d00173dae84.mockapi.io/Notes')
      .then((res) => res.json())
      .then((data) => setListData(data));
  }, []);

  const handleRemove = async (id) => {
    await fetch('https://6176c9f903178d00173dae84.mockapi.io/Notes/' + id, {
      method: 'DELETE',
    });
    let allExcept = listData.filter((elem) => elem.id !== id);
    setListData(allExcept);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {listData.map((elem) => {
          return (
            <Grid key={elem.id} item xs={12} md={6} lg={4}>
              <CardItem handleRemove={handleRemove} note={elem} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default CardsSections;
