// import styles from "./page.module.css";


import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from "@/components/header";
import SearchCard from "@/components/searchCard";

import OrderList from '@/components/orderScroll';
import OrderDetail from '@/components/orderdetail';

export default function Home() {
  return (
    <>
      {/* <Header></Header>
    <SideBarSearch></SideBarSearch> */}
      <Container maxWidth={false}>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <SearchCard />
            <OrderList/>
          </Grid>
          <Grid item xs={12} md={8} > 
          <OrderDetail/>
        </Grid>

        </Grid>
      </Container>

    </>
  );
}
