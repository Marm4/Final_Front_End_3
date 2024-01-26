import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const DentistDetail = () => {
  
  const [dentistDetails, setDentistDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDentistDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentistDetails(data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentistDetails();
  }, [id]); 
  
  return (
    <div className='detail'>
      <h1>Detalles del Dentista</h1>
      {dentistDetails ? (
        <>
          <h2>{dentistDetails.name}</h2>
          <p>Email: {dentistDetails.email}</p>
          <p>Teléfono: {dentistDetails.phone}</p>
          <p>Sitio Web: {dentistDetails.website}</p>
         
        </>
      ) : (
        <p>Cargando detalles del dentista...</p>
      )}
    </div>
  );
};

export default DentistDetail;