import PropTypes from "prop-types";

export class QrsDatabase {
  constructor(
    id,
    evento,
    fechaLimite,
    creador,
    destinatario,
    tipoUso,
    cantidadGenerada,
    cantidadVecesUsado
  ) {
    this.id = id;
    this.evento = evento;
    this.fechaLimite = fechaLimite,
    this.creador = creador,
    this.destinatario = destinatario,
    this.tipoUso = tipoUso,
    this.cantidadGenerada = cantidadGenerada;
    this.cantidadVecesUsado = cantidadVecesUsado;

  }

  static propTypes = {
    id: PropTypes.string,
    evento: PropTypes.string,
    fechaLimite: PropTypes.number,
    //fechaLimite: PropTypes.instanceOf(Date),
    creador: PropTypes.string,
    destinatario: PropTypes.string,
    tipoUso: PropTypes.string,
    cantidadVecesUsado: PropTypes.number,
    cantidadGenerada: PropTypes.number,
  };
}

export class QrsDataTable {
  constructor(
    id,
    evento,
    fechaLimite,
    creador,
    destinatario,
    tipoUso,
    cantidadGenerada,
    cantidadVecesUsado
  ) {
    this.id = id;
    this.evento = evento;
    this.fechaLimite = fechaLimite,
    this.creador = creador,
    this.destinatario = destinatario,
    this.tipoUso = tipoUso,
    this.cantidadGenerada = cantidadGenerada;
    this.cantidadVecesUsado = cantidadVecesUsado;

  }

  static propTypes = {
    id: PropTypes.string,
    evento: PropTypes.string,
    fechaLimite: PropTypes.number,
    //fechaLimite: PropTypes.instanceOf(Date),
    creador: PropTypes.string,
    destinatario: PropTypes.string,
    tipoUso: PropTypes.string,
    cantidadVecesUsado: PropTypes.number,
    cantidadGenerada: PropTypes.number,
  };
}
