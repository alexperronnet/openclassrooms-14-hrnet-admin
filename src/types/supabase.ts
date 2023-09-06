export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      employees: {
        Row: {
          city: string | null
          created_at: string
          date_of_birth: Date
          department: string
          first_name: string
          gender: string
          id: string
          last_name: string
          start_date: Date
          state: string | null
          street_address: string | null
          zip_code: number | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          date_of_birth: Date
          department: string
          first_name: string
          gender: string
          id?: string
          last_name: string
          start_date: Date
          state?: string | null
          street_address?: string | null
          zip_code?: number | null
        }
        Update: {
          city?: string | null
          created_at?: string
          date_of_birth?: Date
          department?: string
          first_name?: string
          gender?: string
          id?: string
          last_name?: string
          start_date?: Date
          state?: string | null
          street_address?: string | null
          zip_code?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
