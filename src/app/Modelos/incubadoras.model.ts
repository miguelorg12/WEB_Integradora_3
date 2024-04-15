export interface Incubadora {
    id: number;
    id_hospital?: number;
    hospital?: string;
    is_active?: number;
    is_occupied?: number;
    estado?:string;
    id_bebe?: number;
    optimo?: number;
    created_at?: string;
    updated_at?: string;
}