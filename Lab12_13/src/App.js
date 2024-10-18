import React, { useEffect, useState } from 'react';

import HeaderComponent from './components/HeaderComponent'
import FormComponent from './components/FormComponent'
import StudentsComponent from './components/StudentsComponent'
import FooterComponent from './components/FooterComponent'
import './App.css';

function App() {

  const [data, setData] = useState(null)
  const [refresh, setRefresh] = useState(0)

  const fetchData = () => fetch("http://localhost:3000/api/v1/students").then(res => {
    if (!res.ok) {
      throw new Error("Response Error")
    }

    return res.json()
  }).then((data) => {
    setData(data)
  }).catch((err) => {
    alert(err)
  })

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/v1/students/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Delete student falure")
      }

      return res.json()
    }).then((_) => {
      setRefresh(Date.now())
    }).catch((err) => {
      alert(err)
    })
  };

  useEffect(() => {
    fetchData()
  }, [refresh])

  const handleRefreshData = () => {
    setRefresh(Date.now())
  }
  return (
    <div className="App">
      <HeaderComponent />
      <FormComponent onRefresh={handleRefreshData} />
      <StudentsComponent students={data} onDeleteStudent={handleDelete} />
      <FooterComponent />
    </div>
  );
}

export default App;
