import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import handleSearch from "../../components/Global/unsplashAPI/unsplash";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

import "./Generate.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Generate = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const [term, setTerm] = useState(query.get("search") || "");
  const [orientation, setOrientation] = useState(query.get("orientation") || "");
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
  };

  return (
    <Container className="generate-box-main">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1>Generate</h1>
          <Form onSubmit={handleButtonClick}>
            <InputGroup className="mb-3 input-box">
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
              <Button variant="outline-secondary" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>
          <div className="image-box">
            {images.map((image) => (
              <Image key={image.id} src={image.urls.regular} alt="random" />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Generate;
