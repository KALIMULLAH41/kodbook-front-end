import React from "react";
import Navbar from "../components/Navbar";
export default function NewPost() {
  return (
    <>
      <Navbar />

      <form
        id="profileForm"
        action="/createPost"
        method="post"
        enctype="multipart/form-data"
      >
        <textarea
          name="caption"
          placeholder="Write your caption here..."
          required
        ></textarea>
        <br></br>
        <input type="file" name="photo" accept="image/*"></input>
        <br></br>
        <button type="submit">POST</button>
      </form>
    </>
  );
}
