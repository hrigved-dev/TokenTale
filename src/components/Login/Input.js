// import React from 'react'
// import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'

// const Input = ({ name, half }) => (
//     <Grid item xs={12} sm={ half ? 6 : 12}>
//         <TextField 
//             name={name} 
//             onChange={handleOnChange}
//             variant='outlined'
//             required
//             fullWidth
//             autoFocus={autoFocus}
//             type={type}
//             InputProps={
//                 name=='password' ? {
//                     endAdornment: (
//                         <InputAdornment position='end'>
//                             <IconButton onClick={handleShowPassword}>
//                                 {type == 'password' ? <Visibilty /> : <VisibiltyOff />}
//                             </IconButton>
//                         </InputAdornment>
//                     )
//                 }
//             }
//         />
//     </Grid>
// );