import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin6Fill } from 'react-icons/ri'


function Form() {

    const [data, setData] = useState([])
    const [formdata, setFormdata] = useState({
        "name": '',
        "email": '',
        "mobile": '',
        "password": ''
    })
    const [editedData, seteditedData] = useState({
        "_id": '',
        "name": '',
        "email": '',
        "mobile": '',
        "password": ''
    })
    const [isedit, setIsedit] = useState(false)

    let formHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormdata({ ...formdata, [name]: value })
    }

    let editedformHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        seteditedData({ ...editedData, [name]: value })
    }

    let SumbitFrom = async () => {
        console.log(formdata)
        await axios.post('http://localhost:4000/post', formdata)
            .then(res => {
                console.log('ok ');
                window.location.reload()
            })
        setIsedit(false)
    }

    let SumbitEditedFrom = async () => {
        console.log(editedData)
        let id = editedData._id
        await axios.patch(`http://localhost:4000/update/${id}`,editedData)
            .then(res => {
                console.log('ok ');
                window.location.reload()
            })
        setIsedit(false)
    }

    useEffect(() => {
        axios.get('http://localhost:4000/')
            .then(res => {
                setData(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    let editHandler = (index) => {
        const {  _id ,name, email, mobile, password } = data[index]
        seteditedData({_id, name, email, mobile, password })
        console.log(editedData)
        setIsedit(true)
    }
    console.log(isedit)


    let deleteHandler = (index) => {
        let id = data[index]._id
        axios.delete(`http://localhost:4000/delete/${id}`)
            .then(res => {
                console.log('ok ');
                window.location.reload()
            })
    }

    console.log(data)
    return (
        <>
            <div className="curd">
                <div className="form">
                    <form onSubmit={SumbitFrom}>
                        {isedit ?
                            <div className="formBox">
                                <h1>Edit the  Form</h1>
                                <input type="text" placeholder='enter your name' name='name' value={editedData.name} onChange={editedformHandler} />

                                <input type="email" placeholder='enter your email' name='email' value={editedData.email} onChange={editedformHandler} />

                                <input type="number" placeholder='enter your  mobile no.' name='mobile' value={editedData.mobile} onChange={editedformHandler} />

                                <input type="password" placeholder='enter your password' name='password' value={editedData.password} onChange={editedformHandler} />

                                <div className="btn" type='submit' onClick={SumbitEditedFrom} >
                                    Edit Now
                                </div>
                            </div>
                            :
                            <div className="formBox">
                                <h1>Fill the  Form</h1>
                                <input type="text" placeholder='enter your name' name='name' value={formdata.name} onChange={formHandler} />

                                <input type="email" placeholder='enter your email' name='email' value={formdata.email} onChange={formHandler} />

                                <input type="number" placeholder='enter your  mobile no.' name='mobile' value={formdata.mobile} onChange={formHandler} />

                                <input type="password" placeholder='enter your password' name='password' value={formdata.password} onChange={formHandler} />

                                <div className="btn" type='submit' onClick={SumbitFrom} >
                                    Submit
                                </div>
                            </div>
                        }
                    </form>
                </div>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>S no.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Password</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        {data.map((item, index, key) => {
                            return (
                                <tbody key={index} >
                                    <tr>
                                        <td >{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.password}</td>
                                        <td>
                                            <FaEdit style={{ fontSize: '20px', marginRight: '10px', cursor: 'pointer' }} onClick={() => editHandler(index)} />
                                            <RiDeleteBin6Fill style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => deleteHandler(index)} />
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </div>
        </>
    )
}

export default Form