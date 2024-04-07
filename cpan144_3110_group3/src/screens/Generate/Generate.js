import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import handleSearch from "../../components/Global/unsplashAPI/unsplash_Generate";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Container,
  Row,
  Col,
  Image,
  Card,
} from "react-bootstrap";
import * as Icon from "react-feather";
import "./Generate.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Generate = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const [term, setTerm] = useState(query.get("search") || "");
  const [orientation, setOrientation] = useState(
    query.get("orientation") || "landscape"
  );
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (term) {
      handleSearch(term, setImages, orientation);
    }
  }, [term, orientation]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchTerm.value;
    setTerm(searchValue);
    navigate(`?search=${searchValue}&orientation=${orientation}`);
    handleSearch(searchValue, setImages, orientation);
  };

  return (
    <Container className="generate-box-main">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1>Generate</h1>
          <Form onSubmit={handleButtonClick}>
            <InputGroup className="mb-3 input-box input-group">
              <FormControl
                id="searchTerm"
                type="text"
                placeholder="Search for images..."
                defaultValue={term}
              />
              <Form.Select
                id="orientation"
                value={orientation}
                onChange={(e) => setOrientation(e.target.value)}
              >
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
                <option value="squarish">Squarish</option>
              </Form.Select>
              <Button type="submit">Search</Button>
            </InputGroup>
          </Form>
          <div className="image-box">
            {images.map((image) => (
              <div key={image.id} className="image-info-container">
                <div className="image-container">
                  <Image
                    src={image.urls.regular}
                    alt={image.alt_description || "Image"}
                    className="m-2"
                    style={{
                      width: "45%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="info-container">
                  <Card style={{ width: "20rem" }}>
                    <Card.Body>
                      <div className="info-container_text">
                        <Card.Title>
                          {image.alt_description || "Unnamed Image"}
                        </Card.Title>
                        <Card.Text>Photo by: {image.user.name}</Card.Text>
                        <Card.Text>Likes: {image.likes}</Card.Text>
                        <Card.Text>
                          Resolution: {image.width} x {image.height}
                        </Card.Text>
                        <Card.Text>{image.downloads}</Card.Text>
                        <Card.Text></Card.Text>
                      </div>
                      <div className="socials-container">
                        {/* Conditional Instagram Icon/Button */}
                        {image.user.social &&
                          image.user.social.instagram_username && (
                            <a
                              href={`https://www.instagram.com/${image.user.social.instagram_username}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="icon-button"
                            >
                              <Button className="dark-button btn-lg social-button">
                                <Icon.Instagram />
                              </Button>
                            </a>
                          )}

                        {/* Conditional Twitter Icon/Button */}
                        {image.user.social &&
                          image.user.social.twitter_username && (
                            <a
                              href={`https://www.twitter.com/${image.user.social.twitter_username}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="icon-button"
                            >
                              <Button className="dark-button btn-lg social-button">
                                <Icon.Twitter />
                              </Button>
                            </a>
                          )}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="button-container">
                  <Button
                    className="download-button"
                    href={image.links.download}
                    target="_blank"
                    style={{
                      fontWeight: "bold", // Makes the text bold.
                      fontSize: "1.25rem", // Increases the font size for bigger text.
                      padding: "10px 20px", // Increases padding for a larger button.
                      backgroundColor: "green",
                    }}
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Generate;
