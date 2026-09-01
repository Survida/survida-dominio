export interface Sensor {
  id: string;
  nombre: string;
  tipo: string;
  ubicacion?: string | null;
  unidad_medida?: string | null;
  valor_min_esperado?: number | null;
  valor_max_esperado?: number | null;
  activo: boolean;
}

export interface UltimaLecturaSensor {
  sensor: Sensor;
  ultima_lectura: { valor: number; fecha_hora: string; alerta: boolean } | null;
}

// Todo lo que el sistema quiere avisar, en una sola tabla: stock bajo,
// un service que vence, un cliente con envases sin devolver.
//
// Es una tabla y no un calculo al vuelo por una razon concreta: si fuera
// un calculo, cada pasada volveria a "descubrir" el mismo problema y
// mandaria otro WhatsApp. Con la alerta guardada, el sistema pregunta
// primero si ya hay una abierta.
export type TipoAlerta =
  | 'stock_bajo'
  | 'quiebre_proximo'
  | 'mantenimiento_vehiculo'
  | 'vencimiento_documento'
  | 'envases_cliente'
  | 'rendicion_pendiente';

export type EstadoAlerta = 'abierta' | 'vista' | 'resuelta';

export interface Alerta {
  id: string;
  tipo: TipoAlerta;
  // Sobre que es. Sin clave foranea a proposito: la misma tabla sirve
  // para un producto, un vehiculo o un cliente.
  entidad: string;
  entidad_id: string | null;
  titulo: string;
  detalle: string | null;
  severidad: 'aviso' | 'urgente';
  estado: EstadoAlerta;
  // Los numeros del momento en que salto (stock que habia, umbral, km).
  // Sin esto, dentro de un mes la alerta no se puede interpretar.
  datos: Record<string, unknown>;
  avisado_en: string | null;
  creada_en: string;
  vista_por: string | null;
  vista_en: string | null;
  resuelta_en: string | null;
}

// Un ajuste editable desde la pantalla de Ajustes del panel.
export interface AjusteConfiguracion {
  clave: string;
  valor: unknown;
  descripcion: string;
  grupo: string;
  actualizado_por: string | null;
  actualizado_en: string;
}

export interface Notificacion {
  id: string;
  tipo: 'aumento_precio' | 'producto_nuevo' | 'general';
  asunto: string;
  mensaje: string;
  canal: string;
  cantidad_destinatarios: number;
  fecha: string;
}
