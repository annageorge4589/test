import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Button } from '@mui/material';


const Add = () => {

    const [form,setform]=useState({
        "productName":'',
        "category":'',
        "image":'',
        "price":''
      }) 

      let showData=()=>{
        console.log(form);
        axios.post()
      }

      function valueCap(e)
    {
      // console.log(e)
      setform({...form,[e.target.name]:e.target.value})
    }

  return (
    <div>
      <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="title"
        name='title'  
        value={form.title}
        onChange={valueCap}
      />

    <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="category"
        name='category'  
        value={form.category}
        onChange={valueCap}
      />

    <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="price"
        name='price'  
        value={form.price}
        onChange={valueCap}
      />

    <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="image"
        name='image'  
        value={form.image}
        onChange={valueCap}
      />
       </div>
       <Button variant="contained" color='inherit' onClick={showData}Submit> Submit </Button>
       </Box>
    </div>
  )
}

export default Add