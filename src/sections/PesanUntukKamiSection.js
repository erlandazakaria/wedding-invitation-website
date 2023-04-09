import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import { Box, Typography, TextField,  MenuItem, FormControl, Button, Stack, Pagination, createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import EmptyBox from '../components/EmptyBox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyA5mWRdXjlKMO7aCeyNIezVi9ey51D5_0A",
  authDomain: "wedding-web-7a6c1.firebaseapp.com",
  projectId: "wedding-web-7a6c1",
  storageBucket: "wedding-web-7a6c1.appspot.com",
  messagingSenderId: "400829068859",
  appId: "1:400829068859:web:51f283cba8e1d6a09f8e1e",
  databaseURL: "https://wedding-web-7a6c1-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


const validationSchema = yup.object({
    nama: yup
      .string()
      .min(2, 'Nama harus lebih dari 2 huruf')
      .required('nama is required'),
    ucapan: yup
      .string()
      .min(8,'ucapan should be of minimum 8 characters length')
      .required('ucapan is required'),
    kehadiran: yup
      .string()
      .required('pilih status kehadiran anda')
  });

const theme = createTheme({
    typography: {
        sectionHeader: {
            fontFamily: "Playball",
            fontSize: "1.8rem",
            color: "#AB8144",
            "@media(min-width:425px)": {
                fontSize: "2.2rem"
            },
            "@media(min-width:700px)": {
                fontSize: "3rem"
            },
        },
        berikanUcapan: {
            fontFamily: "Cabin",
            fontSize: "0.9rem",
            color: "#6C6C6C",
            fontWeight: 400,
            "@media(min-width:425px)": {
                fontSize: "1.1rem"
            },
            "@media(min-width:700px)": {
                fontSize: "1.3rem"
            },
        },
        totalComment: {
            fontFamily: "Crimson Text",
            fontSize: "1rem",
            color: "#7B6945",
            fontWeight: 700,
            "@media(min-width:425px)": {
                fontSize: "1.2rem"
            },
            "@media(min-width:700px)": {
                fontSize: "1.5rem"
            },
        },
        namaPengirim: {
            color: "#7B6945",
            fontWeight: 700,
            fontSize: "1rem",
            "@media(min-width:425px)": {
                fontSize: "1.1rem"
            },
            "@media(min-width:700px)": {
                fontSize: "1.2rem"
            },
        },
        ucapanDariPengirim: {
            fontSize: "0.8rem",
            "@media(min-width:425px)": {
                fontSize: "0.9rem"
            },
            "@media(min-width:700px)": {
                fontSize: "1rem"
            },
        }
    }
})

function PesanUntukKamiSection () {
    const [collectionOfComments, setCollectionOfComments] = useState([]);
    const [page, setPage] = useState(1);


    const isScreenAt425Px = useMediaQuery("(min-width: 425px)");

    const formik = useFormik({
        initialValues: {
            nama: "",
            ucapan: "",
            kehadiran: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values, action) => {
            const db = getDatabase();
            const users = ref(db, 'users/')
            set(ref(database, 'users/' + collectionOfComments.length), {
                nama: values.nama,
                ucapan: values.ucapan,
                kehadiran: values.kehadiran,
                waktu: Date.now()
            });
            action.resetForm();
            onValue(users, (snapshot) => {
                setCollectionOfComments(snapshot.val())
            })
            
        }
    })

    const sortedData = Object.entries(collectionOfComments).reverse().slice((page - 1) * 5  , page * 5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };


    useEffect(() => {
        let db = getDatabase();
        let users = ref(db, 'users/')
        onValue(users, (snapshot) => {
            if (snapshot.val() === null) {
                return;
            } else {
                setCollectionOfComments(snapshot.val());
            }   
        })
        moment.locale("id");
    },[])

    return (
        <ThemeProvider theme={theme}>
            <Box style={{height: "100%", boxSizing: "border-box", backgroundColor: "#E8D3C3"}} id="pesan-untuk-kami-section">
                <Box sx={{textAlign: "center", marginBottom: "20px"}}>
                    <EmptyBox emptyBoxStyles={{height:"24px"}} />
                    <Box>
                        <Typography variant='sectionHeader'>
                            Pesan untuk kami
                        </Typography>    
                    </Box>
                    <EmptyBox emptyBoxStyles={{height:"4px"}} />
                    <Typography variant='berikanUcapan'>
                        Berikan Ucapan & Doa Restu
                    </Typography>    
                </Box> 
                <Box sx={{height: "100%", padding: {xs: "20px", sm: "20px 40px", lg: "20px 60px"}}}>

                    {/* chatbox */}
                    <Box sx={{ height: "100%", backgroundColor: "#F5F3EE", borderRadius: "12px"}}>
                        <Box sx={{textAlign: "center", padding: "10px 0"}}>
                            <Typography 
                            variant='totalComment'
                            > 

                                {collectionOfComments === [] ? "0 " : `${collectionOfComments.length} `}
                                Comments

                            </Typography>       
                        </Box>
                            
                        <Box sx={{boxSizing: "border-box", borderTop: "1px solid #c4ced0",borderBottom: "1px solid #c4ced0", padding: "15px" }}>
                            <form onSubmit={formik.handleSubmit}>
                                <Box >
                                    <TextField 
                                        id="nama" 
                                        name='nama' 
                                        label="Nama" 
                                        variant='filled' 
                                        value={formik.values.nama}
                                        onChange={formik.handleChange}
                                        error={formik.touched.nama && Boolean(formik.errors.nama)}
                                        helperText={formik.touched.nama && formik.errors.nama} 
                                        inputProps={{sx:{backgroundColor: "#fff", borderRadius: "8px", "&.MuiInputLabel-root":{fontFamily: "Alegreya}"}}}}
                                        size='small'
                                        fullWidth
                                        >
                                        
                                    </TextField>
                                </Box>

                                <EmptyBox emptyBoxStyles={{height: "20px", }} />

                                <Box>
                                    <TextField 
                                        id='ucapan' 
                                        name='ucapan' 
                                        label="Ucapan" 
                                        variant='filled' 
                                        value={formik.values.ucapan}
                                        
                                        onChange={formik.handleChange}
                                        error={formik.touched.ucapan && Boolean(formik.errors.ucapan)}
                                        helperText={formik.touched.ucapan && formik.errors.ucapan}
                                        InputProps={{sx: { backgroundColor: "#fff", borderRadius: "8px", "&.Mui-focused": {backgroundColor: "#fff"}}}}
                                        size='small'
                                        fullWidth>
                                    </TextField>                    
                                </Box>

                                <EmptyBox emptyBoxStyles={{height: "20px", }} />

                                <Box>
                                    <FormControl fullWidth >
                                        <TextField 
                                            id="kehadiran" 
                                            name='kehadiran'
                                            select 
                                            sx={{width: "100%"}} 
                                            label="Konfirmasi Kehadiran" 
                                            value={formik.values.kehadiran}
                                            onChange={formik.handleChange}
                                            error={formik.touched.kehadiran && Boolean(formik.errors.kehadiran)}
                                            helperText={formik.touched.kehadiran && formik.errors.kehadiran}
                                            size='small'
                                            InputProps={{sx: {height: "60px", backgroundColor: "#fff", borderRadius: "8px",color: "black", fontFamily: "Alegreya",
                                            "&.Mui-focused": {backgroundColor: "#fff"},
                                            "&.Mui-focus": {backgroundColor: "#fff"}, 
                                            "&.MuiFilledInput-root:hover": {backgroundColor: "#fff"}, 
                                            "&.MuiFilledInput-root:focus": {backgroundColor: "#fff"}, 
                                            
                                            }}}
                                            
                                            variant='filled'>
                                            <MenuItem label="Hadir" value="hadir" sx={{fontFamily: "Alegreya", backgroundColor: "#fff"}}>Hadir</MenuItem>  
                                            <MenuItem label="Tidak Hadir" value="tidak hadir" sx={{fontFamily: "Alegreya"}}>Tidak Hadir</MenuItem>  
                                        </TextField>  
                                    </FormControl>
                                </Box>

                                <EmptyBox emptyBoxStyles={{height: "30px", }} />
                                
                                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Button variant='contained' type='submit' sx={{
                                        fontSize: {xs: "0.9rem", sm: "1.1rem", md: "1.3rem"}, textTransform: "capitalize",
                                        backgroundColor: "#7B6945", 
                                        padding: "4px 25px",
                                        "&:hover": {boxShadow: "0 0 5px 5px #424242", transform: "scale(1.1)"}
                                        
                                        }}>Kirim
                                    </Button>        
                                </Box>
                                
                            </form>
                        </Box>

                        
                        <Box sx={{height: "200px", overflow: "scroll"}}>
                            {
                                sortedData.map((data,index) => {
                                    let timeDiff = null;
                                    if (data[1].waktu) {
                                        timeDiff = moment(data[1].waktu).fromNow(); // 3.5
                                    }
                                    return (
                                    <Box key={index} sx={{borderBottom: "1px dotted #c4ced0"}}>
                                        <Box sx={{padding: "10px 15px 0"}}>
                                           
                                            <Box>
                                                <Typography variant='namaPengirim'>{data[1].nama}</Typography>
                                            </Box> 

                                            <Box sx={{marginBottom: "4px"}}>
                                                <Typography variant='ucapanDariPengirim'>{data[1].ucapan}</Typography>
                                            </Box>
                                            {timeDiff && <Box sx={{display: "flex", alignItems: "center"}}>
                                                <AccessTimeIcon sx={{fontSize: "1.2rem"}} />
                                                <EmptyBox emptyBoxStyles={{height: "100%", width: "3px"}} />
                                                <Typography variant='ucapanDariPengirim'>{timeDiff}</Typography>
                                            </Box> }
                                            
                                        </Box>
                                    </Box>)
                                })  
                            }
                            
                        </Box>
                        <EmptyBox emptyBoxStyles={{height: "12px"}} />
                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Stack spacing={5}>
                                {
                                    isScreenAt425Px 
                                        ? <Pagination count={10} page={page} onChange={handleChangePage} variant='outlined' />
                                        : <Pagination count={10} page={page} onChange={handleChangePage} size='small' variant='outlined' />         
                                }
                                
                            </Stack>    
                        </Box>
                        <EmptyBox emptyBoxStyles={{height: "10px"}} />
                        
                    </Box>
                </Box>
            </Box>    
        </ThemeProvider>
        
    )
}

export default PesanUntukKamiSection;