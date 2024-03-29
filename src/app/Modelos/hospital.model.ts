export interface Hospital {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    is_active?: number;
    created_at?: string;
    updated_at?: string;
}