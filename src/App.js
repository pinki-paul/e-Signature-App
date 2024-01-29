import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';

function App() {

  const [name, setName] = useState("Name");
  const [date, setDate] = useState("Date");

  const handleNameChange = (e) => {
    const targetValue = e.target.value;
    setName(targetValue);
  }


  const handleDateChange = (e) => {
    const targetValue = e.target.value;
    setDate(targetValue);
  }


  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Signature App</h1>
      <Title text={name} />
      <Title text={date} />
      <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet viverra elit. Proin aliquam arcu purus, at rutrum lectus volutpat ut. Sed ut eleifend eros. Nam et congue metus, vitae imperdiet eros. Etiam luctus libero eu elit iaculis, eu vulputate elit consectetur. Maecenas blandit leo ex, tincidunt pellentesque lectus faucibus vitae. In pharetra faucibus eros, sit amet vulputate turpis. Suspendisse condimentum quam euismod massa iaculis fermentum. Nullam vitae magna arcu.

        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec semper mauris non porttitor fringilla. Vivamus a condimentum odio, vitae sagittis mauris. Praesent ac enim faucibus, aliquet lacus id, lobortis magna. Aenean volutpat, tellus eu vehicula aliquam, augue justo molestie urna, quis sodales tellus justo eget velit. Nunc nec tristique nulla. Ut pharetra felis non convallis bibendum. Pellentesque pharetra libero nec nisl facilisis bibendum. Suspendisse fermentum faucibus diam, ac feugiat nisi porta eu. Aliquam rhoncus sollicitudin ante at dignissim. Sed ut egestas libero. Quisque non arcu suscipit, accumsan enim non, viverra tellus. Mauris suscipit efficitur ante, in porta tellus euismod non. Donec sollicitudin lacus ligula, eu egestas mauris egestas sed.

      </p>

      <div className='d-flex input-boxes'>
        <input type='text' value={name} onChange={handleNameChange} />
        <input type='date' value={date} onChange={handleDateChange} />
      </div>
    </div>
  );
}

export default App;
