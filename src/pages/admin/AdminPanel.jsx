// import React, { useEffect, useState } from 'react';
// import './admin.css';

// const AdminPanel = () => {
//   const [students, setStudents] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentStudent, setCurrentStudent] = useState({
//     id: '',
//     name: '',
//     avatar: ''
//   });
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loginData, setLoginData] = useState({ username: '', password: '' });

//   useEffect(() => {
//     if (isLoggedIn) {
//       fetchStudents();
//     }
//   }, [isLoggedIn]);

//   const fetchStudents = async () => {
//     try {
//       const response = await fetch('https://665e72ea1e9017dc16f00c97.mockapi.io/students');
//       const data = await response.json();
//       setStudents(data);
//     } catch (error) {
//       console.error('Ошибка при загрузке данных:', error);
//     }
//   };

//   const deleteStudent = async (id) => {
//     try {
//       await fetch(`https://665e72ea1e9017dc16f00c97.mockapi.io/students/${id}`, {
//         method: 'DELETE',
//       });
//       setStudents(students.filter(student => student.id !== id));
//     } catch (error) {
//       console.error('Ошибка при удалении:', error);
//     }
//   };

//   const editStudent = (student) => {
//     setIsEditing(true);
//     setCurrentStudent(student);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentStudent({ ...currentStudent, [name]: value });
//   };

//   const updateStudent = async (e) => {
//     e.preventDefault();
//     try {
//       await fetch(`https://665e72ea1e9017dc16f00c97.mockapi.io/students/${currentStudent.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(currentStudent),
//       });
//       setStudents(students.map(student => (student.id === currentStudent.id ? currentStudent : student)));
//       setIsEditing(false);
//       setCurrentStudent({
//         id: '',
//         name: '',
//         avatar: ''
//       });
//     } catch (error) {
//       console.error('Ошибка при обновлении:', error);
//     }
//   };

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = loginData;
//     // Проверка логина и пароля
//     if (username === 'Dilnaz' && password === '040404') {
//       setIsLoggedIn(true);
//     } else {
//       alert('Неправильный логин или пароль');
//     }
//   };

//   if (!isLoggedIn) {
//     return (
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleLoginSubmit}>
//           <label>
//             Username:
//             <input
//               type="text"
//               name="username"
//               value={loginData.username}
//               onChange={handleLoginChange}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               name="password"
//               value={loginData.password}
//               onChange={handleLoginChange}
//             />
//           </label>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div className="admin-panel">
//       {isEditing ? (
//         <div className="form-container">
//           <form onSubmit={updateStudent}>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={currentStudent.name}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Avatar:
//               <input
//                 type="text"
//                 name="avatar"
//                 value={currentStudent.avatar}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <button type="submit">Update</button>
//             <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
//           </form>
//         </div>
//       ) : (
//         <div className="items-container">
//           <h2>Students</h2>
//           <ul>
//             {students.map(student => (
//               <li key={student.id}>
//                 <img src={student.avatar} alt={student.name} className="student-avatar" />
//                 {student.name}
//                 <button onClick={() => editStudent(student)}>Edit</button>
//                 <button onClick={() => deleteStudent(student.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useEffect, useState } from 'react';
import './admin.css';

const AdminPanel = () => {
  const [students, setStudents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({
    id: '',
    name: '',
    avatar: ''
  });
  const [newStudent, setNewStudent] = useState({
    name: '',
    avatar: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  useEffect(() => {
    if (isLoggedIn) {
      fetchStudents();
    }
  }, [isLoggedIn]);

  const fetchStudents = async () => {
    try {
      const response = await fetch('https://665e72ea1e9017dc16f00c97.mockapi.io/students');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`https://665e72ea1e9017dc16f00c97.mockapi.io/students/${id}`, {
        method: 'DELETE',
      });
      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };

  const editStudent = (student) => {
    setIsEditing(true);
    setIsAdding(false);
    setCurrentStudent(student);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentStudent({ ...currentStudent, [name]: value });
  };

  const updateStudent = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://665e72ea1e9017dc16f00c97.mockapi.io/students/${currentStudent.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentStudent),
      });
      setStudents(students.map(student => (student.id === currentStudent.id ? currentStudent : student)));
      setIsEditing(false);
      setCurrentStudent({
        id: '',
        name: '',
        avatar: ''
      });
    } catch (error) {
      console.error('Ошибка при обновлении:', error);
    }
  };

  const handleNewStudentChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const addNewStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://665e72ea1e9017dc16f00c97.mockapi.io/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });
      const data = await response.json();
      setStudents([...students, data]);
      setIsAdding(false);
      setNewStudent({
        name: '',
        avatar: ''
      });
    } catch (error) {
      console.error('Ошибка при добавлении:', error);
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { username, password } = loginData;
    if (username === 'Dilnaz' && password === '040404') {
      setIsLoggedIn(true);
    } else {
      alert('Неправильный логин или пароль');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleLoginChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      {isEditing ? (
        <div className="form-container">
          <form onSubmit={updateStudent}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={currentStudent.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Avatar:
              <input
                type="text"
                name="avatar"
                value={currentStudent.avatar}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Update</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        </div>
      ) : isAdding ? (
        <div className="form-container">
          <form onSubmit={addNewStudent}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newStudent.name}
                onChange={handleNewStudentChange}
              />
            </label>
            <label>
              Avatar:
              <input
                type="text"
                name="avatar"
                value={newStudent.avatar}
                onChange={handleNewStudentChange}
              />
            </label>
            <button type="submit">Add</button>
            <button type="button" onClick={() => setIsAdding(false)}>Cancel</button>
          </form>
        </div>
      ) : (
        <div className="items-container">
          <h2>Students</h2>
          <ul>
            {students.map(student => (
              <li key={student.id}>
                <img src={student.avatar} alt={student.name} className="student-avatar" />
                {student.name}
                <button onClick={() => editStudent(student)}>Edit</button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={() => setIsAdding(true)}>Add Item</button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

