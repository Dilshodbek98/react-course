import React, {  useState } from "react";
import { Container, Modal } from "./styled";
const dataBase = [
  {id: 1, name: 'dilshod1',username: '@qwerty1', address: 'tashkent1'},
  {id: 2, name: 'islom',username: '@qwerty2', address: 'tashkent2'},
  {id: 3, name: 'umid',username: '@qwerty3', address: 'tashkent3'},
  {id: 4, name: 'shox',username: '@qwerty4', address: 'tashkent4'},
]

const Crud = () => {
  
  // states
  const [modal, setModal] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputUserName, setInputUserName] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [data, setData] = useState(dataBase)
  const [search,setSearch] = useState('name');
  const [selected, setSelected] = useState(null)
  
  // logic functions
  const deleteItem = (id) => {
    let res = data.filter(value => value.id !== id)
    setData(res)
  }
  const addItem = (value) => {
    if(inputName.length > 2 && inputUserName.length > 2 && inputAddress.length > 2){
      let newUser = {id: data.length+1,name: inputName, username: inputUserName, address: inputAddress}
      let res = [...data, newUser]
      setData(res)
      setInputAddress('')
      setInputName('')
      setInputUserName('')}
    else
      alert('Length of word must be more than 2 letters')
    }
  const filterr = (e) => {
    let res = dataBase.filter(value => {
      return value[search].includes(e.target.value)
    })
    setData(res)
    console.log(selected);
  }  

  const onSelect = (e) => {
    setSearch(e.target.value);
  }

  const onSave = () => {
    let res = data.map((vl,ind) => {
      return vl.id === selected.id ? {...vl, name: selected.name,username: selected.username, address: selected.address} : vl;
    })
    setData(res)
    setSelected(null)
  }
  console.log(data);
    return(
    <Container>
      <h1>CRUD</h1>
      {!modal ?
        <button onClick={()=> setModal(!modal)}>+Add</button>
        : <button onClick={()=> setModal(!modal)}>Cancel</button>
      }
      {modal &&
        <Modal>
        <input type="text" value={inputName} placeholder="name" onChange={(e) => setInputName(e.target.value)}/>
        <input type="text" value={inputUserName} placeholder="username" onChange={(e) => setInputUserName(e.target.value)}/>
        <input type="text" value={inputAddress} placeholder="address" onChange={(e) => setInputAddress(e.target.value)}/>
        <button onClick={() => addItem()}>save</button>
      </Modal>}
        <input type="text" placeholder="search" onChange={filterr}/>
        <select name="" id="" onChange={onSelect}>
          <option value="name">name</option>
          <option value="username">username</option>
          <option value="address">address</option>
        </select>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Adress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? data.map(value => {
            return(
              <tr key={value.id}>
                  {selected?.id !== value.id ?<>
                  <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.address}</td>
                </> : 
                <>
                  <td><input type="text" defaultValue={selected?.name} onChange={(e)=> setSelected({...selected, name: e.target.value})}/></td>
                  <td><input type="text" defaultValue={selected?.username} onChange={(e)=> setSelected({...selected, username: e.target.value})}/></td>
                  <td><input type="text" defaultValue={selected?.address} onChange={(e)=> setSelected({...selected, address: e.target.value})}/></td>
                </>}
                <td>
                  {!(selected?.id == value.id) ?<> <button onClick={() => setSelected(value)}>edit</button>
                  <button onClick={()=> deleteItem(value.id)}>delete</button></>
                  : <><button onClick={()=> onSave()}>save</button>
                    <button onClick={()=> setSelected(null)}>cancel</button></>
                  }
                </td>
              </tr>
            )
          }): 
          <tr>
            <th colSpan={4}>no data</th>
          </tr>
          }
        </tbody>
      </table>
    </Container>
  );
};

export default Crud;
