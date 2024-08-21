import { useState } from 'react';

function ReviewForm() {
    const [values, setValues] = useState({
      title: '',
      rating: 0,
      content: '',
    }); // 세개의 state를 묶고 객체로 초기화
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues((prevValues) => ({ ...prevValues, [name]: value})) 
      // 안전하게 콜백함수+spreading으로 setter
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values);
    };
  
    return (
      <form className="ReviewForm" onSubmit={handleSubmit}>
        <input value={values.title} name="title" onChange={handleChange} />
        <input type="number" value={values.rating} name="rating" onChange={handleChange} />
        <textarea value={values.content} name="content" onChange={handleChange} />
        <button type="submit">확인</button>
      </form>
    );
  }
  
  export default ReviewForm;
  