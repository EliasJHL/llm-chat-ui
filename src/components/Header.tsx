/**
 * License: MIT
 * Author : Elias Josué HAJJAR LLAUQUEN <elias-josue.hajjar-llauquen@epitech.eu>
 * Date   : 11/12/2025
 */

import React from 'react';

interface HeaderProps {
  ModelName: string;
  ModelTag: string;
}

const Header : React.FC<HeaderProps> = ({ ModelName, ModelTag }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2 pb-0">
        {ModelName}
      </h1>
      <h2 className="text-md text-gray-500">
        {ModelTag}
      </h2>
    </div>
  );
}

export default Header;
