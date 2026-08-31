// Mensajeria interna entre la oficina y los repartidores.
//
// El repartidor solo habla con la oficina, nunca con otros repartidores:
// su pantalla tiene que mostrarle una sola cosa, no una bandeja con
// conversaciones cruzadas mientras maneja. Eso lo hace cumplir el
// backend, no estos tipos.

// Una persona con la que hay conversacion abierta, para la lista.
export interface Conversacion {
  usuario_id: string;
  nombre: string;
  rol: string;
  sin_leer: number;
}

export interface MensajeInterno {
  id: string;
  de_usuario: string;
  para_usuario: string;
  texto: string;
  leido_en: string | null;
  // La entrega a la que se refiere el mensaje, si se mando desde una.
  entrega_id: string | null;
  created_at: string;
}
