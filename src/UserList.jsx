import { useEffect, useState } from 'react'
import axios from 'axios'
import { Alert, Badge, Card, Col, Container, Row, Spinner } from 'react-bootstrap'

function UserList() {
  const [listOfUser, setListOfUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setListOfUser(response.data)
      } catch {
        setError('Unable to load users right now.')
      } finally {
        setIsLoading(false)
      }
    }

    getUsers()
  }, [])

  return (
    <section className="user-list-section">
      {isLoading && (
        <Alert className="user-list-status d-flex align-items-center gap-3 mb-0" variant="light">
          <Spinner animation="border" size="sm" variant="primary" />
          <span>Loading users...</span>
        </Alert>
      )}

      {error && !isLoading && (
        <Alert className="user-list-status mb-0" variant="danger">
          {error}
        </Alert>
      )}

      {!isLoading && !error && (
        <Container fluid className="px-0">
          <Alert className="user-list-status d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4" variant="light">
            <span>
              Showing <span className="label">{listOfUser.length}</span> users from the API.
            </span>
            <Badge bg="primary" pill>
              Live Data
            </Badge>
          </Alert>

          <Row className="g-4">
            {listOfUser.map((user) => (
              <Col key={user.id} md={6} xl={4}>
                <Card className="user-card h-100 border-0">
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                      <div>
                        <Card.Title as="h2" className="mb-1">
                          {user.name}
                        </Card.Title>
                        <Card.Subtitle className="user-meta">@{user.username}</Card.Subtitle>
                      </div>
                      <Badge bg="light" text="dark" className="user-badge">
                        {user.address.city}
                      </Badge>
                    </div>

                    <div className="user-details d-grid gap-2">
                      <p>
                        <span className="label">Email:</span>{' '}
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                      </p>
                      <p>
                        <span className="label">Phone:</span> {user.phone}
                      </p>
                      <p>
                        <span className="label">Website:</span>{' '}
                        <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                          {user.website}
                        </a>
                      </p>
                      <p>
                        <span className="label">Company:</span> {user.company.name}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </section>
  )
}

export default UserList