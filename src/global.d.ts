import type { Database as DB } from '@/types/supabase'

declare global {
  type Database = DB
  type Employee = DB['public']['Tables']['employees']['Row']
}
