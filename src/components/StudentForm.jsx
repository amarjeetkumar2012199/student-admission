import React, { useState } from "react";
import Webcam from "react-webcam";

const StudentForm = () => {
  const [image, setImage] = useState(null);
  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Student Admission Form</h2>

      <input type="text" placeholder="Student's Name" className="input" />
      <input type="text" placeholder="Father's Name" className="input" />
      <input type="text" placeholder="Mobile Number" className="input" />
      <input type="date" placeholder="DOB" className="input" />
      <input type="text" placeholder="Receipt Number" className="input" />
      <input type="date" placeholder="Admission Date" className="input" />
      
      <select className="input">
        <option>Select Batch</option>
        <option>Batch A</option>
        <option>Batch B</option>
      </select>

      <input type="number" placeholder="Fee (Optional)" className="input" />
      <textarea placeholder="Notes (Optional)" className="input"></textarea>

      <div className="space-y-2">
        <p className="font-medium">Photo Upload</p>
        <input type="file" accept="image/*" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded w-48"
        />
        <button onClick={capture} className="bg-blue-500 text-white px-4 py-1 rounded">
          Capture Photo
        </button>
        {image && <img src={image} alt="Captured" className="w-48 mt-2 rounded shadow" />}
      </div>

      <button className="bg-green-600 text-white px-6 py-2 rounded">Submit</button>
    </div>
  );
};

export default StudentForm;
