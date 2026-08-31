export interface ProductoPuntoEquilibrio {
  producto_id: string;
  nombre: string;
  costo_unitario: number;
  precio_lista: number | null;
  margen_unitario: number | null;
  unidades_vendidas: number;
  contribucion_generada: number;
  punto_equilibrio_unidades: number | null;
  unidades_faltantes: number | null;
}

export interface PuntoEquilibrio {
  anio: number;
  mes: number;
  gastos_mes: number;
  ventas_mes: number;
  ganancia_mes: number;
  contribucion_generada_total: number;
  contribucion_faltante: number;
  productos: ProductoPuntoEquilibrio[];
}

export interface MesResumen {
  mes: number;
  nombre: string;
  ventas: number;
  gastos: number;
  ganancia: number;
}

export interface ResumenMensual {
  anio: number;
  meses: MesResumen[];
  totales: { ventas: number; gastos: number; ganancia: number };
}

export interface ProductoMasVendido {
  producto_id: string;
  nombre: string;
  cantidad_total: number;
  monto_total: number;
}

export interface MesProduccion {
  mes: number;
  nombre: string;
  unidades: number;
}

export interface ProduccionMensual {
  anio: number;
  meses: MesProduccion[];
}
