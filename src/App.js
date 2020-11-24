import React, {useState, useEffect} from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.netlify.app/api/react-tabs-project';

function App() {

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if(loading) {
    return <div className='title'><h1>Loading...</h1></div>
  }

  const {company, dates, duties, title} = jobs[value];

  return (
    <div className='container'>
      <div className="title">
        <h1>Experience</h1>
      </div>

      <div className='info'>
      <div className="btn-container">
        {jobs.map((item, idx) => {
          return <button key={idx} className={`btn ${idx === value && 'btn-active'}`} onClick={() => setValue(idx)}>{item.company}</button>
        })}
      </div>

      <div className="info-container">
        <div>
          <h4>{title}</h4>
          <h5 className='company'>{company}</h5>
          <p className='date'>{dates}</p>
        </div>
        {duties.map((dutie, idx) => {
          return <div className='texts' key={idx}>
            <FaAngleDoubleRight className='icon' />
            <p>{dutie}</p>
            </div>
        })}
      </div>
      </div>
    </div>
  );
}

export default App;
