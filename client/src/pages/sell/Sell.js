import React, { useState, useEffect } from "react";
import "./style.css";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";

const Register = (props) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("Mobile");
  const [img, setImg] = useState("");
  const [uploadData, setUploadData] = useState({
    title: "",
    brand: "",
    price: 0,
    usage: "",
    description: "",
  });

  // eslint-disable-next-line no-empty-pattern
  const [{ user }, dispatch] = useStateValue();
  const token = localStorage.getItem("AUTH_TOKEN");

  const loadLocalStorage = () => {
    dispatch({
      type: "SET_USER",
      item: JSON.parse(token),
    });
  };

  useEffect(() => {
    token && loadLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const HandleImage = (e) => {
    setImg(e.target.files[0]);
  };

  const HandleCategory = (e) => {
    setCategory(e.target.value);
  };

  const HandleUploadData = (e) => {
    const { value, name } = e.target;

    setUploadData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const HandleSubmit = (e) => {
    const d = new Date().toDateString();
    const formData = new FormData();
    formData.append("title", uploadData.title);
    formData.append("price", uploadData.price);
    formData.append("description", uploadData.description);
    formData.append("usage", uploadData.usage);
    formData.append("brand", uploadData.brand);
    formData.append("created_at", d);
    formData.append("img", img);
    formData.append("category", category);
    formData.append("user", user._id);

    axios
      .post("http://localhost:8000/add_product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);

        navigate("/profile");
      });
    e.preventDefault();
  };

  return (
    <Container className="sell">
      <div className="sell-box">
        <div className="sell-form">
          <span>Start Selling!</span>
          <div className="form-wrap">
            <form onSubmit={HandleSubmit} encType="multipart/form-data">
              <label>Title</label>
              <input
                value={uploadData.title}
                onChange={HandleUploadData}
                name="title"
                type="text"
                required
              />
              <div className="brand-price">
                <div className="price">
                  <label>Price</label>
                  <input
                    value={uploadData.price}
                    onChange={HandleUploadData}
                    name="price"
                    type="number"
                    required
                  />
                </div>
                <div className="brand">
                  <label>Brand</label>
                  <input
                    value={uploadData.brand}
                    onChange={HandleUploadData}
                    name="brand"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="brand-price">
                <div className="brand">
                  <label>Category</label>
                  <br />
                  <select
                    value={category}
                    onChange={HandleCategory}
                    name="category"
                    required
                  >
                    <option value="Mobile">Mobile</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Cars">Cars</option>
                    <option value="Furniture">Furniture</option>
                  </select>
                </div>
                <div className="price">
                  <label>Usage</label>
                  <input
                    value={uploadData.usage}
                    onChange={HandleUploadData}
                    name="usage"
                    type="text"
                    required
                  />
                </div>
              </div>
              <label>Description</label>
              <br />
              <textarea
                value={uploadData.description}
                onChange={HandleUploadData}
                name="description"
                required
              />
              <label>Photo ( .jpg/ .jpeg/ .png )</label>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="img"
                onChange={HandleImage}
              />
              <Button
                variant="contained"
                size="small"
                type="submit"
                sx={{
                  color: "color",
                  textTransform: "none",
                  width: 100 + "%",
                  backgroundColor: "#205E61",
                  marginTop: 3,
                  ":hover": { backgroundColor: "#205E61" },
                }}
              >
                Upload
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
