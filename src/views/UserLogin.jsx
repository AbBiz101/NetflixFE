import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Col, Row } from "react-bootstrap"


const UserLogin = () => {


    const [user , setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    let [completed , setCompleted] = useState(false)




    const checkIfFormIsCompleted = () => user.name.length >= 3 && user.surname.length >= 3 && user.email.length >= 5 && user.password.length >= 8 && user.confirmPassword === user.password


    return(
        <>
        {
        completed === true ? (
            <div className="spacer">
                <h1 style={{margin: "auto" , color: "white"}}>hudaidhkbjaskjd</h1>
            </div>
        ) : (
            <div className="spacer">
                <Row style={{marginTop: "200px" , color: "white"}}>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter Name" 
                                value={user.name}
                                onChange={(e) => setUser({...user , name: e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter Surname" 
                                value={user.surname}
                                onChange={(e) => setUser({...user , surname: e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Enter Email" 
                                value={user.email}
                                onChange={(e) => setUser({...user , email: e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                value={user.password}
                                onChange={(e) => setUser({...user , password: e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Confirm Password" 
                                value={user.confirmPassword}
                                onChange={(e) => setUser({...user , confirmPassword: e.target.value})}
                                />
                            </Form.Group>
                            
                            <Button variant="primary" disabled={!checkIfFormIsCompleted()} onClick={() => setCompleted(true)}>
                                Submit
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </div>
        )
        }
        </>
    )
}



export default UserLogin