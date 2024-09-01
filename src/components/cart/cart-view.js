'use client'

import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Button, Paper, IconButton, Container, Typography } from '@mui/material';
import { CartDataContext } from '@/common/cart-context';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CartView = () => {
  const [selected, setSelected] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const [selectedProductAmount, setselectedProductAmount] = useState(0)

  const { cartData, setCartData } = useContext(CartDataContext);

  const handleCheckboxChange = (event, id) => {
    const newSelected = new Set(selected);
    if (event.target.checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelected(newSelected);
  };

  const handleSelectAllChange = (event) => {
    if (event.target.checked) {
      setSelected(new Set(rows.map(row => row.id)));
    } else {
      setSelected(new Set());
    }
    setSelectAll(event.target.checked);
  };

  const handleButtonClick = () => {
    console.log('Selected rows:', Array.from(selected));
  };

  const handleDeleteItem = (id) => {
    const rows = cartData.filter((item) => item?.id !== id);
    setCartData(rows)
    if (selected.has(id)) {
      const newSelected = new Set(selected);
      newSelected.delete(id);
      setSelected(newSelected);
    }
  }

  const handleIncreaseItem = (id) => {
    const updatedCartData = cartData.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1};
      }
      return item;
    });

    setCartData(updatedCartData);
  };

  const handleDecreaseItem = (id) => {
    const updatedCartData = cartData.reduce((acc, item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        } else {
          if (selected.has(id)) {
            const newSelected = new Set(selected);
            newSelected.delete(id);
            setSelected(newSelected);
          }
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  
    setCartData(updatedCartData);
  };
  

  useEffect(() => {
    let sum = 0;
    Array.from(selected).forEach((item)=>{      
      const val = cartData.filter((row)=>row?.id === item)[0];      
      sum = sum + val?.quantity * val?.price
    })
    setselectedProductAmount(sum.toFixed(2))
  }, [selected, cartData])
  
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography>Total Amount - {selectedProductAmount}</Typography>
      <Typography fontWeight="600">Cart Items</Typography>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                />
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Item</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>

            {cartData.map((row) => (
              <TableRow key={row?.id}>
                <TableCell>
                  <Checkbox
                    checked={selected.has(row?.id)}
                    onChange={(event) => handleCheckboxChange(event, row?.id)}
                  />
                </TableCell>
                <TableCell>{row?.title}</TableCell>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '8px' }}>{row?.quantity}</span>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <IconButton onClick={() => handleIncreaseItem(row?.id)} style={{ padding: '0.5px' }}>
                        <ArrowDropUpIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDecreaseItem(row?.id)} style={{ padding: '0.5px' }}>
                        <ArrowDropDownIcon />
                      </IconButton>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{(row?.quantity * row?.price).toFixed(2)}</TableCell>
                <TableCell>
                  <Button
                    title="Delete"
                    onClick={() => handleDeleteItem(row?.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleButtonClick}
        style={{ marginTop: '16px' }}
      >
        Get Selected Items
      </Button>
    </Container>
  );
};

export default CartView;

