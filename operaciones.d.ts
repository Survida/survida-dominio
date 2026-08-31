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

export interface Notificacion {
  id: string;
  tipo: 'aumento_precio' | 'producto_nuevo' | 'general';
  asunto: string;
  mensaje: string;
  canal: string;
  cantidad_destinatarios: number;
  fecha: string;
}
