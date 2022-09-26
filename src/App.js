import logo from './logo.svg';
import './App.css';
import {
  Container, Card, Row, Col, Input, Modal, ModalFooter,
  ModalHeader, ModalBody,
} from 'reactstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addDatatolist, deleteDatatolist, updateDatatolist } from './Action';






function App() {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);

  const [inputfields, setInputFields] = useState([{ data: '' }])

  const [showdata, setshowdata] = useState(false)

  const [updateId, setUpdateId] = useState()
  const [updateData, setUpdateData] = useState([{ data: '' }])

  const dispatch = useDispatch()

  const list = useSelector((state) => state.todo)





  const addInputFields = (e) => {

    e.preventDefault()
    setInputFields([...inputfields, { data: '' }]);


  }

  const removeInputFields = (e, id) => {
    e.preventDefault()

    let temp = [...inputfields]
    temp.splice(id, 1)
    setInputFields(temp)

  }
  const textInputFields = (e, index) => {
    e.preventDefault()
    let { name, value } = e.target
    let temp = [...inputfields]
    temp[index][name] = value
    setInputFields(temp)

    // console.log('inputfields', inputfields)

  }
  const addData = (e) => {
    e.preventDefault()

    let dataobj = {}
    dataobj['inputtxt'] = [...inputfields]
    //console.log('dispatch data',dataobj)

    dispatch(addDatatolist(dataobj))
    setInputFields([{ data: '' }])

  }

  const deleteTask = (e, id) => {
    e.preventDefault()
    dispatch(deleteDatatolist(id))

  }
  const handleEdit = (e, data, id) => {
    e.preventDefault()
    setUpdateData(data.inputtxt)
    setUpdateId(id)
    console.log('data::', data)
    console.log('upate::', updateData)
    toggle()

  }

  const modelRemoveInput = (e, id) => {
    e.preventDefault()
    let temp = [...updateData]
    temp.splice(id, 1)
    setUpdateData(temp)

  }
  const modelAddInput = (e) => {
    e.preventDefault()
    setUpdateData([...updateData, { data: '' }]);

  }
  const modelTextInputFields = (e, index) => {
    e.preventDefault()
    let { name, value } = e.target
    let temp = [...updateData]
    temp[index][name] = value
    setUpdateData(temp)

    // console.log('modalUpdate', updateData)

  }

  const modalUpdateData = (e) => {
    e.preventDefault()
    // console.log('Data to Update',updateData)
    //  console.log('list::',list)
    //  let temp={}
    //   temp['list']=[...list.list]
    //   console.log('temp::',temp)
    //  temp[updateId]=updateData



    //   temp[updateId]=[]


    let dataobj = {}
    dataobj['inputtxt'] = [...updateData]
    //console.log('dispatch data',dataobj)

    dispatch(updateDatatolist(dataobj, updateId))
    toggle()

  }
  return (

    <Container>
      <Row>
        <Col md='3'></Col>
        <Col>


          <Card className='card' style={{ padding: 15, marginTop: 100 }}>

            <form onSubmit={(e) => addData(e)}>
              <hr></hr>
              <h1 style={{ textAlign: 'center' }}>Nested Todo Redux</h1>
              <hr></hr>
              <br></br>
              <h3 >Task</h3>

              {
                inputfields?.length > 0 && inputfields?.map((item, id) => {
                  return (
                    <div style={{ marginTop: 20, textAlign: 'center' }}>
                      <Input name='data' required placeholder='Enter Your Task' onChange={(e) => textInputFields(e, id)} value={item.data} style={{ width: 200, float: 'left' }}></Input>


                      {
                        inputfields.length - 1 === id && (

                          <Button variant="success" name='data' style={{ width: 40 }} onClick={(e) => { addInputFields(e) }}>+</Button>
                        )

                      }
                      {
                        inputfields.length !== 1 && (

                          <Button variant="warning" style={{ marginLeft: 5, width: 40 }} onClick={(e) => { removeInputFields(e, id) }}>-</Button>
                        )

                      }



                    </div>
                  )

                })
              }
              <br></br>
              <br></br>
              <div style={{}}>
                <Button variant="primary" type='submit'>Add</Button>
                <Button variant="primary" onClick={e => { setshowdata(true) }} style={{ marginLeft: 5 }}>Show</Button>
              </div>
            </form>
            <hr></hr>
            {

              showdata && list.list.map((el, index) => {
                // console.log('list', list)
                return (
                  <Card style={{ textAlign: 'left', background: '#202142', color: 'white' }}>
                    <h3>Task </h3>
                    <div>
                      {el?.inputtxt?.map((item, id) => {
                        return (
                          <li>{item.data}</li>
                        )

                      })}
                      <div style={{ float: 'right' }}>
                        <Button variant="warning" onClick={(e) => handleEdit(e, el, index)} style={{ width: 60, fontSize: 9 }}>Edit</Button>
                        <Button variant="danger" onClick={(e) => deleteTask(e, index)} style={{ width: 60, marginLeft: 5, fontSize: 9 }}>Delete</Button>
                      </div>
                    </div>
                  </Card>
                )

              })

            }



          </Card>
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={(e) => modalUpdateData(e)}>
          <ModalHeader
            toggle={toggle}>Edit Items</ModalHeader>

          <ModalBody>


            {

              updateData.map((el, index) => {
                //console.log('list', el.data)
                return (
                  <>
                    <div style={{ marginTop: 5 }}>
                      <Input name='data' required placeholder='Enter Your Task' onChange={(e) => { modelTextInputFields(e, index) }} value={el.data} style={{ width: 200, float: 'left' }}></Input>



                      {updateData.length - 1 === index
                         && (

                      <Button variant="success" name='data' style={{ marginLeft: 10, width: 40 }} onClick={(e) => { modelAddInput(e) }}>+</Button>
                        )}
                      {
                         updateData.length !== 1&& (

                          <Button variant="warning" style={{ marginLeft: 5, width: 40 }} onClick={(e) => { modelRemoveInput(e, index) }}>-</Button>
                        )}
                    </div>

                  </>
                )

              })

            }


          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" >Save</Button>
          </ModalFooter>
        </form>
      </Modal>
    </Container>

  );
}

export default App;
