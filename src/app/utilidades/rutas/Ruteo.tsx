import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { CanCrear } from "../../componentes/canciones/CancionCrear";
import { CanListar } from "../../componentes/canciones/CancionListar";
import { CanAdmin } from "../..//componentes/canciones/CancionAdmin";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={< Inicio/>} />

      <Route path="/cancre" element={<CanCrear />} />
      <Route path="/canlis" element={<CanListar />} />
      <Route path="/canadm" element={<CanAdmin />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
