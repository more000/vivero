import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePageContainer() {
  return (
    <div>
      Hola desde home
      <Link to="/photos?name=zapatilla">
        Fotos
      </Link>
    </div>
  )
}
