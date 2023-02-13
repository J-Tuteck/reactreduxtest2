import React, { useState } from "react";
import { storeData, updateInitialData } from "./actions/action";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ImagePopover from "./components/ImagePopover";



const App = () => {

  const data = useSelector(state => state.dataStorage)
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [toggle, setToggle] = useState("")
  const [changedName, setChangedName] = useState("");
  const [changedDirector, setChangedDirector] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [directorImg, setDirectorImg] = useState("");
  const [changedMovieImg, setChangedMovieImg] = useState("");
  const [changedDirectorImg, setChangedDirectorImg] = useState("");


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open1, setOpen1] = useState(false);
  const [image, setImage] = useState("");

  const handlePopoverOpen = (event, url) => {
    setImage(url);
    setOpen1(true);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose1 = () => {
    setOpen1(false);
    setAnchorEl(null);
  };


  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (name === "" && director === "" && movieImg === "" && directorImg === "") {
      alert("All fields are required...!");
    }
    else if (name === "") {
      alert("please enter name");
    }
    else if (director === "") {
      alert("please enter director");
    }
    else if (movieImg === "") {
      alert("please enter movie image url");
    }
    else if (directorImg === "") {
      alert("please enter director imgae url");
    }
    else {
      dispatch(storeData(name, director, movieImg, directorImg));
      setDirector("");
      setName("");
      setMovieImg("");
      setDirectorImg("");
    }
  };

  const editClicked = (obj) => {
    setToggle(obj.id);
    setChangedDirector(obj.address);
    setChangedName(obj.name);
    setChangedMovieImg(obj.movieImg);
    setChangedDirectorImg(obj.directorImg);

  }



  const updateData = () => {
    const obj = {
      id: toggle,
      name: changedName,
      address: changedDirector,
      movieImg: changedMovieImg,
      directorImg: changedDirectorImg
    }
    dispatch(updateInitialData(obj))
    setToggle("");
    setChangedDirector("");
    setChangedName("");
  }



  return (
    <div classname="App" style={{ textAlign: "center" }}>

      {open1 ? <ImagePopover anchorEl={anchorEl} image={image} /> : ''}
      
      <h2>Movies and More</h2>
      <div>
        <Box sx={{ width: "90%", height: "20%" }}>
          <TextField
            label="Movie"
            required
            id="input1"
            size="small"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Director"
            required
            id="input2"
            size="small"
            variant="outlined"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
          <TextField
            label="Movie image URL"
            required
            id="input3"
            size="small"
            variant="outlined"
            value={movieImg}
            onChange={(e) => setMovieImg(e.target.value)}
          />
          <TextField
            label="Director image URL"
            required
            id="input4"
            size="small"
            variant="outlined"
            value={directorImg}
            onChange={(e) => setDirectorImg(e.target.value)}
          />
          <Button variant="outlined" onClick={() => handleSubmit()}>
            ADD
          </Button>
        </Box>
      </div>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><h3>Serial No</h3></TableCell>
              <TableCell><h3>Movie</h3></TableCell>
              <TableCell><h3>Director</h3></TableCell>
              <TableCell><h3>Action</h3></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((ele, ind) => {
                return toggle !== ele.id ? (
                  <TableRow key={ele.id}>
                    <TableCell>{ind + 1}</TableCell>
                    <TableCell
                      aria-haspopup="true"
                      onMouseEnter={e => handlePopoverOpen(e, ele.movieImg)}
                      onMouseLeave={handlePopoverClose1}
                    >
                      {ele.name}
                    </TableCell>
                    <TableCell
                      aria-haspopup="true"
                      onMouseEnter={e => handlePopoverOpen(e, ele.directorImg)}
                      onMouseLeave={handlePopoverClose1}
                      >
                        {ele.address}
                      </TableCell>
                    <TableCell style={{ cursor: "pointer" }} onClick={() => editClicked(ele)}>Edit</TableCell>
                  </TableRow>
                ) :
                  (
                    <TableRow key={ele.id}>
                      <TableCell>{ind + 1}</TableCell>
                      <TableCell><input value={changedName} onChange={e => setChangedName(e.target.value)} id="input-2" /></TableCell>
                      <TableCell>
                        <input value={changedDirector} onChange={e => setChangedDirector(e.target.value)} id="input-2" />
                      </TableCell>
                      <TableCell style={{ cursor: "pointer" }} onClick={() => updateData()}>Update</TableCell>
                    </TableRow>
                  )
              })
            }

          </TableBody>
        </ Table>
      </TableContainer>
    </div>
  );
};

export default App;
