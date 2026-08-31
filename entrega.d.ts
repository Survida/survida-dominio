import type { Pedido } from './pedido';

export interface Repartidor {
  id: string;
  nombre: string;
  telefono?: string | null;
  vehiculo?: string | null;
  activo: boolean;
}

export type EstadoEntrega = 'asignada' | 'en_camino' | 'entregada' | 'fallida';

export interface Entrega {
  id: string;
  pedido_id: string;
  repartidor_id: string;
  estado: EstadoEntrega;
  fecha_asignacion: string;
  fecha_entrega?: string | null;
  ubicacion_lat?: number | null;
  ubicacion_lng?: number | null;
  pedidos?: Pedido & { clientes?: { nombre: string; direccion?: string | null } };
  repartidores?: { nombre: string };
}

export interface RendimientoRepartidor {
  repartidor_id: string;
  nombre: string;
  entregas_completadas: number;
  entregas_fallidas: number;
  tiempo_promedio_minutos: number | null;
  entregas_por_dia: number;
}

export interface Vehiculo {
  id: string;
  tipo: 'camion' | 'camioneta' | 'moto' | 'otro';
  patente?: string | null;
  repartidor_id?: string | null;
  activo: boolean;
  repartidores?: { nombre: string };
}

export interface UltimaPosicionVehiculo {
  vehiculo: Vehiculo;
  ultima_ubicacion: { lat: number; lng: number; velocidad?: number; fecha_hora: string } | null;
}
