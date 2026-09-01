export interface Producto {
  id: string;
  nombre: string;
  costo_unitario: number;
  activo: boolean;
  // Cuando el stock disponible baja de aca, salta una alerta.
  // null = este producto no genera avisos.
  stock_minimo?: number | null;
  // Cuantas unidades salen de una tanda de produccion. Es lo que permite
  // que la proyeccion diga "hace una tanda de 200" y no solo "quedan 3
  // dias".
  lote_produccion_sugerido?: number | null;
}

// Las tres cifras de stock de un producto, tal como las devuelve la vista
// `stock_por_producto` (GET /stock).
//
// Son tres y no una porque el sistema descuenta el stock al CREAR el
// pedido, no al entregarlo: `disponible` ya viene sin lo que esta
// prometido, y `fisico_en_deposito` es lo que se cuenta si uno va a la
// camara. Las dos preguntas son distintas y las dos se usan.
export interface StockProducto {
  producto_id: string;
  nombre: string;
  activo: boolean;
  costo_unitario: number;
  disponible: number;
  comprometido: number;
  fisico_en_deposito: number;
  // Unidades de pedidos cancelados cuyo stock nunca se devolvio a los
  // lotes. Mientras nadie cancele nada da 0; si da distinto de 0, ese es
  // el stock que hay que reponer a mano.
  cancelado_sin_reponer: number;
  stock_minimo: number | null;
  lote_produccion_sugerido: number | null;
  bajo_minimo: boolean;
  proximo_vencimiento: string | null;
}

// Una fila de GET /stock/proyeccion: cuantos dias de stock quedan al
// ritmo de venta de los ultimos N dias.
export interface ProyeccionProducto {
  producto_id: string;
  nombre: string;
  disponible: number;
  comprometido: number;
  fisico_en_deposito: number;
  stock_minimo: number | null;
  vendido_en_periodo: number;
  dias_periodo: number;
  consumo_diario: number;
  // null cuando no se vendio nada en el periodo: no se puede proyectar
  // sobre cero, y decir "quedan infinitos dias" seria peor que no decir
  // nada.
  dias_restantes: number | null;
  fecha_estimada_quiebre: string | null;
  hay_que_producir: boolean;
  tanda_sugerida: number | null;
}

export type Modalidad = 'venta_directa' | 'revendedor' | 'empresa';

export interface ListaPrecio {
  id: string;
  producto_id: string;
  modalidad: Modalidad;
  precio: number;
  productos?: { nombre: string };
}

export interface Lote {
  id: string;
  producto_id: string;
  codigo_lote?: string | null;
  fecha_ingreso: string;
  fecha_vencimiento?: string | null;
  cantidad_ingresada: number;
  cantidad_actual: number;
  productos?: { nombre: string };
}
