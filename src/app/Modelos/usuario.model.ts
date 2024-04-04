export interface Usuario {
    id: number;
    name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password?: string;
    is_active?: number;
    id_rol?: number;
    id_hospital?: number;
    hospital?: string;
    rol?: string;
    created_at?: string;
    updated_at?: string;
}