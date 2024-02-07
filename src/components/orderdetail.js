"use client";
import * as React from 'react';
import Divider from '@mui/material/Divider';
import OrderDetailHeader from '../components/orderDetailHeader';
import OrderDetailActions from '../components/orderDetailActions';
import OrderDetailTabs from '../components/orderDetailsTab';
export default function OrderDetail() {

    return (
        <>
            <OrderDetailHeader/>
            <Divider light />
            <OrderDetailActions/>
            <Divider light />
            <OrderDetailTabs/>
        </>

    )
}