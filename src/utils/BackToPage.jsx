import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BackToPage() {
  
  const navigate = useNavigate();
  navigate(-1);

  return null;
}

export default BackToPage